import styles from "./SearchBar.module.css"; 
import { useState } from 'react';

const historial = [];

export default function SearchBar({onSearch, characters, setCharactersExist}) {
   const[id, setId] = useState(""); 

   function handleChange(event) {
      setId(event.target.value);  
   }

   function clearInput(){
      setId("");
   }

   function handleKeyPress(event) {
      if (event.key === "Enter") {
        // Verifica si la tecla presionada es "Enter"
        setCharactersExist(id);
        onSearch(id); // Llama a la función de búsqueda
        clearInput(); // Borra el input
      }
    }

   return (
      <div className={styles.searchBar}>
         <input 
            type='search' 
            className={styles.input} 
            value={id}
            onChange={handleChange}
            id="inputSearch"
            onKeyDown={handleKeyPress} // Agrega el evento onKeyDown
         />
         <button 
            className={styles.boton} 
            onClick={() => { 
               setCharactersExist(id);
               onSearch(id);
               clearInput();
               }
              
            } 
            >Agregar</button>
      </div>
   ); 
}


