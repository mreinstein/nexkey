'use strict'

const proxyquire = require('proxyquire')
const test       = require('tap').test


const URL_PREFIX = 'https://nexkey-beta.herokuapp.com/rest/functions/'

test('constructor', async function(t) {
  const nexkey = proxyquire('../', { 'node-fetch': function stubbedFetch(url, options) {
    t.equal(options.method, 'POST')
    t.deepEqual(options.headers, {
      'Nexkey-Api-Secret': '123',
      'Nexkey-Api-Key': '456',
      'Content-Type': 'application/json'
    })

    t.ok(url.indexOf('https://nexkey-beta.herokuapp.com/rest/functions/') === 0)

    return { json: function() { return {} }}
  } })

  const client = nexkey({ NEXKEY_API_SECRET: '123', NEXKEY_API_KEY: '456' })

  await client.getLockUsers()

  t.end()
})


test('basic', async function(t) {
  const nexkey = proxyquire('../', { 'node-fetch': function stubbedFetch(url, options) {
    t.equal(url, URL_PREFIX + 'getLockUsers')
    return { json: function() { return {} }}
  } })

  const client = nexkey({ NEXKEY_API_SECRET: '123', NEXKEY_API_KEY: '456' })

  await client.getLockUsers()

  t.end()
})
