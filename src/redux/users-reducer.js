const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
let initialState = {
  users: [],
  pageSize: 9,
  totalCount: 0,
  currentPage: 1,
  isFetching: true
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      };
    case TOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({
  type: UNFOLLOW,
  userId
});
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setUsersTotalCount = totalCount => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount
});
export const togleIsFetching = isFetching => ({ type: TOGLE_IS_FETCHING, isFetching });

export default usersReducer;
