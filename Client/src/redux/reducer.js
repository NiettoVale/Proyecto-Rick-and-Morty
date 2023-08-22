import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      const filteredCharacters = [...state.myFavorites].filter((character) => {
        return character.id !== parseInt(payload);
      });
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
