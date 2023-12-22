import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.css';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../notes/notes";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserAdmin from '../useradmin/useradmin'
import Avatar from '@mui/material/Avatar';
import avatarGato from '../../assets/AvatarGato.jpg';
import LogoutIcon from '@mui/icons-material/Logout';

const Home = () => {


  const [note, setNote] = React.useState();
  const [addNote, setAddNote] = React.useState();

  const urlApi = "http://localhost:8080/inicio";

    useEffect(() => {
    // Llama a tu función al iniciar el componente
    getNote();
    }, []);
  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setAddNote({ ...addNote, [name]: value });
    console.log(addNote);
  };
  const getNote = () => {
    axios
      .get(`${urlApi}/listas`)
      .then(function (response) {
        // handle success
        setNote(response.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  const postNote = (event) => {
    axios
      .post(`${urlApi}/subir?titulo=${addNote.Title}&Descripcion=${addNote.Content}&Fecha_de_vencimiento=2023-12-31&Prioridad=Alta&Nombre_Usuario=Usuario6`)
      .then(function (response) {
        // handle success
      getNote();
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
  <div className="home" data-testid="Home">

    <div className="sidebar">
    <Avatar id="avatarGato" alt="Avatar Gato" src={avatarGato} sx={{ width: 56, height: 56 }}/>
      <nav id="navCompo">
        <ul>

          <br/><br/><br/>
          <TextField className="textStyle" name="Title" label="Titulo" variant="outlined" onChange={onChange}/><br/><br/>
          <TextField className="textStyle" name='Content' label="Contenido" variant="outlined" onChange={onChange}/>
          <Button id="botonpri" variant="contained" onClick={postNote}>Agregar</Button>
        </ul>
        <ul>
          <li><a href='http://localhost:3000'><LogoutIcon fontSize='small' id="iconLogOut"/>Cerrar sesión</a></li>
        </ul>
      </nav>
    </div>
    <Card id="card-home" /*className={styles["card-home"]}*/>
        

        <Grid container spacing={2}>
          {note?.map((nota, index) => {
            return (
              <Grid item xs={4}>
                {" "}
                
                <Note titulo="titulo" note={nota} refresh={getNote}></Note>
              </Grid>
            );
          })}
        </Grid>
      </Card>
  </div>
)};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
