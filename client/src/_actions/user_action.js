import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataTosubmit) {

    const request = axios.post('/api/user/login', dataTosubmit)
        .then(resposen => responseInterceptor.data )

        return {
            type: LOGIN_USER,
            payload: request 
        }
}

export function REGISTER_USER(dataTosubmit) {

    const request = axios.post('/api/user/login', dataTosubmit)
        .then(resposen => responseInterceptor.data )

        return {
            type: REGISTER_USER,
            payload: request 
        }
}

export function auth() {

    const request = axios.get('/api/user/auth')
        .then(resposen => response.data )

        return {
            type: AUTH_USER,
            payload: request 
        }
}

