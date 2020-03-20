import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./myposts";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;