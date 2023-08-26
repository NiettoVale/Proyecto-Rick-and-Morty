import React, { useState } from "react";
import styles from "../Nav/Nav.module.css";

const SearchBar = ({ onSearch }) => {
  // Estado local para almacenar el ID
  const [id, setId] = useState("");

  // Función para manejar cambios en el input
  const handleChange = (event) => {
    // Actualiza el estado 'id' con el valor del input
    setId(event.target.value);
  };

  return (
    <div>
      {/* Input controlado con el estado 'id' */}
      <input
        type="search"
        value={id}
        onChange={handleChange}
        className={styles.inputNavBar}
        placeholder="Ingrese un número para cargar un personaje"
      />

      {/* Botón que llama a 'onSearch' con el estado 'id' como argumento */}
      <button onClick={() => onSearch(id)} className={styles.btnNav}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
