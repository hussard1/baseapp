import todoService from '../../../service/todoService'

const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  const respond = (todo) => {
    res.json({
      todo
    })
  }

  // run when there is an error (username exists)
  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    })
  }

  todoService.list().then(respond).catch(onError)
})

router.post('/write', (req, res) => {

  const {title, details} = req.body
  const email = req.decoded.email

  const respond = () => {
    res.json({
      message: 'write todo successfully.',
    })
  }
  // run when there is an error (username exists)
  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    })
  }

  todoService.write(email, title, details).then(respond).catch(onError)
})

router.post('/update', (req, res) => {

  const {id, title, details} = req.body
  const email = req.decoded.email

  const respond = () => {
    res.json({
      message: 'update todo successfully.',
    })
  }

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    })
  }

  // 맞으면 업데이트
  todoService.update(id, email, title, details).then(respond).catch(onError)
})

router.post('/delete', (req, res) => {
  const {id} = req.body
  const email = req.decoded.email

  const respond = () => {
    res.json({
      message: 'delete todo successfully.',
    })
  }
  // run when there is an error (username exists)
  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    })
  }

  todoService.remove(id, email).then(respond).catch(onError)
})

module.exports = router