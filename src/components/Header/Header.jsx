import { NavLink } from "react-router";
import s from "./Header.module.scss";

function Header(props){
    console.log('header props');
    console.log(props);

    return (
        <header className="header">
            <div className={s.authBlock}>
                { props.isAuth ? <div><span> { props.login } </span><button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;