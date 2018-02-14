const express = require('express')
const api = require('./api/index')
const page = require('./page/index')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'})
})

router.use('/api', api)
router.use('/page', page)

module.exports = router
