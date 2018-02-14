import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import About from '../containers/About'
import Login from '../containers/Login'
import Register from '../containers/Register'

export default () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </App>
    </BrowserRouter>
  )
}
