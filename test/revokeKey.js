'use strict'

const proxyquire = require('proxyquire')
const test       = require('tap').test


const URL_PREFIX = 'https://api.nexkey.com/rest/functions/'


test('basic', async function(t) {
  const nexkey = proxyquire('../dist/nexkey.cjs.js', { 'node-fetch': function stubbedFetch(url, options) {
    t.equal(url, URL_PREFIX + 'revokeKey')
    return { json: function() { return {} }}
  } })

  const client = nexkey({ NEXKEY_API_SECRET: '123', NEXKEY_API_KEY: '456' })

  await client.revokeKey({ })

  t.end()
})
