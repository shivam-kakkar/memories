import { SET_ONLINE_USERS } from "../constants/actionTypes";

const onlineUsersReducer = (onlineUsers = [], action) => {
  switch (action.type) {
    case SET_ONLINE_USERS:
      return action.payload;
    default:
      return onlineUsers;
  }
};

export default onlineUsersReducer;
