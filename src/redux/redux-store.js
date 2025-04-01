import {createStore, combineReducers, applyMiddleware } from "redux";
import { thunk as thunkMiddleware }  from "redux-thunk";
import profileReducer from './profile-reducer.ts'
import dialogsReducer from './dialogs-reducer.ts'
import sidebarReducer from './sidebar-reducer.js'
import usersReducer from './users-reducer.js'
import authReducer from './auth-reducer.js'
import appReducer from './app-reducer.js'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

console.log(store.getState());

export default store;