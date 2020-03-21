import React from 'react';
import classes from './post.module.css'
import photo from '../../photo.jpg'

const Post = (props) => {
    return (
        <div className={classes.wrapper}>
            <img src={photo} />
            {props.message}
        </div>
    )
}
export default Post;