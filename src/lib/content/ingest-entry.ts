import { env } from '$env/dynamic/private'

import { gql } from '@apollo/client'
import { makeDomainFunction } from 'domain-functions'
import neo4j from 'neo4j-driver'
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

const entryBodyPullquoteSchema = z.object({
  __typename: z.literal('EntryBodyPullquote'),
})

const entryBodySidebarSchema = z.object({
  __typename: z.literal('EntryBodySidebar'),
})

const componentSchema = z.discriminatedUnion('__typename', [
  entryBodyEmbedSchema,
  entryBodyImageSchema,
  entryBodyParagraphSchema,
  entryBodyPullquoteSchema,
  entryBodySidebarSchema,
])

export const parseEntryBody = makeDomainFunction(
  z.object({
  uuid: z.string(),
  title: z.string(),
  dek: z.object({
    plaintext: z.string(),
  }),
  body: z.object({
    components: z.array(componentSchema),
  }),
})
)(async entry => ({ entry }))
