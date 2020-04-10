import React from 'react';
import avatar from '../../avatar.png';
import classes from './NewUsers.module.css';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

const User = ({ user, followingInProgress, unfollow, follow, isFetching }) => {

    return (
        <div className={classes.user_item}>
                <div className={classes.left}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} alt="#" />
                    </NavLink>
                    <div className={classes.btn_wrapper}>
                        {user.followed
                            ? <button className={classes.btn_unfollow} disabled={followingInProgress
                                .some(id => id === user.id)}
                                onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button className={classes.btn_follow} disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { follow(user.id) }}>
                                Follow</button>}
                    </div>
                </div>
            <div className={classes.right}>
                <div className={classes.user_name}>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>
    );
}

export default User;