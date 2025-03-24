import User from './User/User';
import axios from 'axios';

const Users = (props) => {
    //console.log('users:');
    console.log(props);

    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response);
            props.setUsers(response.data.items);
        })
    }

    return <div>
        {
            props.usersPage.users.map((u) => {
                return <User key={u.id} id={u.id} name={u.name} status={u.status} location={u.location} followed={u.followed} photoUrl={u.photoUrl} follow={props.follow} unfollow={props.unfollow}></User>;
            })
        }
    </div>
};

export default Users;