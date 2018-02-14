const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
  function connect () {
    mongoose.connect(config.mongodbUri, function (err) {
      if (err) {
        console.error('mongodb connection error', err)
      }
      console.log('mongodb connected')
    })
  }

  connect()
  mongoose.connection.on('disconnected', connect)
}