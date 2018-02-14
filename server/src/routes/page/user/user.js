import { Base64 } from 'js-base64'

const express = require('express')
const authService = require('../../../service/authService')
const router = express.Router()

router.get('/googleAuthLogin', (req, res) => {

  const {code} = req.query

  const respond = (result) => {

    let loginData = {
      isLoggedIn: true,
      email: result.user.email,
      token: result.token
    }

    res.cookie('key', Base64.encodeURI(JSON.stringify(loginData)))
    res.redirect('/')
  }

  const onError = (error) => {
    console.log(error)
    res.redirect('/login')
  }

  authService.googleAuthLogin(code).then(respond).catch(onError)
})

module.exports = router
