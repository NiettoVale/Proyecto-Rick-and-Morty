import React from "react";
import RickSad from "../../image/rickSad.png";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.pageNot}>
      <div className={styles.pageNotContainer}>
        <p className={styles.pageNotText2}>Ni lo intentes...</p>
        <p className={styles.pageNotText}>Te has ido totalmente de la ruta!</p>
        <Link to="/home">
          <button className={styles.pageNotButton}>Volver</button>
        </Link>
      </div>
      <img
        className={styles.pageNotImg}
        src={RickSad}
        alt="No se encuentra el personaje"
      />
    </div>
  );
};

export default NotFound;
