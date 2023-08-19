import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  return (
    <div className={styles.contenedorCard}>
      <div className={styles.btnContainer}>
        <Link to={`/detail/${id}`}>
          <button className={styles.btnCardInfo}>Info</button>
        </Link>

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
      </div>

      <img src={image} alt={name} className={styles.image} />
    </div>
  );
};

export default Card;
