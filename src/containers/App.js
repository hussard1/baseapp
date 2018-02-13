import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {withRouter} from 'react-router-dom';

import ButtonAppBar from '../component/Header';


class App extends Component {

    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    };

    render() {
        return (
            <div>
                <ButtonAppBar/>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    };
}

export default withRouter(connect(state => state)(App));