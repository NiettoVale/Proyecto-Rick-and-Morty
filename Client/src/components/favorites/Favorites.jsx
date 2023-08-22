import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx";
import NavBar from "../Nav/Nav.jsx";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  console.log(myFavorites);
  return (
    <div>
      <NavBar />
      {myFavorites.length > 0 ? (
        <Cards characters={myFavorites} />
      ) : (
        <h1>NO HAY PERSONAJES FAVORITOS</h1>
      )}
    </div>
  );
};

export default Favorites;
