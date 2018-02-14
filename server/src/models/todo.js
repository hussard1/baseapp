const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  email: {type: String, required: true},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
  check: {type: Boolean, default: false},
  title: {type: String, required: true, default: ''},
  details: {type: String, default: ''},
  isRemoved: {type: Boolean, default: false}
})

todoSchema.statics.create = function (email, title, details) {
  const todo = new this({
    email,
    title,
    details
  })

  // return the Promise
  return todo.save()
}

todoSchema.statics.update = function (id, email, title, details) {
  return this.findOneAndUpdate({
    _id: id,
    email: email
  }, {
    title,
    details,
    isRemoved: false,
    updated: new Date()
  }).exec()
}

todoSchema.statics.remove = function (id, email) {
  return this.findOneAndUpdate({
    _id: id,
    email: email
  }, {
    isRemoved: true,
    updated: new Date()
  }).exec()
}

export default mongoose.model('Todo', todoSchema)