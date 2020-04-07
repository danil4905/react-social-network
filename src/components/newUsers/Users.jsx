import React from 'react';
import avatar from '../../avatar.png';
import classes from './NewUsers.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (

        <div classes={classes.users_all}> <h3 className={classes.title}> New Users</h3>
            <div className={classes.page_wrapper}>
                {
                    props.users.map(user =>
                        <div key={user.id} className={classes.user_item}>
                            <div className={classes.left}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} alt="#" />
                                </NavLink>
                                <div className={classes.btn_wrapper}>
                                    {user.followed
                                        ? <button className={classes.btn_unfollow} disabled={props.followingInProgress
                                            .some(id => id === user.id)}
                                            onClick={() => { props.unfollow(user.id) }}>
                                            Unfollow</button>
                                        : <button className={classes.btn_follow} disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => { props.follow(user.id) }}>
                                            Follow</button>}
                                </div>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.user_name}>{user.name}</div>
                                        <div>{user.status}</div>
                            </div>
                        </div>
                    )
                }
            </div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    );
}

export default Users;