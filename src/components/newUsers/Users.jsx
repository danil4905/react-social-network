import React from 'react';
import avatar from '../../avatar.png';
import classes from './NewUsers.module.css';
import { NavLink } from 'react-router-dom';
import Axios from "axios";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    debugger;
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
                                    {user.followed ?
                                        <button className={classes.btn_unfollow}
                                            disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.togleFollowingProgress(true, user.id);
                                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "108fc3e2-3513-4a0f-bd09-dc2d0da947cc"
                                                        }
                                                    })
                                                    .then(Response => {
                                                        if (Response.data.resultCode === 0) {
                                                            props.unfollow(user.id);
                                                        }
                                                        props.togleFollowingProgress(false, user.id);
                                                    })
                                            }}>Unfolow</button>

                                        : <button className={classes.btn_follow}
                                            disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.togleFollowingProgress(true, user.id);

                                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "108fc3e2-3513-4a0f-bd09-dc2d0da947cc"
                                                        }
                                                    })
                                                    .then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.follow(user.id);
                                                        }
                                                        props.togleFollowingProgress(false, user.id);
                                                    })
                                            }}>Follow</button>}
                                </div>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.user_name}>{user.name}</div>
                                <div>Status</div>
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