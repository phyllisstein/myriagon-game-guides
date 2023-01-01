import { env } from '$env/dynamic/private'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import {
  ApolloClient,
  InMemoryCache,
  type ApolloQueryResult,
  type NormalizedCacheObject,
  type OperationVariables,
  type QueryOptions,
} from '@apollo/client'

let client: ApolloClient<NormalizedCacheObject>

async function getTowerToken (): Promise<string> {
  try {
    const rawCache = await fs.readFile(path.resolve(__dirname, '../../../.chorus/cache.json'), 'utf8')
    const cache = JSON.parse(rawCache)

    const credentials = cache?.__data['https://auth.voxmedia.com:client_credentials:v1']
    const expiry = credentials?.expires
      ? new Date(credentials.expires * 1000).getTime() - Date.now()
      : 0
    if (expiry < 0) {
      throw new Error('Tower token has expired')
    }

    return credentials?.data
  } catch (error) {
    console.error(`Error reading Tower token: ${ error }`)
    throw error
  }
}

async function getClient () {
  if (!client) {
    const {
      TOWER_URI = 'https://tower.voxmedia.com/graphql',
    } = process.env

    const token = await getTowerToken()

    client = new ApolloClient({
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${ token }`,
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
