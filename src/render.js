import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from "./redux/store";
import {updateNewPostText} from "./redux/store";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={ updateNewPostText } />
            </BrowserRouter>
        </React.StrictMode>
    );
};