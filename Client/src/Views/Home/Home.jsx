import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/Nav/Nav";
import styles from "./Home.module.css";

const Home = ({ onSearch, handleClick, characters, onClose }) => {
  return (
    <div className={styles.homeContainer}>
      <NavBar onSearch={onSearch} handleClick={handleClick} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
};

export default Home;
