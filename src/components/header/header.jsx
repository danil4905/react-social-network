import React from 'react';
import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <img src="#" alt="#"/>
            </div>
            <div className={classes.name}>
                Social network
            </div>
        </div>
    )
}
export default Header;