import React from "react";
import { connect, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import styles from "./Favoritos.module.css"

const Favoritos = ({ myFavorites }) => {
  const {aux, setAux} = useState(false)
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    // setAux(!aux)
    dispatch(orderCards(e.target.value));
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }


  return (
    <div>
      <div className={styles.select}>
        <select onChange={handleOrder} >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="Todos">Todos</option>
        </select>
      </div>
      <div>
        <Cards characters={myFavorites} onClose={null} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favoritos);
