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
          <NavLink to="/music" className={classes.item}>
            Music
            </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" className={classes.item}>
            Settings
            </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;