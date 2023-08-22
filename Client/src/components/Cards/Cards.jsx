import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.cardsContainer}>
      {characters.map(({ name, image, id }) => {
        return (
          <Card key={id} name={name} image={image} onClose={onClose} id={id} />
        );
      })}
    </div>
  );
};

export default Cards;
