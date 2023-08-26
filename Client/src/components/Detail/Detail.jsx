import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const obtenerPersonaje = async () => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      console.log("Esta es la data del front", data);

      const newCharacter = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        location: data.location,
        origin: data.origin,
        image: data.image,
      };

      setCharacter(newCharacter);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener el personaje:", error);
    }
  };

  useEffect(() => {
    obtenerPersonaje();
  }, [id]); // Cambiado a [id] en lugar de [obtenerPersonaje]

  return (
    <div className={styles.fondoDetail}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className={styles.containerGeneral}>
          <div className={styles.infoContainer}>
            <Link to={"/home"}>
              <button>Volver</button>
            </Link>
            <p>
              <span className={styles.spanDetail}>ID: </span>
              {character.id}
            </p>
            <p>
              <span className={styles.spanDetail}>Nombre: </span>
              {character.name}
            </p>
            <p>
              <span className={styles.spanDetail}>Estado: </span>
              {character.status}
            </p>
            <p>
              <span className={styles.spanDetail}>Especie: </span>
              {character.species}
            </p>
            <p>
              <span className={styles.spanDetail}>Género: </span>
              {character.gender}
            </p>
            <p>
              <span className={styles.spanDetail}>Origen: </span>
              {character.origin}
            </p>
            <p>
              <span className={styles.spanDetail}>Ubicación: </span>
              {character.location}
            </p>
          </div>
          <img src={character.image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Detail;
