# nexkey

![tests](https://github.com/mreinstein/nexkey/actions/workflows/main.yml/badge.svg)


Javascript SDK for Nexkey's awesome lock product



## including

```javascript
import nexkey from 'nexkey'  // modern es modules approach

// *OR*

const nexkey = require('nexkey') // commonjs (node) approach
```


## basic usage

```javascript
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
