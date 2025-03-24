import { authAPI } from '../api/api'


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
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (email, userId, login) => ({type: SET_AUTH, data: {email, userId, login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {

                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(email, id, login));
            }
        });
    }
}

export default authReducer;

