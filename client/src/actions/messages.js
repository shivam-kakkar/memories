import { SET_MESSAGES } from "../constants/actionTypes";

export const setMessages = message => ({
  type: SET_MESSAGES,
  payload: message,
});
