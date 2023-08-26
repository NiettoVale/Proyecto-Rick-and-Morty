import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({ id, name, image, onClose, gender }) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const character = {
    id,
    name,
    gender,
    image,
  };

  // Función para manejar el favorito
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id)); // Convierte el ID a cadena
    } else {
      setIsFav(true);
      dispatch(addFav(character)); // Convierte el ID a cadena
    }
  };

  // Comprobar si el personaje es un favorito al cargar el componente
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.contenedorCard}>
      <div className={styles.btnContainer}>
        <Link to={`/detail/${id}`}>
          <button className={styles.btnCardInfo}>Info</button>
        </Link>

        {isFav ? (
          <button className={styles.btnFav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.btnFav} onClick={handleFavorite}>
            🤍
          </button>
        )}

        <button
          onClick={() => {
            onClose(id);
          }}
          className={styles.btnCard}
        >
          X
        </button>
      </div>

      <div className={styles.infoCard}>
        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Nombre: </span>
          {name}
        </h2>

        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Género: </span>
          {gender}
        </h2>
      </div>

      <img src={image} alt={name} className={styles.image} />
    </div>
  );
};

export default Card;
