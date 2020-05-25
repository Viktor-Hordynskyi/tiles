import { SET_COLOR_STATUS, CLOSE_COLORS } from "./types";

export function setColorStatus(id, status) {
  return (dispatch) =>
    dispatch({ type: SET_COLOR_STATUS, payload: { id, status } });
}
export function closeColors(arr) {
  return (dispatch) => dispatch({ type: CLOSE_COLORS, payload: arr });
}
