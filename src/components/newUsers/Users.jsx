import React from 'react';
import classes from './NewUsers.module.css';
import User from './User';

const Users = ({ currentPage, totalCount, pageSize, onPageChanged, users, ...props }) => {
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (

        <div classes={classes.users_all}>
            <div className={classes.page_wrapper}>
                {
                    users.map(user => <User user={user} key={user.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                    )
                }
            </div>
            {pages.map(p => {
                return <span className={currentPage === p && classes.selectedPage}
                    onClick={() => { onPageChanged(p) }}>{p}</span>
            })}
        </div>
    );
}

export default Users;