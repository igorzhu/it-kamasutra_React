import React from 'react';
import {connect} from 'react-redux';
import { Outlet, useNavigate, useLocation, useParams } from "react-router";
import { getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer.ts'
import Profile from './Profile'
import { useEffect } from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'


//import {withRouter} from "react-router" // больше не работает - теперь используют хуки


/*class ProfileContainer extends React.Component {
    // Хуки нельзя использовать с классовыми компонентами - только с функциональными
    componentDidMount(){

        console.log('ProfileContainer mounted');

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/32196`).then(response => {
            console.log(response.data);

            this.props.setUserProfile(response.data);
        });
    }

    render(){
        return <Profile {...this.props} />
    }
}*/

const ProfileContainer = (props) => {

    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    let userId = params.userId;

    if (!userId){
        userId = 32209;
    }

    console.log('params:');
    console.log(params);
    console.log(navigate);
    console.log(location);

    const { getUserProfile, getStatus } = props;

    useEffect(() => {

        if (userId) {
            getUserProfile(userId);
            getStatus(userId);
        }

    },[getUserProfile, getStatus, userId]);

    console.log('ProfileContainer props');
    console.log(props);



    return <Profile {...props} />
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

//let WithUrlDataContainer = withRouter(ProfileContainer);

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer);