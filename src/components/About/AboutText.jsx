import styles from "./AboutText.module.css"; 

function AboutText (){
    return (
       
        <div className={styles.global}>
            <h1>Rick and Morty proyect</h1>
            
            <p>Esta es una aplicación web </p>
            <p>Creada con React por <a href="https://www.linkedin.com/in/danielariasmar" target="_blank">Daniel Arias</a></p>

            

        </div>
       
   
    );
    }
    
    export default AboutText; 