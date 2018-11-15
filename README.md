# nexkey

[![Build Status](https://travis-ci.org/mreinstein/nexkey.svg?branch=master)](https://travis-ci.org/mreinstein/nexkey)

[![Greenkeeper badge](https://badges.greenkeeper.io/mreinstein/nexkey.svg)](https://greenkeeper.io/)

javascript sdk for nexkey's awesome lock product



## commonjs (node) usage

```javascript
const nexkey = require('nexkey')

const client = nexkey({
  // api credentials from nexkey beta
  NEXKEY_API_SECRET: process.env.NEXKEY_API_KEY,
  NEXKEY_API_KEY: process.env.NEXKEY_API_KEY
})


// phone and email are optional but you must send at least one
const phone = '5551236789'
const email = 'john.doe@test.com'
const result = await client.sendKey({ phone, email })

```


## es module usage

```javascript
import nexkey from 'nexkey'

const client = nexkey({
  // api credentials from nexkey beta
  NEXKEY_API_SECRET: process.env.NEXKEY_API_KEY,
  NEXKEY_API_KEY: process.env.NEXKEY_API_KEY
})


// phone and email are optional but you must send at least one
const phone = '5551236789'
const email = 'john.doe@test.com'
const result = await client.sendKey({ phone, email })

```


## staging

to access nexkey's staging API, pass an `ENVIRONMENT` property, like this:

```javascript
const client = nexkey({

  ENVIRONMENT: 'STAGING',

  // api credentials from nexkey beta
  NEXKEY_API_SECRET: process.env.NEXKEY_API_KEY,
  NEXKEY_API_KEY: process.env.NEXKEY_API_KEY
})

// use client normally here...

```


see https://api.nexkey.com/documentation for full details on the endpoints available.
