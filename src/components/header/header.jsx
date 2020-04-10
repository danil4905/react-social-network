import React from 'react';
import classes from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <img src="#" alt="#" />
                </div>
                <div className={classes.name}>
                    Social network
                </div>
            </div>
            <div className={classes.right}>
                {props.isAuth
                    ? <div>{props.login}<br /><button onClick={props.logout}>LogOut </button></div>
                    : <NavLink to={'/login'}> Login</NavLink>}
            </div>
        </div>
    )
}
export default Header;