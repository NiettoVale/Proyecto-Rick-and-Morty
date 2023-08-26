import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.cardsContainer}>
      {characters.map(({ name, image, gender, id }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
