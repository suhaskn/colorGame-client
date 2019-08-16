import { combineReducers } from "redux";
import rooms from "./rooms";
import userToken from "./userToken";
import game from "./game";
import userName from "./userName";

export default combineReducers({
  rooms,
  userToken,
  userName,
  game
});
