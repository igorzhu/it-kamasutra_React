import Users from "./Users"
import Preloader from "../Preloader/Preloader.jsx"
import { follow, unfollow, setPageNumber, toggleFollowingProgress, getUsers} from '../../redux/users-reducer.js'
import {connect} from 'react-redux';
import React from 'react';

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage

    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users ));
        },
        setUsersCount: (count) => {
            dispatch(setUsersCountAC(count));
        },
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumberAC(pageNumber));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/

class UsersContainer extends React.Component {
    componentDidMount(){
        console.log('component mounted');

        console.log(this.props);

        let pageSize = this.props.usersPage.pageSize,
            pageNumber = this.props.usersPage.pageNumber;

        this.props.getUsers(pageSize, pageNumber);
    }

    componentDidUpdate(){
        console.log('component updated');
    }

    componentWillUnmount(){
        console.log('component will be unmounted');
    }

    getUsers = (pageNumber) => {

        let pageSize = this.props.usersPage.pageSize;

        this.props.getUsers(pageSize, pageNumber);
    }

    pageClickHandler = (i) => {
        this.props.setPageNumber(i);
        this.getUsers(i);
    }

    render(){
        return <>
            {this.props.usersPage.isFetching ?  <Preloader /> : null}

            <Users usersPage = {this.props.usersPage}
                   pageClickHandler = { this.pageClickHandler }
                   getUsers = { this.getUsers }
                   follow = { this.props.follow }
                   unfollow = {this.props.unfollow}
                   toggleFollowingProgress = {this.props.toggleFollowingProgress}
            />
        </>
    }
}

export default connect(mapStateToProps, { setPageNumber, toggleFollowingProgress, getUsers, follow, unfollow})(UsersContainer);
 