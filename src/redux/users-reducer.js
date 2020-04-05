import { usersAPI } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const TOGLE_IS_FOLLOWING_PROGRESS = "TOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 9,
  totalCount: 0,
  currentPage: 1,
  isFetching: true, // Для ожидание ответа от сервера
  followingInProgress: [], // Помещается айди пользователей потом оставляется только то которое нужно задизейблить
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case TOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};
// ActionCreators
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});
export const togleIsFetching = (isFetching) => ({
  type: TOGLE_IS_FETCHING,
  isFetching,
});
export const togleFollowingProgress = (isFetching, userId) => ({
  type: TOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(togleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsersTotalCount(Math.ceil(data.totalCount / 10)));
      dispatch(setUsers(data.items));
      dispatch(togleIsFetching(false));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(togleFollowingProgress(true, userId));
    usersAPI.follow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(togleFollowingProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(togleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(togleFollowingProgress(false, userId));
    });
  };
};
export default usersReducer;
