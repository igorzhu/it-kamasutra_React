import MyPosts from './MyPosts.jsx'
import {addPostActionCreator} from '../../../redux/profile-reducer.ts'
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (myPostBody) => {
            dispatch(addPostActionCreator(myPostBody));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;