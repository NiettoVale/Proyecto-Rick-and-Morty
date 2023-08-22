import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import dadoIcon from "../../image/dado.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ onSearch, handleClick, logOut }) => {
  // Obtén la ubicación actual
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <button onClick={handleClick} className={styles.btnDado}>
        <img src={dadoIcon} alt="dado" className={styles.iconoDado} />
      </button>
      <button onClick={logOut} className={styles.btnNav}>
        Cerrar Sesión
      </button>

      {location.pathname === "/favorites" ? (
        <Link to={"/home"}>
          <button className={styles.btnNav}>Home</button>
        </Link>
      ) : (
        <Link to={"/favorites"}>
          <button className={styles.btnNav}>Favoritos</button>
        </Link>
      )}

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
