import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './notes.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Notes = (props) => {
  const [note, setNote] = React.useState(props.note);
  const [updateNote, setupdateNote] = useState({
    Title: '',
    Descripcion:'',
    Fecha_de_vencimiento:'',
    Prioridad:'',
    Numero_De_nota:'',
    Nombre_Usuario:''
  });

  const [eliminarNote, seteliminarNote] = useState({
    Nombre_Usuario:'',
    ConstraseNa:''

  });


  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNote({ ...note, [name]: value });

    console.log(note);
  };
  const ActualizarNote = () => {

    const urlDelApi = "http://localhost:3000/inicio/actualizar";
    axios
      .put(`${urlDelApi}?titulo=${updateNote.Title}&Descripcion=${updateNote.Descripcion}&Fecha_de_vencimiento=${updateNote.Fecha_de_vencimiento}&Prioridad=${updateNote.Prioridad}&Numero_De_nota = ${updateNote.Numero_De_nota}&Nombre_Usuario=${updateNote.Nombre_Usuario}`,null, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {


      });
  };
  const elimminarNote = () => {
    const urlDelApi = "http://localhost:3000/inicio/eliminar";
    console.log(note.UserID);
    props.refrescar();
    axios
      .delete(`${urlDelApi}?Nombre_Usuario=${eliminarNote.Nombre_Usuario}&ConstraseNa=${eliminarNote.ConstraseNa}`,null, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        props.refrescar();

      });

  };

  return (
    <div id="Notes" data-testid="Notes">
        <TextField
         className='notas'
          id="outlined-basic"
          name="Title"
          label="Titulo"
          defaultValue={props.note.Title}
          // onChange={onChancheInput}
          variant="standard"
          onChange={onChange}
        />
        <br></br>
        <TextField
         className='notas'
          id="outlined-basic"
          name="Content"
          label="Contenido"
          defaultValue={props.note.Content}
          // onChange={onChancheInput}
          variant="standard"
          onChange={onChange}
        />
        <br />
        <Button color="secondary" variant="text" onClick={ActualizarNote}>
          editar
        </Button>
        <Button color="secondary" variant="text" onClick={elimminarNote}>
          BORRAR
        </Button>
    </div>
  )
};

Notes.propTypes = {};

Notes.defaultProps = {};

export default Notes;
