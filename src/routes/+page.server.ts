import { fetchTowerEntry, parseEntryBody } from '$lib/content.js'

import type { PageLoad } from './$types'

export const load = (async () => {
  const result = await fetchTowerEntry({ url: 'https://www.vox.com/the-highlight/23323231/ruben-gallego-arizona-latino-voters' })
  if (!result.success) {
    console.error(`Failed to load entry:`, result.inputErrors, result.environmentErrors)
    return {}
  }

  return {
    entry: result.data,
  }
}) satisfies PageLoad
