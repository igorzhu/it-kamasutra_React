import React from 'react';
import Post from './Post/Post.jsx'
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.myPostText);
    }

    return (
        <div className="myPosts">My posts<br/>
            <MypostFormRedux onSubmit={onAddPost} />
            <div className=''>
                { postElements }
            </div>
        </div>

    )
}

const MypostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <Field  name="myPostText" component={Textarea} placeholder="Post message" validate={[required, maxLengthCreator(10)]} />
            <button>Add post</button>
        </form>
    )
}

const MypostFormRedux = reduxForm({
    // a unique name for the form
    form: 'profileNewPostForm'
})(MypostForm)

export default MyPosts;