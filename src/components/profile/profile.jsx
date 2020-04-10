import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './myposts/myPostsContainer';
const Profile = ({ profile, isOwner, status, updateStatus, savePhoto }) => {
    return (
        <div className={classes.wrapper}>
            <ProfileInfo profile={profile}
                savePhoto={savePhoto}
                isOwner={isOwner} status={status}
                updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;