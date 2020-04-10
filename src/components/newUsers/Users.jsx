import React from 'react';
import classes from './NewUsers.module.css';
import User from './User';
import Paginator from '../common/Paginator/paginator';
import Preloader from '../common/Preloader/Preloader';
const Users = ({ currentPage, totalCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow, isFetching}) => {

    return (
        <div classes={classes.users_all}>
            {isFetching ? <div className='user_preloader'><Preloader /></div> :
            <div className={classes.page_wrapper}>
                {
                    users.map(user => <User user={user} key={user.id}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow}
                    />
                    )
                }
            </div>}
            <div className={classes.pagination}>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                    totalCount={totalCount} pageSize={pageSize} />
            </div>
        </div>
    );
}

export default Users;