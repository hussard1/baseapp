'use strict'

const google = require('googleapis')
// const plus = google.plus('v1');
const OAuth2Client = google.auth.OAuth2
const plus = google.plus('v1')
const {googleOAuth2Client} = require('../config')

// Client ID and client secret are available at
// https://code.google.com/apis/console
const CLIENT_ID = googleOAuth2Client.client_id
const CLIENT_SECRET = googleOAuth2Client.client_secret
const REDIRECT_URL = googleOAuth2Client.redirect_uris[0]

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/plus.me'
]

export default {
  getAuthUrl () {
    // generate consent page url
    return oauth2Client.generateAuthUrl({
      access_type: 'offline', // will return a refresh token
      scope: scopes // can be a space-delimited string or an array of scopes
    })
  },
  getAccessToken (code) {
    return new Promise((resolve, reject) => {
      oauth2Client.getToken(code, (err, tokens) => {
        if (err) reject(err)
        oauth2Client.credentials = tokens
        resolve({tokens, oauth2Client})
      })
    })
  },
  getUserDetails (oauth2Client) {
    return new Promise((resolve, reject) => {
      plus.people.get(
        {userId: 'me', auth: oauth2Client},
        (err, response) => {
          if (err) reject(err)
          resolve(response)
        }
      )
    })
      .then(data => {
        return {
          name: data.displayName,
          email: data.emails[0].value,
          profileImage: data.image.url
        }
      })
  }
}