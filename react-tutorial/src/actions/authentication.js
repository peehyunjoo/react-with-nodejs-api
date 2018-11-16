import axios from 'axios';
import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

export function loginRequest(id, pwd){
    return (dispatch) => {
        dispatch(login());
        console.log('1');
        return axios.post('http://localhost:3001/login',{id, pwd})
        .then((res) => {
            console.log(res);
            dispatch(loginSuccess(id));
        }).catch((error) => {
            dispatch(loginFailure());
        });
    };
}

export function login(){
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(id){
    return {
        type : AUTH_LOGIN_SUCCESS,
        id
    };
}

export function loginFailure(){
    return {
        type: AUTH_LOGIN_FAILURE
    };
}