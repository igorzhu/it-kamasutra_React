import s from './Post.module.scss';

const Post = (props) => {
    //console.log('Post props: ');
    //console.log(props);
    return (
        <div className={s.item}>
            <img alt='' src='https://pushinka.top/uploads/posts/2023-04/1681727009_pushinka-top-p-avatarki-dlya-biznes-akkauntov-vkontakte-53.jpg' />
            <div>{props.message}</div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;