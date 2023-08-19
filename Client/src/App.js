import React, { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Nav/Nav";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]); // Inicializa characters como una matriz vacía

  const onSearch = (idPer) => {
    let exist = false;

    characters.forEach(({ id }) => {
      if (id === parseInt(idPer)) {
        alert("Ya esta en la vista ese personaje");
        exist = true;
      }
    });

    if (!exist) {
      axios(`https://rickandmortyapi.com/api/character/${idPer}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  };

  const obternPersonajes = async () => {
    const { data } = await axios("https://rickandmortyapi.com/api/character");
    setCharacters(data.results.slice(0, 18));
  };

  const onClose = (id) => {
    const filterCharacters = characters.filter((character) => {
      return character.id !== parseInt(id);
    });

    setCharacters(filterCharacters);
  };

  const getRandomNumber = () => {
    const min = 1; // Valor mínimo (inclusive)
    const max = 826; // Valor máximo (inclusive)

    // Genera un número decimal aleatorio entre 0 y 1
    const randomNumber = Math.random();

    // Ajusta el número aleatorio al rango deseado y redondea al entero más cercano
    const result = Math.floor(randomNumber * (max - min + 1)) + min;

    return result;
  };

  const handleClick = () => {
    const random = getRandomNumber();
    onSearch(random);
  };

  useEffect(() => {
    obternPersonajes();
  }, []);

  return (
    <div className="App">
      <NavBar onSearch={onSearch} handleClick={handleClick} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
