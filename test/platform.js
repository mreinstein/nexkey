'use strict'

const proxyquire = require('proxyquire')
const test       = require('tap').test



test('default to production', async function(t) {
  const nexkey = proxyquire('../', { 'node-fetch': function stubbedFetch(url, options) {
    t.equal(url, 'https://api.nexkey.com/rest/functions/signIn')
    return { json: function() { return {} }}
  } })

  const client = nexkey({ NEXKEY_API_SECRET: '123', NEXKEY_API_KEY: '456' })

  await client.signIn({ })

  t.end()
})


test('specify staging', async function(t) {
  const nexkey = proxyquire('../', { 'node-fetch': function stubbedFetch(url, options) {
    t.equal(url, 'https://nexkey-beta.herokuapp.com/rest/functions/signIn')
    return { json: function() { return {} }}
  } })

  const client = nexkey({ ENVIRONMENT: 'STAGING', NEXKEY_API_SECRET: '123', NEXKEY_API_KEY: '456' })

  await client.signIn({ })

  t.end()
})
