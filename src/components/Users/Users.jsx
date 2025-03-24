import User from './User/User';
import './Users.scss'

const Users = (props) => {

    console.log(props);

    let pageSize = props.usersPage.pageSize,
        totalCount = props.usersPage.totalUserCount;
    console.log('totalCount = ' + totalCount);
    if (totalCount > 100) {
        totalCount = 100;
    }
    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];

    for(let i=1; i <= pagesCount; i++) {
        pages.push(<button className={props.usersPage.pageNumber === i && 'selected'} onClick={()=> props.pageClickHandler(i)}>{i}</button>)
        // Как это разметка представляет собой массив?
    }

    return (

        <div>
            <div className="pagination">
                {pages}
            </div>
            <button onClick={props.getUsers}>Get Users</button>
            {
                props.usersPage.users.map((u) => {
                    return <User key={u.id} id={u.id} name={u.name} status={u.status} location={u.location} followed={u.followed} photoUrl={u.photoUrl} follow={props.follow} unfollow={props.unfollow} toggleFollowingProgress={props.toggleFollowingProgress} followingInProgress ={props.usersPage.followingInProgress}></User>;
                })
            }
        </div>
    )
}


export default Users;