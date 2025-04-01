import {Navigate} from 'react-router'
import React from 'react';
import {connect} from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        componentDidMount() {
            debugger;
        }
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />;
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
