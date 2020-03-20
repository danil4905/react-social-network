import React from 'react';
import classes from './myposts.module.css'
import Post from '../../post/post'

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} id={p.id} likesCounts={p.likesCounts} /> // Component to all posts
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
    newPostElement.current.value = '';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.wrapper}>
      <div>
        <h3>My posts</h3> <br></br>
        <textarea
          className={classes.Areal}
          placeholder='Start writing...'
          ref={newPostElement}
          onChange={onPostChange}
          autoFocus
          value={props.newPostText}></textarea>
        <br></br>
        <button
          onClick={onAddPost}
          onChange={onPostChange}
          className={classes.btn}>Add Post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;