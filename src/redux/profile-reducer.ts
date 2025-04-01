import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

type PostType = {
    id: number
    message: string
    likesCount: number
}

type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},
    ] as Array<PostType>,
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}

type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}



export const addPostActionCreator = (newPostText: string):addPostActionCreatorType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: string) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string) =>({type: SET_STATUS, status});

export const getUserProfile = (userId)=> {
    return (dispatch) =>{
        usersAPI.getProfile(userId).then(response =>{
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getStatus = (userId)=> {
    return (dispatch) =>{
        profileAPI.getStatus(userId).then(response =>{
            dispatch(setStatus(response.data));
        })
    }
}

export const updateStatus = (status)=> {
    return (dispatch) =>{
        profileAPI.updateStatus(status).then(response =>{
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;


