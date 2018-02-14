const express = require('express')
const router = express.Router()
const users = require('./user/user')
const authMiddleware = require('../../middlewares/auth')

/* GET users listing. */
router.use('/users', users)

module.exports = router
