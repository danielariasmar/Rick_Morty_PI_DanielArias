import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ onSearch, characters, setCharactersExist}) {
  const {pathname} = useLocation(); 
         

  return (
    <div className={styles.nav}>
      <div>
        <Link to="/" className={ styles.boton}>
          Logout
        </Link>
      </div>
      <div>
        <Link to="/about" className={pathname === '/about' ? `${styles.boton} ${styles.active}` :styles.boton}>
          About
        </Link>

        <Link to="/home" className={pathname === '/home' ? `${styles.boton} ${styles.active}` :styles.boton}>
          Home
        </Link>

        <Link to="/favorites" className={pathname === '/favorites' ? `${styles.boton} ${styles.active}` :styles.boton}>
          Favoritos
        </Link>
      </div>

      <div>
        <SearchBar onSearch={onSearch} characters={characters} setCharactersExist={setCharactersExist}/>
      </div>
    </div>
  );
}
