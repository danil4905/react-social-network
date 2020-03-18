import React from 'react';
import classes from './profile.module.css';
import MyPosts from './myposts/myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

    return (
        <div className={classes.wrapper}>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText} />
        </div>
    )
}
export default Profile;