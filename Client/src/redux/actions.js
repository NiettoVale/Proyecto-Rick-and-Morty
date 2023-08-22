// actions types:
import { ADD_FAV, REMOVE_FAV } from "./actions-types";

export const addFav = (character) => {
  return function (dispatch) {
    dispatch({ type: ADD_FAV, payload: character });
  };
};

export const removeFav = (id) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_FAV, payload: id });
  };
};
