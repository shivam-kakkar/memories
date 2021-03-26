import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import currentSelected from "./currentSelected";
import users from "./users";
import form from "./form";

export const reducers = combineReducers({ posts, auth, currentSelected, users, formOpen: form });
