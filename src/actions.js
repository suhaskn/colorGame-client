import * as request from "superagent";
import { url } from "./constants";

export const ALL_ROOMS = "ALL_ROOMS";

export function allRooms(payload) {
  return {
    type: ALL_ROOMS,
    payload
  };
}

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export function login(name, password) {
  return function(dispatch) {
    request
      .post(`${url}/login`)
      .send({ name, password })
      .then(response => {
        const action = jwt(response.body);
        console.log(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something is wrong with the log in");
        console.log(error);
      });
  };
}
