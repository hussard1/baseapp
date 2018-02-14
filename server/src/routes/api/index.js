const express = require('express')
const users = require('./user/user')
const todo = require('./todo/index')
const router = express.Router()
const authMiddleware = require('../../middlewares/auth')

router.use('/users/getinfo', authMiddleware)
router.use('/users/list', authMiddleware)
router.use('/todo', authMiddleware)
/* GET users listing. */
router.use('/todo', todo)
router.use('/users', users)

module.exports = router
