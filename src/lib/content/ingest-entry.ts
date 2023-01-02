import { env } from '$env/dynamic/private'

import { gql } from '@apollo/client'
import { makeDomainFunction } from 'domain-functions'
import neo4j from 'neo4j-driver'
import * as R from 'ramda'
import * as z from 'zod'

import type { IngestEntryQuery, IngestEntryQueryVariables } from '../../__generated__/tower'

import { queryTower } from './tower-client'

const {
  NEO4J_PASSWORD = 'myriagon',
  NEO4J_URI = 'bolt://localhost:7687',
  NEO4J_USERNAME = 'neo4j',
} = env

const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
)

export const fetchTowerEntry = makeDomainFunction(z.object({
  url: z.string(),
}))( async ({ url }) => {
  const result = await queryTower<
    IngestEntryQuery,
    IngestEntryQueryVariables
  >({
    query: gql`
      query IngestEntry($url: URL!) {
        entry(url: $url) {
          uuid
          title
          dek {
            plaintext
          }
          leadComponent {
            __typename

            ... on EntryLeadImage {
              image {
                url
              }
              caption {
                plaintext
              }
            }
          }
          body {
            components {
              __typename

              ... on EntryBodyEmbed {
                embed {
                  provider {
                    name
                    url
                  }
                  url
                  author {
                    name
                    url
                  }
                }
                placement {
                  id
                }
              }

              ... on EntryBodyImage {
                image {
                  url
                  caption {
                    plaintext
                  }
                }
                placement {
                  id
                }
              }

              ... on EntryBodyParagraph {
                dropcap
                lead
                endmark
                format {
                  plaintext
                }
                placement {
                  id
                }
              }

              ... on EntryBodyPullquote {
                placement {
                  id
                }
                quote {
                  plaintext
                }
              }

              ... on EntryBodySidebar {
                sidebar {
                  uuid
                  title
                }
              }
            }
          }
        }
      }
    `,
    variables: { url },
  })

  return result.data.entry
})

const entryBodyEmbedSchema = z.object({
  __typename: z.literal('EntryBodyEmbed'),
  embed: z.object({
    author: z.object({
      name: z.string(),
      url: z.string(),
    }),
    provider: z.object({
      name: z.string(),
      url: z.string(),
    }),
  }),
  placement: z.object({
    id: z.string(),
  }),
})
type EntryBodyEmbed = z.infer<typeof entryBodyEmbedSchema>

const entryBodyImageSchema = z.object({
  __typename: z.literal('EntryBodyImage'),
  image: z.object({
    caption: z.object({
      plaintext: z.string(),
    }).nullable(),
    url: z.string(),
  }),
  placement: z.object({
    id: z.string(),
  }),
})
type EntryBodyImage = z.infer<typeof entryBodyImageSchema>

const entryBodyParagraphSchema = z.object({
  __typename: z.literal('EntryBodyParagraph'),
  dropcap: z.boolean(),
  endmark: z.boolean(),
  format: z.object({
    plaintext: z.string(),
  }),
  lead: z.boolean(),
  placement: z.object({
    id: z.string(),
  }),
})
type EntryBodyParagraph = z.infer<typeof entryBodyParagraphSchema>

const entryBodySidebarSchema = z.object({
  __typename: z.literal('EntryBodySidebar'),
  sidebar: z.object({
    uuid: z.string(),
    title: z.string(),
  }),
})
type EntryBodySidebar = z.infer<typeof entryBodySidebarSchema>

const entryBodyPullquoteSchema = z.object({
  __typename: z.literal('EntryBodyPullquote'),
  placement: z.object({
    id: z.string(),
  }),
  quote: z.object({
    plaintext: z.string(),
  }),
})
type EntryBodyPullquote = z.infer<typeof entryBodyPullquoteSchema>

const componentSchema = z.discriminatedUnion('__typename', [
  entryBodyEmbedSchema,
  entryBodyImageSchema,
  entryBodyParagraphSchema,
  entryBodyPullquoteSchema,
  entryBodySidebarSchema,
])
type EntryBodyComponent = z.infer<typeof componentSchema>

const entrySchema = z.object({
  body: z.object({
    components: z.array(componentSchema),
  }),
  dek: z.object({
    plaintext: z.string(),
  }),
  title: z.string(),
  uuid: z.string(),
})

export const parseEntryBody = makeDomainFunction(entrySchema)(async entry => entry)

