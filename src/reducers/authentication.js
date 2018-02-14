import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL
} from '../actions/ActionTypes'

const initState = {
  login: {
    status: 'INIT'
  },
  status: {
    valid: false,
    isLoggedIn: false,
    currentUser: '',
    token: '',
    error: -1,
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_LOGIN :
      return {
        ...state,
        login: {
          status: 'WAITING'
        }
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: 'SUCCESS'
        },
        status: {
          isLoggedIn: true,
          token: action.token
        }
      }
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        login: {
          status: 'FAILURE'
        }
      }
    default :
      return state
  }
}
