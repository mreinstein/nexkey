'use strict'

const fetch = require('node-fetch')


// api docs
// https://nexkey-beta.herokuapp.com/documentation

// dashboard
// https://nk-web-beta.herokuapp.com/apikeys

// NOTE: if phone and email are listed for 2 users, prioritizes phone number?
//       needs verification from nexkey

const APINumber = '2'
const ENDPOINT = 'https://nexkey-beta.herokuapp.com'


module.exports = function nexkey(options) {
  const { NEXKEY_API_SECRET, NEXKEY_API_KEY } = options

  const headers = {
    'Nexkey-Api-Secret': NEXKEY_API_SECRET,
    'Nexkey-Api-Key': NEXKEY_API_KEY,
    'Content-Type': 'application/json',
  }

  const sendKey = async function(options) {
    const { phone, email, lockId } = options

    const url = ENDPOINT + '/rest/functions/sendKey'

    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        APINumber,
        email,
        phone,
        lockId
      }),
      headers
    })

    return result.json()
  }


  const revokeKey = async function(options) {
    const { phone, email, lockId } = options

    const  url = ENDPOINT + '/rest/functions/revokeKey'

    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        APINumber,
        email,
        phone,
        lockId
      }),
      headers
    })

    return result.json()
  }


  // returns list of user's keys intersecting with the all of the keys accessible to the nexkey account
  // NOTE: passing empty phone and email returns all keys for the API key
  const getUserKeys = async function(options) {
    const { phone, email } = options

    const url = ENDPOINT + '/rest/functions/getUserKeys'
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        APINumber,
        email,
        phone
      }),
      headers
    })

    return result.json()
  }

  return { sendKey, revokeKey, getUserKeys }
}
