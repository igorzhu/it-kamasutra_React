import { NavLink } from "react-router";
import s from "./User.module.scss";
import axios from 'axios';
import { usersAPI } from '../../../api/api'

const User = (props) => {

    console.log(props);

    const onFollowBtnClick = ()=>{
        props.followed ? props.unfollow(props.id):  props.follow(props.id)
    }

    return (
        <div className={s.user}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photoUrl} className={s.user__pic} alt="user pic" />
            </NavLink>
            <div className={s.user__info}>
                <div className={s.user__info_left}>
                    <span className={s.user__name}>{props.name}</span>
                    <span className={s.user__status}>{props.status}</span>
                </div>
                <div className={s.user__info_right}>
                    <span className={s.user__city}>{props.location?.city}</span>
                    <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.btn} onClick={onFollowBtnClick}>{props.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>
        </div>
    )
};

export default User;