import { useState } from "react";
import styles from "./FormLogin.module.css";
import validate from "./validate";

function FormLogin({login}) {
    // Se crea un estado para toda la data que se ingresa al formulario y se vincula al value de cada input. 
    const [form, setForm] = useState({
        usermail: "",
        password: "", 
    }); 

    

    //Se crea un estado para ir guardando los errores que encuentra la función validate
    const [errors, setErrors] = useState({
      usermail: "",
      password: "", 
  }); 

    const handlechange = function(event){
        const property = event.target.name; 
        const value = event.target.value; 

        setForm({...form, [property]: value});
        validate({...form, [property]: value}, setErrors, errors); // Se envía set y errors para que pueda allí modificar el estado. Se envía el estado como se guarda para que se revise tal cual se guarda y no con el retraso que caracteriza el set. 
    }

    const submitHandler = (event) => {
      event.preventDefault();
      login(form);
    }

  return (
    <>
      <div className={styles.container}>
       
        <form className={styles.form} onSubmit={submitHandler}>

        <p className={styles.pForm}>Para poder acceder a la aplicación debes iniciar sesión</p>
          <p className={styles.error}>{errors.usermail}</p>
          <div className={styles.inputDiv}>
            
            <label htmlFor="usermail">Email</label>
            <input type="text" name="usermail" value={form.usermail} onChange={
              handlechange

              }/>
          </div>
          <p className={styles.error}>{errors.password}</p>
          <div className={styles.inputDiv}>
            <label htmlFor="userpassword">Password</label>
            <input type="password" name="password" value={form.password} onChange={handlechange}/>
          </div>     
      
          <button type="submit" disabled={!(errors.usermail === "" && errors.password === "")}>Iniciar</button>
          

        </form>
      </div>
    </>
  );
}

export default FormLogin;
