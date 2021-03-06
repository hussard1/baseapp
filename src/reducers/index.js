import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './message'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  messageReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
