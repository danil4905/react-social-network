import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hello buddy!", likesCounts: 12 },
    { id: 2, message: "What is your name?", likesCounts: 12 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export default profileReducer;
