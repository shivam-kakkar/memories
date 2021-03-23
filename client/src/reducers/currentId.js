import { SET_CURRENT_ID, CLEAR_CURRENT_ID } from "../constants/actionTypes";

const currentIdReducer = (state = { currentId: 0 }, action) => {
  switch (action.type) {
    case SET_CURRENT_ID:
      return { currentId: action.payload };
    case CLEAR_CURRENT_ID:
      return { currentId: 0 };
    default:
      return state;
  }
};

export default currentIdReducer;
