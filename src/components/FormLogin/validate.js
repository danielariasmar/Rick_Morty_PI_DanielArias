const validate = (form, setErrors, errors) => {
  const totalErrors = { ...errors }; //Copia el objeto de errores actual y se crea uno nuevo para que no se sobre escriba cada vez que se llama seterrors

  if (!form.usermail) {
    totalErrors.usermail = "Debe diligenciar el email";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(form.usermail)
  ) {
    totalErrors.usermail = "Formato de email inválido";
  } else {
    totalErrors.usermail = ""; // Limpia el error si el email es válido
  }

  if (!form.password){
    totalErrors.password = "Debe ingresar una contraseña";
  } else if (form.password.length <5){
    totalErrors.password = "La contraseña debe tener almenos 5 caracteres";
  } else {
    totalErrors.password = "";
  }

//   if (!form.password)
//     setErrors({ ...errors, password: "Contraseña obligatoria" });
//   else if (form.password.length < 5) {
//     setErrors({
//       ...errors,
//       password: "La contraseña debe tener almenos 5 caracteres",
//     });
//   } else setErrors({ ...errors, password: "" });

  setErrors(totalErrors); // Actualiza los errores una vez con las correcciones
};

export default validate;
