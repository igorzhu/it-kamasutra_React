import { authAPI } from '../api/api'
import {stopSubmit} from 'redux-form';


const SET_AUTH = 'SET_AUTH';

let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

export const setAuthUserData = (email, userId, login, isAuth) => ({type: SET_AUTH, payload: {email, userId, login, isAuth}});

export const getAuthUserData = () => {

    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {

                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(email, id, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
        return authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
                    dispatch(stopSubmit('login', {_error: message})); //_error - общая ошибка для формы
                }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}


export default authReducer;

