import React from 'react';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className="myPosts">My posts<br/>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
            <button onClick={ onAddPost }>Add post</button>
            <div className=''>
                { postElements }
            </div>
        </div>

    )
}

export default MyPosts;