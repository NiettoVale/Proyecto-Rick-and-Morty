import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ characters }) => {
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
              origin={origin}
              image={image}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
