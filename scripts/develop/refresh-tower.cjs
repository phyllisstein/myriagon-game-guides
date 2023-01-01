#!/usr/bin/env node

const { getAuthClient } = require('@voxmedia/duet-auth')

;(async () => {
  const token = await getAuthClient().getToken()
  console.log(token)
})()
