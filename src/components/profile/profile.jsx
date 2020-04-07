import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './myposts/myPostsContainer';
const Profile = (props) => {
    debugger;
    return (
        <div className={classes.wrapper}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;