import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello buddy!", likesCounts: 12 },
        { id: 2, message: "What is your name?", likesCounts: 12 }
      ],
      newPostText: ""
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
      ],
      newMessageBody: ''
    },
    sidebarPage: {}
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
}};

export default store;
window.store = store;
// file with Data (BLL)
