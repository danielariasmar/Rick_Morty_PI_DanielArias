import Card from "../card/Card";
import styles from "./Cards.module.css";
import { v4 as uuidv4 } from 'uuid'; // bibliotecas externa para generar claves únicas

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.global}>
      {characters.length === 0 ? (
        <h2>No hay personajes por mostrar</h2>
      ) : (
        <div className={styles.container}>
          {characters.map((character) => (
            <Card
              key={uuidv4()}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              origin={character.origin.name}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
}
