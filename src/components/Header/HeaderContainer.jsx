import React from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import Header from './Header'
import { getAuthUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (email, userId, login) => {
            let action = getAuthUserData(email, userId, login);
            console.log('action:');
            console.log(action);
            dispatch(action);
        }
    }
}*/

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);