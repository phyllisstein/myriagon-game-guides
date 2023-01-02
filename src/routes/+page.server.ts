import { pipe } from 'domain-functions'

import { createEntryBodyGraph, createEntryGraph, fetchTowerEntry, parseEntryBody } from '$lib/content.js'

import type { PageServerLoad } from './$types'

export const load = (async () => {
  const getEntry = pipe(
    fetchTowerEntry,
    parseEntryBody,
    createEntryGraph,
    createEntryBodyGraph,
  )

  const result = await getEntry({ url: 'https://www.vox.com/the-highlight/23323231/ruben-gallego-arizona-latino-voters' })

  if (!result.success) {
    console.error(`Failed to load entry:`, result)
    throw new Error()
  }

  return {
    entry: result.data,
  }
}) satisfies PageServerLoad
