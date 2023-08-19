import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, status, species, gender, origin, image, onClose }) => {
  return (
    <div className={styles.contenedorCard}>
      <div className={styles.btnContainer}>
        <button onClick={onClose} className={styles.btnCard}>
          X
        </button>
      </div>

      <div className={styles.infoCard}>
        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Nombre: </span>
          {name}
        </h2>
        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Estatus: </span>
          {status}
        </h2>
        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Especie: </span>
          {species}
        </h2>
        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Género: </span> {gender}
        </h2>
        <h2 className={styles.bioCard}>
          <span className={styles.spanCard}>Origen: </span>
          {origin.name}
        </h2>
      </div>

      <img src={image} alt={name} className={styles.image} />
    </div>
  );
};

export default Card;
