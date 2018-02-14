const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  admin: {type: Boolean, default: false},
  email: {type: String, required: true, unique: true},
  password: {type: String, trim: true},
  provider: {type: String, default: 'local'},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
  googleToken: String,
  jsonWebToken: String
})

userSchema.statics.create = function (email, password, provider) {
  const user = new this({
    email,
    password,
    provider
  })

  // return the Promise
  return user.save()
}

userSchema.statics.findOneByEmail = function (email) {
  return this.findOne({
    email
  })
}

userSchema.methods.verify = function (password) {
  return this.password === password
}

userSchema.methods.assignAdmin = function () {
  this.admin = true
  return this.save()
}

module.exports = mongoose.model('User', userSchema)