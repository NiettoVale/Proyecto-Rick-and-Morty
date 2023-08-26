// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { filterCards, orderCards } from "../../redux/actions";
// import Cards from "../Cards/Cards";
// import NavBar from "../Nav/Nav";
// import styles from "./Favorites.module.css";

// const Favorites = () => {
//   const dispatch = useDispatch();
//   const myFavorites = useSelector((state) => state.myFavorites);
//   const allCharacters = useSelector((state) => state.allCharactersFav);

//   console.log("Estos son myFavorites: ", myFavorites);
//   console.log("Estos son allCharacters: ", allCharacters);

//   const handleOrder = (event) => {
//     dispatch(orderCards(event.target.value));
//   };

//   const handleFilter = (event) => {
//     dispatch(filterCards(event.target.value));
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className={styles.filtersContainer}>
//         <select onChange={handleOrder}>
//           <option value="A">Ascendente</option>
//           <option value="D">Descendente</option>
//         </select>

//         <select onChange={handleFilter}>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Genderless">Genderless</option>
//           <option value="unknown">Unknown</option>
//         </select>

//         <button>Todos</button>
//       </div>

//       {myFavorites.length === 0 ? (
//         <h1>No hay personajes en favoritos</h1>
//       ) : (
//         <div>
//           <Cards characters={myFavorites} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favorites;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Cards from "../Cards/Cards";
import NavBar from "../Nav/Nav";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const allCharacters = useSelector((state) => state.allCharactersFav);
  const [showAllCharacters, setShowAllCharacters] = useState(false); // Nuevo estado

  const handleOrder = (event) => {
    setShowAllCharacters(false);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    setShowAllCharacters(false);
    dispatch(filterCards(event.target.value));
  };

  const handleShowAllCharacters = () => {
    setShowAllCharacters(true);
  };

  return (
    <div>
      <NavBar />
      <div className={styles.filtersContainer}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <div className={styles.buttonContainer}>
          <button
            className={styles.selectButton}
            onClick={handleShowAllCharacters}
          >
            Todos
          </button>
        </div>
      </div>

      {showAllCharacters ? (
        <div>
          <Cards characters={allCharacters} />
        </div>
      ) : myFavorites.length === 0 ? (
        <h1>No hay personajes en favoritos</h1>
      ) : (
        <div>
          <Cards characters={myFavorites} />
        </div>
      )}
    </div>
  );
};

export default Favorites;
