import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_PAGE_NUMBER = 'SET-PAGE-NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

/*let initialState = {
    users: [
        {id: 1, name: 'Dimych', status: 'I am a boss', followed: false, location: {country: 'Belarus', city: 'Minsk'}, photoUrl: 'https://pushinka.top/uploads/posts/2023-04/1681727009_pushinka-top-p-avatarki-dlya-biznes-akkauntov-vkontakte-53.jpg'},
        {id: 2, name: 'Andrew', status: 'I am a boss', followed: true, location: {country: 'Russia', city: 'Moscow'}, photoUrl: 'https://pushinka.top/uploads/posts/2023-04/1681727009_pushinka-top-p-avatarki-dlya-biznes-akkauntov-vkontakte-53.jpg'},
        {id: 3, name: 'Sveta', status: 'I am a boss', followed: false, location: {country: 'Ukrain', city: 'Kiev'}, photoUrl: 'https://pushinka.top/uploads/posts/2023-04/1681727009_pushinka-top-p-avatarki-dlya-biznes-akkauntov-vkontakte-53.jpg'}
    ],
};*/

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    pageNumber: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_USERS_COUNT:
            return {...state, totalUserCount: action.count};

        case SET_PAGE_NUMBER:
            return {...state, pageNumber: action.pageNumber};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersCount = (count) => ({type: SET_USERS_COUNT, count});
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (pageSize, pageNumber) => {
   return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(pageSize, pageNumber).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.follow(userId).then(response => {
            console.log(response.data);

            if (response.data.resultCode === 0) {

                dispatch(followSuccess(userId));
            }

            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.unfollow(userId)
            .then(response => {
                console.log(response.data);

                if (response.data.resultCode === 0) {

                    dispatch(unfollowSuccess(userId));
                }

                dispatch(toggleFollowingProgress(false, userId));

            })
    }
}




export default usersReducer;

