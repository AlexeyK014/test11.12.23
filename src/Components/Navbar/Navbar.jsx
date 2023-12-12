import React from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            <div>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to={'/news'}>News</NavLink>
            </div>
        </nav>
    ) 
}

export default Navbar;