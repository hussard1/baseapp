const jwt = require('jsonwebtoken')
const authService = require('../service/authService')

const authMiddleware = (req, res, next) => {
  const token = req.headers['x-access-token']

  // if it has failed to verify, it will return an error message
  const onError = (error) => {
    res.status(403).json({
      message: error.message
    })
  }

  // process the promise
  authService.checkToken(token).then((decoded) => {
    req.decoded = decoded
    next()
  }).catch(onError)
}

module.exports = authMiddleware
