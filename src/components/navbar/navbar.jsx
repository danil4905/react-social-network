import React from 'react';
import classes from './navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <nav>
        <div className={classes.item}>
          <NavLink
            to="/profile"
            activeClassName={classes.active}
            className={classes.item}
          >
            Profile
            </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/dialogs"
            activeClassName={classes.active}
            className={classes.item}
          >
            Messages
            </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/news"
            activeClassName={classes.active}
            className={classes.item}
          >
            News
            </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/users" className={classes.item} activeClassName={classes.active}
          >
            New Users
            </NavLink>
        </div>
        <br /> <br /> <br />
        <div className={classes.item}>
          <NavLink to="/settings" className={classes.item} activeClassName={classes.active}
          >
            Settings
            </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;