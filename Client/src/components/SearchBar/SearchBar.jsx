import React, { useState } from "react";

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
      <input type="search" value={id} onChange={handleChange} />

      {/* Botón que llama a 'onSearch' con el estado 'id' como argumento */}
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
};

export default SearchBar;
