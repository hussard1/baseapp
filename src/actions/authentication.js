import axios from 'axios'
import {
    AUTH_LOGIN,
    AUTH_LOGIN_FAIL,
    AUTH_LOGIN_SUCCESS
} from "./ActionTypes";


export function loginRequest(username, password) {
    return dispatch => {

        dispatch(login());

        return axios.post('/api/auth/login', { username, password })
            .then((response) => {
                // SUCCEED
                dispatch(loginSuccess(response.data.token));
            }).catch((error) => {
                // FAILED
                dispatch(loginFailure(error));
            });
    }
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(token) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        token
    }
}

export function loginFailure(error) {
    return {
        type: AUTH_LOGIN_FAIL,
        error
    }
}