# nexkey

[![Build Status](https://travis-ci.org/mreinstein/nexkey.svg?branch=master)](https://travis-ci.org/mreinstein/nexkey)

javascript sdk for nexkey's awesome lock product



## usage

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


see https://nexkey-beta.herokuapp.com/documentation for full details on the endpoints available.
