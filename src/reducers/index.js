import { combineReducers } from "redux";
import rooms from "./rooms";
import users from "./users";

export default combineReducers({
  rooms,
  users
});
