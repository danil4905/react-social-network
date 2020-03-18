import React from 'react';
import classes from './post.module.css'

const Post = (props) => {
    return (
        <div className={classes.wrapper}>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fbipbap.ru%2Fkrasivye-kartinki%2Fkrasivye-kartinki-horoshego-kachestva-37-foto.html&psig=AOvVaw2_DQlsmwI3mQFe23Yh6E_n&ust=1584461047282000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDRqMGvn-gCFQAAAAAdAAAAABAD' />
            {props.message}
        </div>
    )
}
export default Post;