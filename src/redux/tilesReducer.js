import {
  START_GAME,
  SET_COLOR_STATUS,
  CLOSE_COLORS,
  WIN_STATUS,
  NEW_GAME,
} from "./types";
import colors from "../colors";

const initialState = {
  startGame: false,
  colors: [],
  isWin: false,
};

const shuffle = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

export const tilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, startGame: action.payload, colors: shuffle(colors) };

    case SET_COLOR_STATUS:
      return {
        ...state,
        colors: state.colors.map((color) => {
          return color.id === action.payload.id
            ? {
                ...color,
                status: action.payload.status,
              }
            : { ...color };
        }),
      };

    case CLOSE_COLORS:
      return {
        ...state,
        colors: state.colors.map((color) => {
          return color.id === action.payload[0].id ||
            color.id === action.payload[1].id
            ? {
                ...color,
                status: false,
              }
            : { ...color };
        }),
      };

    case WIN_STATUS:
      return { ...state, isWin: action.payload };

    case NEW_GAME:
      return {
        ...state,
        isWin: false,
        colors: shuffle(colors),
      };

    default:
      return state;
  }
};
