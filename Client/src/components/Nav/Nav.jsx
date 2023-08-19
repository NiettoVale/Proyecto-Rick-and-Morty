import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import dadoIcon from "../../image/dado.png";

const NavBar = ({ onSearch, handleClick }) => {
  return (
    <div className={styles.navbar}>
      <button onClick={handleClick} className={styles.btnDado}>
        <img src={dadoIcon} alt="dado" className={styles.iconoDado} />
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
