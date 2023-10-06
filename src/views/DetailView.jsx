import Detail from "../components/Detail/Detail";
import { Link } from "react-router-dom";
import styles from '../components/Nav/Nav.module.css'

function DetailView() {
  return (
    <>
      <Detail />
      <div>
        <Link to="/home" className={styles.boton}>
          Atras
        </Link>
      </div>
    </>
  );
}

export default DetailView;
