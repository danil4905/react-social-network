import React from 'react';
import classes from './myposts.module.css'
import Post from '../../post/post'
import { reduxForm, Field } from 'redux-form';
import { requiredField, MaxLengthCreator } from '../../../validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} id={p.id} key={p.id} likesCounts={p.likesCounts} className={classes.post_item} /> // Component to all posts
  ));

  const addPost = (values) => {
    props.addPost(values.newPostText)
  }

  const maxLength = MaxLengthCreator(30);
  const NewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPostText"} validate={[requiredField, maxLength]}
          className={classes.Areal} placeholder='Start writing...' />
        <br />
        <button className={classes.btn}>Add Post</button>
      </form>
    );
  }
  const NewPostReduxForm = reduxForm({ form: 'newPostText' })(NewPostForm);

  return (
    <div className={classes.wrapper}>
      <div>
        <h3>My posts</h3> <br />
        <NewPostReduxForm onSubmit={addPost} />
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;