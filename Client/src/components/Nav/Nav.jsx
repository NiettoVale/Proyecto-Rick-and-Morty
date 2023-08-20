import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import dadoIcon from "../../image/dado.png";

const NavBar = ({ onSearch, handleClick, logOut }) => {
  return (
    <div className={styles.navbar}>
      <button onClick={handleClick} className={styles.btnDado}>
        <img src={dadoIcon} alt="dado" className={styles.iconoDado} />
      </button>
      <button onClick={logOut} className={styles.btnNav}>
        Cerrar Sesión
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
