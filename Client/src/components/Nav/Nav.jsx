import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import dadoIcon from "../../image/dado.png";

const NavBar = ({ onSearch, handleClick, logOut }) => {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      {location.pathname === "/favorites" && ( // Mostrar botón "Home" solo en "/favorites"
        <Link to={"/home"}>
          <button className={styles.btnNav}>Home</button>
        </Link>
      )}

      {location.pathname !== "/favorites" && ( // Mostrar los otros botones si no es "/favorites"
        <>
          {location.pathname === "/home" ? (
            <>
              <button onClick={handleClick} className={styles.btnDado}>
                <img src={dadoIcon} alt="dado" className={styles.iconoDado} />
              </button>

              <button onClick={logOut} className={styles.btnNav}>
                Cerrar Sesión
              </button>
              <Link to={"/favorites"}>
                <button className={styles.btnNav}>Favoritos</button>
              </Link>

              <SearchBar onSearch={onSearch} />
            </>
          ) : (
            <>
              <Link to={"/home"}>
                <button className={styles.btnNav}>Home</button>
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NavBar;
