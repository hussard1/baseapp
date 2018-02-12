import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../containers/App';
import About from '../containers/About';
import Login from '../containers/Login';

export default () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/Login' component={Login}/>
                </Switch>
            </App>
        </BrowserRouter>

    )
}