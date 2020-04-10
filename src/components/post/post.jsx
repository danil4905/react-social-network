import React from 'react';
import classes from './post.module.css'
import photo from '../../photo.jpg'

const Post = ({ message }) => {
    return (
        <div className={classes.wrapper}>
            <img src={photo} alt="logo" />
            {message}
        </div>
    )
}
export default Post;