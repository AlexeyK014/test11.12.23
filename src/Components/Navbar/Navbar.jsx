import React from "react";
import style from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            <div>Profile</div>
            <div>Users</div>
            <div>Dialogs</div>
            <div>News</div>
        </nav>
    ) 
}

export default Navbar;