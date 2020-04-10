import React from 'react';
import classes from './NewUsers.module.css';
import User from './User';
import Paginator from '../common/Paginator/paginator';
const Users = ({ currentPage, totalCount, pageSize, onPageChanged, users, ...props }) => {

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
            <div className={classes.pagination}>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                    totalCount={totalCount} pageSize={pageSize} />
            </div>
        </div>
    );
}

export default Users;