import { NavLink } from "react-router";
import s from "./Header.module.scss";

function Header(props){
    console.log('header props');
    console.log(props);

    return (
        <header className="header">
            <div className={s.authBlock}>
                { props.isAuth ? <span> { props.login } </span> : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;