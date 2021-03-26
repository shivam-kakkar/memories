import {
  SET_CURRENT_ID,
  CLEAR_CURRENT_ID,
  FETCH_POST,
  CLEAR_POST,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from "../constants/actionTypes";

const currentSelectedReducer = (
  state = { currentId: 0, currentPost: null, currentUser: null },
  action
) => {
  switch (action.type) {
    case SET_CURRENT_ID:
      state.currentId = action.payload;
      return state;
    case CLEAR_CURRENT_ID:
      state.currentId = 0;
      return state;
    case FETCH_POST:
      state.currentPost = action.payload;
      return state;
    case CLEAR_POST:
      state.currentPost = null;
      return state;
    case SET_CURRENT_USER:
      state.currentUser = action.payload;
      return state;
    case CLEAR_CURRENT_USER:
      state.currentUser = null;
      return state;
    default:
      return state;
  }
};

export default currentSelectedReducer;
