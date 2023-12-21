import React from 'react';
import PropTypes from 'prop-types';
import './notes.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Login from '../login/login';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Notes = (props) => {
  const [note, setNote] = React.useState(props.note);

  const urlApi = "http://localhost:8080/inicio";
  


  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setNote({ ...note, [name]: value });

    console.log(note);
    //console.log(dato);
  };

  const putNote = () =>{
    axios
    .put(`${urlApi}/actualizar?titulo=${note.titulo}&Descripcion=${note.descripcion}&Fecha_de_vencimiento=2023-12-31&Prioridad=Alta&Nombre_Usuario=${note.nombre}&Numero_De_nota=${note.numero_De_nota}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      
    });
  };
  const deleteNote = () =>{
    axios
    .delete(`${urlApi}/borrar?Nombre_Usuario=${note.nombre}&Numero_De_nota=${note.numero_De_nota}`, {
    })
    .then(function (response) {
      console.log(note);
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {

      props.refresh();
    });
    
  };
  return(
  <div className="notes" data-testid="Notes">
 <TextField
      id="tituloCard"
      name="titulo"
      defaultValue={note.titulo}
      variant="standard"
      onChange={onChange}
    />
    <TextField
      id="contentCard"
      className='TextField'
      name="descripcion"
      defaultValue={note.descripcion}
      multiline
      maxRows={4} 
      onChange={onChange}
    />
    <br />
    <div id="contenedorBotones">
    <Button className="estiloBoton" id="editar" color="secondary" variant="text" onClick={putNote}>
      <EditIcon fontSize='small'/>
      Editar
    </Button>
    <Button className="estiloBoton" id="borrar" color="secondary" variant="text" onClick={deleteNote}>
    <DeleteIcon fontSize='small'/>
      Borrar
    </Button>
    </div>
    
  </div>
)};

Notes.propTypes = {};

Notes.defaultProps = {};

export default Notes;
