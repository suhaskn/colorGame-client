import * as request from "superagent";
import { url } from "./constants";

export const ALL_ROOMS = "ALL_ROOMS";
export const CORRECT = "CORRECT";
export const WRONG = "WRONG";
export const NEW_NAME = "NEW_NAME";

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

export function newName(payload) {
  return {
    type: NEW_NAME,
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

export function correct(goodAnswer) {
  console.log("correct action");
  return {
    type: CORRECT,
    payload: goodAnswer
  };
}

export function wrong(wrongAnswer) {
  console.log("wrong action");
  return {
    type: WRONG,
    payload: wrongAnswer
  };
}