export const createEntryGraph = makeDomainFunction(entrySchema)(async entry => {
  const session = driver.session()

  await session.executeWrite(async tx => {
    await tx.run(
      `
        MERGE (entry:Entry { uuid: $uuid, title: $title, dek: $dek })
        RETURN entry
      `,
      {
        dek: entry.dek.plaintext,
        title: entry.title,
        uuid: entry.uuid,
      },
    )
  })

  await session.close()

  return entry
})

export const createEntryBodyGraph = makeDomainFunction(entrySchema)(async entry => {
  const getComponentAttributes = (component: EntryBodyComponent) => {
    let attributes

    switch (component.__typename) {
      case 'EntryBodyImage': {
        const {
          __typename,
          image,
          placement,
          ...rest
        } = component

        attributes = {
          ...rest,
          caption: image?.caption?.plaintext,
          url: image?.url,
          id: placement?.id,
        }
        break
      }

      case 'EntryBodyParagraph': {
        const {
          __typename,
          format,
          placement,
          ...rest
        } = component

        attributes = {
          ...rest,
          text: format?.plaintext,
          id: placement?.id,
        }
        break
      }

      case 'EntryBodyEmbed': {
        const {
          __typename,
          embed: {
            provider,
            author,
          },
          placement,
          ...rest
        } = component

        attributes = {
          ...rest,
          authorName: author?.name,
          authorURL: author?.url,
          id: placement?.id,
          providerName: provider?.name,
          providerURL: provider?.url,
        }
        break
      }

      case 'EntryBodyPullquote': {
        const {
          __typename,
          placement,
          quote,
          ...rest
        } = component

        attributes = {
          ...rest,
          id: placement?.id,
          text: quote?.plaintext,
        }
        break
      }

      case 'EntryBodySidebar': {
        attributes = {
          id: component?.sidebar?.uuid,
          title: component?.sidebar?.title,
        }
        break
      }

      default:
        return null
    }

    return attributes
  }

  const session = driver.session()

  try {
    await session.executeWrite(async tx => {
      const firstComponent = R.path(['body', 'components', 0], entry)
      if (!firstComponent) {
        throw new Error('Entry must have at least one body component')
      }

      const firstComponentAttributes = getComponentAttributes(firstComponent)
      const firstComponentLabels = ['EntryBodyComponent', firstComponent.__typename].join(':')

      if (!firstComponentAttributes || !firstComponentLabels) {
        throw new Error('Entry must have at least one body component')
      }

      await tx.run(
        `
          MATCH (entry:Entry { uuid: $uuid })
          MERGE (entry) -[:HAS_BODY]-> (body:EntryBody) -[:FIRST_CHILD]-> (firstChild:${ firstComponentLabels } { id: $attributes.id })
          ON CREATE SET firstChild = $attributes
        `,
        {
          attributes: firstComponentAttributes,
          uuid: entry.uuid,
        },
      )

      const secondComponent = R.path(['body', 'components', 1], entry)
      if (!secondComponent) {
        return
      }

      const secondComponentLabels = ['EntryBodyComponent', secondComponent?.__typename].join(':')
      const secondComponentAttributes = getComponentAttributes(secondComponent)
      if (!secondComponentAttributes || !secondComponentLabels) {
        return
      }

      await tx.run(
        `
          MATCH (entry:Entry { uuid: $uuid }) -[:HAS_BODY]-> (body:EntryBody) -[:FIRST_CHILD]-> (firstChild)
          MERGE (firstChild) -[:NEXT_SIBLING]-> (secondChild:${ secondComponentLabels } { id: $attributes.id })
          SET secondChild = $attributes
        `,
        {
          attributes: secondComponentAttributes,
          uuid: entry.uuid,
        },
      )

      for await (const component of R.slice(2, Infinity, entry.body.components)) {
        const attributes = getComponentAttributes(component)
        const componentLabels = ['EntryBodyComponent', component.__typename].join(':')

        if (!attributes || !componentLabels) {
          console.log('Skipping component', component.__typename)
          console.log({ attributes, componentLabels })
          continue
        }

        await tx.run(
          `
            MATCH (entry:Entry { uuid: $uuid }) -[*]-> (lastSibling:EntryBodyComponent)
            WHERE NOT EXISTS {
              (lastSibling) -[:NEXT_SIBLING]-> ()
            } AND NOT EXISTS {
              (:EntryBodyComponent { id: $attributes.id })
            }
            MERGE (lastSibling) -[:NEXT_SIBLING]-> (nextSibling:${ componentLabels } { id: $attributes.id })
            ON CREATE SET nextSibling += $attributes
          `, { uuid: entry.uuid, attributes }
        )
      }
    })
  } catch (error) {
    console.error(error)
  } finally {
    await session.close()
  }

  return entry
})
