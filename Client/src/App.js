import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Views/Home/Home";
import Detail from "./components/Detail/Detail";
import NotFound from "./Views/404/NotFound";
import Form from "./Views/Form/Form";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]); // Inicializa characters como una matriz vacía
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "bash56";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Incorrecto");
    }
  };

  const logOut = () => {
    setAccess(false);
  };

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
    setCharacters(data.results.slice(0, 3));
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

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              onSearch={onSearch}
              handleClick={handleClick}
              characters={characters}
              onClose={onClose}
              logOut={logOut}
            />
          }
        />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
