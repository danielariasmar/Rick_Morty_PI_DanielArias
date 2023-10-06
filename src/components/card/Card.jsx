import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect } from "react";
import { connect } from "react-redux";

function Card(props) {
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  //   const handleFavorite = () => {
  //     isFav ? props.removeFav(props.id) : addFav(props);
  //     setIsFav(!isFav);
  //     };

  const handleFavorite = () => {
    if (isFav) {
      props.removeFav(props.id);
    } else {
      props.addFav(props);
    }
    setIsFav(!isFav);
    console.log(props.myFavorites);
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      {pathname === "/home" && (
        <button
          className={styles.boton}
          onClick={() => props.onClose(props.id)}
        >
          X
        </button>
      )}

      <div className={styles.imgContainer}>
        <img src={props.image} alt="" />
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.name}>{props.name}</h2>
        </Link>
      </div>

      <div className={styles.propertisContainer}>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <p>{props.origin}</p>
      </div>
    </div>
  );
}

const mapDispatchToPtops = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToPtops)(Card);
