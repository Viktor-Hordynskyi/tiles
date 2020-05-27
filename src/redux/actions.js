import {
  START_GAME,
  SET_COLOR_STATUS,
  CLOSE_COLORS,
  WIN_STATUS,
  NEW_GAME,
} from "./types";

export function startGame() {
  return (dispatch) => dispatch({ type: START_GAME, payload: true });
}
export function setColorStatus(id, status) {
  return (dispatch) =>
    dispatch({ type: SET_COLOR_STATUS, payload: { id, status } });
}
export function closeColors(arr) {
  return (dispatch) => dispatch({ type: CLOSE_COLORS, payload: arr });
}
export function isWin() {
  return (dispatch) => dispatch({ type: WIN_STATUS, payload: true });
}
export function newGame() {
  return (dispatch) => dispatch({ type: NEW_GAME });
}
