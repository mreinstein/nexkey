'use strict'

const fetch = require('node-fetch')


// dashboard (production) https://nexkey-web.herokuapp.com/apikeys
// dashboard (sandbox) https://nk-web-beta.herokuapp.com/apikeys

// CONFIRMED by Nexkey: if phone and email are listed for 2 users,
// the sendKey and revokeKey functions prioritize phone number and ignore
// the email if a user is found with the phone number.

module.exports = function nexkey(options) {
  const { NEXKEY_API_SECRET, NEXKEY_API_KEY } = options


  const signIn = async function(options) {
    const { userIdentifier, password } = options
    return _post('signIn', { userIdentifier, password })
  }


  // @return Array Retrieve keys for a target lock.
  const getLockUsers = async function(lockId) {
    return _post('getLockUsers', { lockId })
  }


  const sendKey = async function(options) {
    const { phone, email, lockId } = options
    return _post('sendKey', { email, phone, lockId })
  }


  const revokeKey = async function(options) {
    const { phone, email, lockId } = options
    return _post('revokeKey', { email, phone, lockId })
  }


  // returns list of user's keys intersecting with the all of the keys accessible to the nexkey account
  // NOTE: passing empty phone and email returns all keys for the API key
  const getUserKeys = async function(options) {
    const { phone, email } = options
    return _post('getUserKeys', { email, phone })
  }


  // @return Promise resolves to a javascript object
  const _post = async function(fnName, body) {
    const url = 'https://nexkey-beta.herokuapp.com/rest/functions/' + fnName

    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Nexkey-Api-Version': '2.0.0',
        'Nexkey-Api-Secret': NEXKEY_API_SECRET,
        'Nexkey-Api-Key': NEXKEY_API_KEY,
        'Content-Type': 'application/json',
      }
    })
    return result.json()
  }


  return { signIn, getLockUsers, sendKey, revokeKey, getUserKeys }
}
