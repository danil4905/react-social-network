import React from 'react';
import classes from './myposts.module.css'
import Post from '../../post/post'



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (
      <Post message={p.message} id={p.id} likesCounts={p.likesCounts} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    
    return (
      <div className={classes.wrapper}>
        <div>
          <h3>My posts</h3> <br></br>
          <textarea className={ classes.Areal } placeholder='Start writing...' ref={ newPostElement } ></textarea>
          <br></br>
          <button onClick={ addPost }>Add Post</button>
        </div>
        <div className={ classes.posts }>
          { postsElements }
        </div>
      </div>
    );
}
export default MyPosts;