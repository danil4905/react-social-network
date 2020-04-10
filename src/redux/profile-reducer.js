import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";

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
      case SET_PHOTO_SUCCESS:
        return {...state, profile: {...state.profile, photos: action.photos} };
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
export const setPhotoSuccess = (photos) => ({type: SET_PHOTO_SUCCESS, photos})
export const savePhoto = (file) => async (dispatch) => {
     let response = await profileAPI.savePhoto(file);

     if (response.data.resultCode === 0) {
         dispatch(setPhotoSuccess(response.data.data.photos));
     }
 }

export default profileReducer;
