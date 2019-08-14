export const ALL_ROOMS = "ALL_ROOMS";

export function allChannels(payload) {
  return {
    type: ALL_ROOMS,
    payload
  };
}

export const SET_NAME = "SET_NAME";

export function setName(payload) {
  return {
    type: SET_NAME,
    payload
  };
}
