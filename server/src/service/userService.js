const User = require('../models/user')

export default {
  list () {
    return User.find()
  }
}