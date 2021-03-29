import { ADD_MESSAGE } from "../constants/actionTypes";

const messagesReducer = (messages = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, action.payload];
    default:
      return messages;
  }
};

export default messagesReducer;
