import React from 'react';
import { Routes, Route } from "react-router";
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/Preloader/Preloader";
import LoginPage from "./components/Login/Login"
import {connect} from 'react-redux';
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component {

    componentDidMount() {
        //debugger;
        this.props.initializeApp();
    }
    render(){
        if (!this.props.initialized) return <Preloader/>;
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="profile" element={<ProfileContainer />} />
                        <Route path="profile/:userId" element={<ProfileContainer />}>
                            (/*<Route path="*" element={<Preloader />} />*/)
                        </Route>
                        <Route path="messages" element={<DialogsContainer />} />
                        <Route path="users" element={<UsersContainer />} />
                        <Route path="login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

