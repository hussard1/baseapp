import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../actions/authentication'
import LoginForm from '../component/LoginForm'

class Login extends Component {
  _onLogin = (username, password) => {
    return this.props.dispatch(loginRequest(username, password))
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }

  render () {
    return (
      <div>
        <LoginForm
          onLogin={this._onLogin}
        />
      </div>
    )
  };
}

export default connect(state => state)(Login)
