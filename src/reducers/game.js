import { CORRECT } from "../actions";
import {WRONG} from "../actions"

export default function rooms(state = {goodAnswer: [], wrongAnswer: []}, action = {}) {
  switch (action.type) {
    case CORRECT:
      return { ...state, goodAnswer: [...state.goodAnswer, action.payload] }
    case WRONG:
      return { ...state, wrongAnswer: [...state.wrongAnswer, action.payload] }
    default:
      return state;
  }
}