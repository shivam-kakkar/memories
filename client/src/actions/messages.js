import { ADD_MESSAGE } from "../constants/actionTypes";

export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message,
});
