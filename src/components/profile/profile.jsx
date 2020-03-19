import React from 'react';
import classes from './profile.module.css';
import MyPosts from './myposts/myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    debugger;
    return (
        <div className={classes.wrapper}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText} />
        </div>
    )
}
export default Profile;