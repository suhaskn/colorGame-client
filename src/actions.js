import * as request from "superagent";
import { url } from "./constants";

export const ALL_ROOMS = "ALL_ROOMS";

export function allRooms(payload) {
  return {
    type: ALL_ROOMS,
    payload
  };
}

// export const JOIN_ROOM = 'JOIN_ROOM';

// export function joinRoom(payload) {
//   return {
//     type: JOIN_ROOM,
//     payload: room 
//   }
// }

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
        // You may want to handle the case where the response is not the JWT
        // in case the name or password were wrong
        const action = jwt(response.body);
        dispatch(action);
      });
  };
}
