import { pipe } from 'domain-functions'

import { fetchTowerEntry, parseEntryBody } from '$lib/content.js'

import type { PageServerLoad } from './$types'

export const load = (async () => {
  const getEntry = pipe(
    fetchTowerEntry,
    parseEntryBody,
  )

  const result = await getEntry({ url: 'https://www.vox.com/the-highlight/23323231/ruben-gallego-arizona-latino-voters' })

  if (!result.success) {
    console.error(`Failed to load entry:`, result.inputErrors, result.environmentErrors)
    throw new Error()
  }

  return result.data
}) satisfies PageServerLoad
