import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import currentSelected from "./currentSelected";
import users from "./users";
import form from "./form";
import onlineUsers from "./onlineUsers";
import messages from "./messages";

export const reducers = combineReducers({
  posts,
  auth,
  currentSelected,
  users,
  formOpen: form,
  online: onlineUsers,
  messages,
});
