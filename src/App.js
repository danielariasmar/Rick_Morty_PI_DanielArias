import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About.jsx";
import Favoritos from "./components/favoritos/favoritos.jsx";
import DetailView from "./views/DetailView.jsx";
import FormLogin from "./components/FormLogin/FormLogin";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";


function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersExist, setCharactersExist] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "correo@correo.co";
  const PASSWORD = "123456";
  const dispatch = useDispatch();

  function onSearch(id) {
    console.log(characters);
    console.log(charactersExist);
    if(id < 1 || id > 826){
      window.alert("ID no válido")
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
    }
    
  }

  function onClose(id) {
    let idparse = parseInt(id);

    dispatch(removeFav(idparse));

    const filterData = characters.filter(
      (character) => character.id !== idparse
    );
    setCharacters(filterData);
  }

  const { pathname } = useLocation();

  function login(form) {
    if (form.password === PASSWORD && form.usermail === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Contraseña o usuario incorrecto");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      
      {pathname !== "/" && <Nav onSearch={onSearch} characters={characters} setCharactersExist={setCharactersExist}/>}
      {pathname === "/" && <FormLogin login={login} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/favorites" element={<Favoritos onClose={onClose}/>} />
      </Routes>

    </div>
  );
}

export default App;
