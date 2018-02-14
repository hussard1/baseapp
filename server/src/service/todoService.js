import Todo from '../models/todo'

export default {
  list () {
    return Todo.find({
      isRemoved: false
    }).sort([['updated', -1]])
  },
  write (email, title, details) {
    return Todo.create(email, title, details)
  },
  update (id, email, title, details) {
    return this.checkWriter(id, email).then(() => {
      return Todo.update(id, email, title, details)
    })
  },
  remove (id, email) {
    return this.checkWriter(id, email).then(() => {
      return Todo.remove(id, email)
    })
  },
  checkWriter (id, email) {
    return Todo.findById(id).then((todo) => {
      if (todo.email !== email) throw new Error('invalid user.')
      else return true
    })
  }
}