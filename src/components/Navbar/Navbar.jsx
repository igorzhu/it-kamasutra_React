import { NavLink } from "react-router";

function Navbar(){
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink  to="/messages">Messages</NavLink>
                </li>
                <li>
                    <NavLink  to="/users">Users</NavLink>
                </li>
                <li>
                    <a href="/news">News</a>
                </li>
                <li>
                    <a href="/music">Music</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;