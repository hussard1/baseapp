const express = require('express')
const authService = require('../../../service/authService')
import userService from '../../../service/userService'

const router = express.Router()

router.post('/signup', (req, res) => {
  const {email, password} = req.body

  const respond = () => {
    res.json({
      message: 'registered successfully',
    })
  }

  // run when there is an error (username exists)
  const onError = (error) => {
    res.status(409).json({
      message: error.message,
      code: 1
    })
  }

  authService.register(email, password)
    .then(respond)
    .catch(onError)

})

router.post('/signin', (req, res) => {
  const {email, password} = req.body

  const respond = (token) => {
    res.json({
      message: 'logged in successfully',
      token: token
    })
  }

  const onError = (error) => {
    res.status(401).json({
      message: error.message
    })
  }

  authService.login(email, password)
    .then(respond)
    .catch(onError)
})

router.get('/googleAuthUrl', (req, res) => {

  const googleAuthUrl = authService.googleAuthUrl()

  if (googleAuthUrl) {
    res.json({
      message: 'Get google auth url successfully',
      url: googleAuthUrl
    })
  } else {
    res.status(403).json({
      message: 'Fail to get google auth url'
    })

  }
})

router.get('/getinfo', (req, res) => {
  res.json({
    info: req.decoded
  })
})

router.get('/list', (req, res) => {

  const respond = (users) => {
    res.json({
      users
    })
  }

  // run when there is an error (username exists)
  const onError = (error) => {
    res.status(409).json({
      message: error.message
    })
  }

  userService.list().then(respond).catch(onError)
})

router.post('/logout', (req, res) => {
  return res.json({success: true})
})

module.exports = router
