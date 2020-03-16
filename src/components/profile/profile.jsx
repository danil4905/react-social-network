import React from 'react';
import classes from './profile.module.css';
import MyPosts from './myposts/myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    
    return (
        <div className={classes.wrapper}>
            <ProfileInfo />
            <MyPosts posts = {props.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;