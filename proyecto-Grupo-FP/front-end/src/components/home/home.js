import React from 'react';
import styles from './home.module.css';
import Button from '@mui/material/Button';
import book from '../../book.png';



const Home = () => (
  <div data-testid="Home">
    <div>
      <h1 className={styles.title}>¡Da vida a tus pensamientos!</h1>
      <p className={styles.txtbienvenida}>Convierte tus ideas en palabras y dales un hogar seguro.
        Solo tienes que hacer clic en el botón de inicio para empezar a escribir tu historia.
        ¡No dejes que tus ideas se escapen, atrápalas aquí y dale vida a tus pensamientos!</p></div>

    <Button href='/login' variant="outlined" color='secondary' className={styles.btnEmpezar} >
      Empezar
    </Button>
    <div>

      <img src={book} alt="NoteBook" className={styles.book} />
    </div>
  </div >

);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;