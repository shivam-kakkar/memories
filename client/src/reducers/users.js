import { FETCH_USERS } from "../constants/actionTypes";

const usersReducer = (userslist = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return userslist;
  }
};

export default usersReducer;
