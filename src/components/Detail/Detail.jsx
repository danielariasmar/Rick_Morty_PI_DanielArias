import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

function DetailView (){

    const[character, setCharacter] = useState({}); 

    const {id} = useParams();

    console.log(character)
  

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     

    return(
            <>
            <div className={styles.container}>

               <div className={styles.div1}>
                    <p><span>NAME: </span> {character.name}</p>
                    <p><span>ORIGEN: </span> {character.origin ? character.origin.name : 'Cargando...'}</p>
                    <p><span>ESPECIE:</span> {character.species}</p>
                    <p><span>STATUS:</span> {character.status}</p>
                </div >
                
                <div className={styles.imgContainer}>
                    <img src={character.image} alt='' />
                </div>

            </div>
                
            </>
    );
}

export default DetailView; 