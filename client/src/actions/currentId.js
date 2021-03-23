import { SET_CURRENT_ID, CLEAR_CURRENT_ID } from "../constants/actionTypes";

export const setCurrentId = id => ({
  type: SET_CURRENT_ID,
  payload: id,
});

export const clearCurrentId = () => ({
  type: CLEAR_CURRENT_ID,
});
