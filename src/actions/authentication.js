import axios from 'axios'
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL
} from './ActionTypes'

export function loginRequest (username, password) {
  return dispatch => {
    dispatch(login())

    return axios.post('/api/users/signin', {username, password})
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(response.data.token))
      }).catch((error) => {
        // FAILED
        dispatch(loginFailure(error))
      })
  }
}

export function login () {
  return {
    type: AUTH_LOGIN
  }
}

export function loginSuccess (token) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    token
  }
}

export function loginFailure (error) {
  return {
    type: AUTH_LOGIN_FAIL,
    error
  }
}

export function registerRequest (username, password) {
  return dispatch => {
    dispatch(register())

    return axios.post('/api/auth/register', {username, password})
      .then((response) => {
        // SUCCEED
        dispatch(registerSuccess(response.data.token))
      }).catch((error) => {
        // FAILED
        dispatch(registerFailure(error))
      })
  }
}

export function register () {
  return {
    type: AUTH_REGISTER
  }
}

export function registerSuccess () {
  return {
    type: AUTH_REGISTER_SUCCESS
  }
}

export function registerFailure (error) {
  return {
    type: AUTH_REGISTER_FAIL,
    error
  }
}
