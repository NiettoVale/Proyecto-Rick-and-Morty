import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

// Action creator para agregar un personaje a favoritos
export const addFav = (personaje) => {
  return {
    type: ADD_FAV,
    payload: personaje,
  };
};

// Action creator para eliminar un personaje de favoritos por su ID
export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

// Action creator para filtrar las tarjetas por género
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

// Action creator para ordenar las tarjetas (ascendente o descendente)
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
