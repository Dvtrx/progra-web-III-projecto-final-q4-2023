import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './blocs.module.css';
import Notes from '../notes/notes';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Blocs = () => {
  const [note, setNote] = useState([]);
  const [addNote, setAddNote] = useState({
    titulo: '',
    Descripcion:'',
    Fecha_de_vencimiento:'',
    Prioridad:'',
    Nombre_Usuario:''
  });

  useEffect(() => {
    getAllnotas();
  }, []);

  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setAddNote({ ...addNote, [name]: value });
    console.log(addNote);
  };


  const getAllnotas = (event) => {
    const urlDelApi = "http://localhost:8080/inicio/listas"
    axios
      .get(urlDelApi, {
        headers: {
          "Content-Type": "application/json"
        }})
      .then(function (response) {
        setNote(response.data);
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  

    

  const insertNotas_C = (event) => {
    const urlDelApi = "http://localhost:8080/inicio/subir"

    axios
      .post(`${urlDelApi}?titulo=${addNote.titulo}&Descripcion=${addNote.Descripcion}&Fecha_de_vencimiento=${addNote.Fecha_de_vencimiento}&Prioridad=${addNote.Prioridad}&Nombre_Usuario=${addNote.Nombre_Usuario}`,null, {
        titulo: addNote.titulo,
        Descripcion: addNote.Descripcion,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then(function (response) {
        console.log(response);
        getAllnotas();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Blocs" data-testid="Blocs">
      <div className={styles.centrarBloc}>
      <h3 className='notetitle'> Note </h3>
      <form>
      <TextField
      className='formatoText'
      label="titulo"
        id="outlined-basic"
        name="titulo"
        variant="standard"
        onChange={onChange}
      />
      <br/>
      <TextField
      className='formatoText'
     
      label="Contenido"
        id="outlined-basic"
        name="Descripcion"
        variant="standard"
        onChange={onChange}
      />
      <br></br>
      <Button color="secondary" variant="text" onClick={insertNotas_C }className={styles.botonagregar}>
      
        Agregar
      </Button>
      </form>
      <Card id="card-home">
        <Grid container spacing={2}>
          {note?.map((nota, index) => {
           return(
            <Grid item xs={4}>
              {" "}
              
              <Notes titulo="titulo" note={note} refrescar={getAllnotas} ></Notes>
            </Grid>
          );
           })}
        </Grid>
      </Card>
      </div>
    </div>

  );
};

Blocs.propTypes = {};

Blocs.defaultProps = {};

export default Blocs;