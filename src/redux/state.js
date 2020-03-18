const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello buddy!", likesCounts: 12 },
        { id: 2, message: "What is your name?", likesCounts: 12 }
      ],
      newPostText: "Hello"
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Natalya" },
        { id: 2, name: "Rudick" },
        { id: 3, name: "Denis" },
        { id: 4, name: "David" },
        { id: 5, name: "Rojer" },
        { id: 6, name: "Max" }
      ],
      messages: [
        { id: 1, message: "Yo!" },
        { id: 2, message: "Hello my friend" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "I am Ok" }
      ]
    }
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
    subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(store);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};
export default store;
window.store = store; 
// file with Data