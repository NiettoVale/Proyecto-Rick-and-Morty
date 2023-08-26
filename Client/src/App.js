import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Views/Home/Home";
import Detail from "./components/Detail/Detail";
import NotFound from "./Views/404/NotFound";
import Form from "./Views/Form/Form";
import Favorites from "./components/favorites/Favorites";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState();
  const navigate = useNavigate();
  // const EMAIL = "ejemplo@gmail.com";
  // const PASSWORD = "bash56";

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const response = await axios.get(URL, {
        params: { email, password },
      });

      const { data } = response;
      const { access } = data;

      setAccess(data);

      if (access) {
        navigate("/home");
      }
    } catch (error) {
      // Maneja errores si es necesario
      alert("Error!!!");
      console.error("Error en la solicitud de inicio de sesión:", error);
    }
  };

  const logOut = () => {
    setAccess(false);
  };

  const onSearch = async (idPer) => {
    let exist = false;

    characters.forEach(({ id }) => {
      if (id === parseInt(idPer)) {
        alert("Ya está en la vista ese personaje");
        exist = true;
      }
    });

    if (!exist) {
      try {
        const response = await fetch(
          `http://localhost:3001/rickandmorty/character/${idPer}`
        );

        if (response.status === 404) {
          window.alert("¡No hay personajes con este ID!");
          return;
        }

        if (!response.ok) {
          throw new Error("Error al obtener el personaje");
        }

        const data = await response.json();

        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
        window.alert("¡Hubo un error al obtener el personaje!");
      }
    }
  };

  const obtenerPersonajes = async () => {
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
    const min = 1;
    const max = 826;
    const randomNumber = Math.random();
    const result = Math.floor(randomNumber * (max - min + 1)) + min;
    return result;
  };

  const handleClick = () => {
    const random = getRandomNumber();
    onSearch(random);
  };

  useEffect(() => {
    obtenerPersonajes();
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
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
