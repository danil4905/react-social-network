const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 6,
        message: state.newMessageBody
      };
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, newMessage]
      };
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      }; // Copy the state
    }
    default:
      return state;
  }
};
export default dialogsReducer;
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});
