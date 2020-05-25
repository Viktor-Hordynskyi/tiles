import { SET_COLOR_STATUS, CLOSE_COLORS } from "./types";

const initialState = {
  colors: [],
};

export const tilesReducer = (state = initialState, action) => {
  switch (action.type) {
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
        win: state.colors.every((e) => e.status === true),
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

    default:
      return state;
  }
};
