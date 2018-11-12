import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

export function loginRequest(id, pwd){
    return {
        type : AUTH_LOGIN
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