import { env } from '$env/dynamic/private'

import {
  ApolloClient,
  InMemoryCache,
  type ApolloQueryResult,
  type NormalizedCacheObject,
  type OperationVariables,
  type QueryOptions,
} from '@apollo/client'

let client: ApolloClient<NormalizedCacheObject>

async function getClient () {
  if (!client) {
    const {
      TOWER_TOKEN,
      TOWER_URI = 'https://tower.voxmedia.com/graphql',
    } = process.env

    if (!TOWER_TOKEN) {
      throw new Error('TOWER_TOKEN is required')
    }

    client = new ApolloClient({
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${ TOWER_TOKEN }`,
      },
      uri: TOWER_URI,
    })
  }

  return client
}

export async function queryTower<T = unknown, TVariables = OperationVariables> (
  options: QueryOptions<TVariables, T>,
): Promise<ApolloQueryResult<T>> {
  try {
    const client = await getClient()
    return client.query<T, TVariables>(options)
  } catch (error) {
    console.error(`Error querying Tower: ${ error }`)
    throw error
  }
}
