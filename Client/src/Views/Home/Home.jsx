import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/Nav/Nav";
import styles from "./Home.module.css";

const Home = ({ onSearch, handleClick, characters, onClose, logOut }) => {
  return (
    <div className={styles.homeContainer}>
      <NavBar
        onSearch={onSearch}
        handleClick={handleClick}
        logOut={logOut}
        onClose={onClose}
      />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
};

export default Home;
