import {
  SET_CURRENT_ID,
  CLEAR_CURRENT_ID,
  FETCH_POST,
  CLEAR_POST,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const setCurrentId = id => ({
  type: SET_CURRENT_ID,
  payload: id,
});

export const clearCurrentId = () => ({
  type: CLEAR_CURRENT_ID,
});

export const getPost = id => async dispatch => {
  try {
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const clearPost = () => ({
  type: CLEAR_POST,
});

export const setCurrentUser = id => {
  return {
    type: SET_CURRENT_USER,
    payload: id,
  };
};

export const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER,
});
