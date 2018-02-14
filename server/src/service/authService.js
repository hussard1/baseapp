import googleService from './googleService'

const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = require('../config').secret

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email
    },
    secret,
    {
      expiresIn: '7d',
      subject: 'userInfo'
    })
}

module.exports = {
  register (email, password) {
    const create = (user) => {
      if (user) throw new Error('email exists')
      else return User.create(email, password)
    }

    return User.findOneByEmail(email)
      .then(create)
  },
  login (email, password) {

    const check = (user) => {
      if (!user) {
        throw new Error('Invalid email')
      }

      if (!user.verify(password)) {
        throw new Error('Invalid password')
      }

      return createToken(user)
    }
    return User.findOneByEmail(email).then(check)
  },

  checkToken (token) {
    return new Promise(
      (resolve, reject) => {
        if (!token) {
          throw new Error('need token')
        }
        jwt.verify(token, secret, (err, decoded) => {
          if (err) reject(err)
          resolve(decoded)
        })
      }
    )
  },

  googleAuthUrl () {
    return googleService.getAuthUrl()
  },

  googleAuthLogin (code) {
    return googleService.getAccessToken(code)
      .then((data) => {
        return googleService.getUserDetails(data.oauth2Client)
      }).then((user) => {
        const checkExist = (u) => {
          if (!u) {
            return User.create(user.email, null, 'google')
              .then((user) => {
                return {
                  user: user,
                  token: createToken(user)
                }
              })
          } else {
            return {
              user: u,
              token: createToken(u)
            }
          }
        }
        // 만약 유저가 비회원이면, 회원가입한다.
        return User.findOneByEmail(user.email).then(checkExist)
      })
  }
}