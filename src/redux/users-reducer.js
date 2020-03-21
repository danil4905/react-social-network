const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [
    {
      id: 1,
      fullName: "Natalya",
      imageUrl: '#',
      status: "I am boss",
      location: { country: "Russia", city: "Izhevsk" },
      followed: true
    },
    {
      id: 2,
      fullName: "Armen",
      imageUrl: '#',
      status: "I am boss",
      location: { country: "Russia", city: "Izhevsk" },
      followed: false
    },
    {
      id: 3,
      fullName: "Denis",
      imageUrl: '#',
      status: "I am boss",
      location: { country: "Russia", city: "Izhevsk" },
      followed: true
    },
    {
      id: 4,
      fullName: "David",
      imageUrl: '#',
      status: "I am boss",
      location: { country: "Russia", city: "Izhevsk" },
      followed: false
    },
    {
      id: 5,
      fullName: "Rudick",
      imageUrl: '#',
      status: "I am boss",
      location: { country: "Russia", city: "Izhevsk" },
      followed: true
    },
    {
      id: 6,
      fullName: "Maxim",
      imageUrl: '#',
      status: "I am boss",
      location: { country: "Russia", city: "Izhevsk" },
      followed: true
    }
  ]
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
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
};
export default usersReducer;
export const followAC = userId => ({ type: FOLLOW, userId });

export const unfollowAC = userId => ({
  type: UNFOLLOW,
  userId
});
export const setUsersAC = users => ({ typy: SET_USERS, users });
