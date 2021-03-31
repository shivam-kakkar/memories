import { SET_MESSAGES } from "../constants/actionTypes";

const messagesReducer = (messages = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    default:
      return messages;
  }
};

export default messagesReducer;
