import { combineReducers } from "redux";
import rooms from "./rooms";
import user from "./user";
import game from "./game"

export default combineReducers({
  rooms,
  user,
  game
});