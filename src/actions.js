import * as request from "superagent";
import { url } from "./constants";

export const ALL_ROOMS = "ALL_ROOMS";
export const CORRECT = 'CORRECT'
export const WRONG = 'WRONG'

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
        // You may want to handle the case where the response is not the JWT
        // in case the name or password were wrong
        const action = jwt(response.body);
        dispatch(action);
      });
  };
}


export function correct(goodAnswer) {
  console.log('correct action')
  return {
    type: CORRECT,
    payload: goodAnswer
  }
}

export function wrong(wrongAnswer) {
  console.log('wrong action')
  return {
    type: WRONG,
    payload: wrongAnswer
  }
}