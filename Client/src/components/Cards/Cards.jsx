import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.cardsContainer}>
      {characters.map(
        ({ name, status, species, gender, origin, image, id }) => {
          return (
            <Card
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
              id={id}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
