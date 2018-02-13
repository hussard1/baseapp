import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerRequest} from '../actions/authentication';
import RegisterForm from '../component/RegisterForm';

class Register extends Component {

    _onRegister = (username, password) => {
        return this.props.dispatch(registerRequest(username, password))
            .then(() => {
                return true;
            })
    };

    render() {
        return (
            <div>
                <RegisterForm
                    onRegister = {this._onRegister}
                />
            </div>
        )
    };
}

export default connect(state => state)(Register);