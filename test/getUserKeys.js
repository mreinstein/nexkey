'use strict'

const proxyquire = require('proxyquire')
const test       = require('tap').test


const URL_PREFIX = 'https://api.nexkey.com/rest/functions/'


test('basic', async function(t) {
  const nexkey = proxyquire('../', { 'node-fetch': function stubbedFetch(url, options) {
    t.equal(url, URL_PREFIX + 'getUserKeys')
    return { json: function() { return {} }}
  } })

  const client = nexkey({ NEXKEY_API_SECRET: '123', NEXKEY_API_KEY: '456' })

  await client.getUserKeys({ phone: '' })

  t.end()
})
