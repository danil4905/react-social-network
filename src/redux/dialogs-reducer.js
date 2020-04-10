const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Natalya" },
    { id: 2, name: "Rudick" },
    { id: 3, name: "Denis" },
    { id: 4, name: "David" },
    { id: 5, name: "Rojer" },
    { id: 6, name: "Max" },
  ],
  messages: [
    { id: 1, message: "Yo!" },
    { id: 2, message: "Hello my friend" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I am Ok" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: newMessage }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
export default dialogsReducer;
