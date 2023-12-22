import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css';
import axios from 'axios';
import { Await, useNavigate } from 'react-router-dom';
import imgNotaLog from '../../assets/img/imgNotaLog.png';
import { colors } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';


const Login = ({onLogin}) => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const MyContext = React.createContext("34");
  let userAuth = {};
  const navigate = useNavigate();

  const urlApi = "http://localhost:8080";

  const onChangeInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
    //console.log(dato);
  };

    
  /*const getUsers = () => {
    const user={
        
      username: "david",
      password: "arroz"
    
  }
    axios
      .post(`${urlApi}?username=${user.username}&password=${user.password}`,null,{
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }, 
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };*/


    const getUsers = async () => {
      axios.post(`${urlApi}/inicio/login?Nombre_Usuario=${user.username}&ConstraseNa=${user.password}`)
      .then(function (response) {
        console.log(response);
        navigate('/home');

      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
          //consultar();
        });
    };


const consultar = () => {
  if (user.username === userAuth.Username && user.password === userAuth.Password) {
    console.log("Usuario Correcto");
    navigate('/home');
  } else {
    console.log("Usuario o Contraseña incorrecto");
  }
  
};




  return (
  <div className="login" data-testid="Login">
    <h1>Inicio de Sesión</h1>
    <br/>
    <img src={imgNotaLog} alt="Imagen representativa de notas"/>
    <AccountCircleIcon className='formIcon'/>
    <TextField id="user-input" name="username" label="Usuario" variant="standard" onChange={onChangeInput} />
    <br/><br/>
    <LockOpenIcon className='formIcon'/>
    <TextField id="pass-input" name="password" label="Contraseña" variant="standard" type='password' onChange={onChangeInput}/>
    <br/><br/><br/>
    <Button variant="contained" onClick={getUsers}><LoginIcon fontSize='small' id="iconLog"/>Ingresar</Button>
    <br/>
    <a href='http://localhost:3000/register'>Registrar Usuario</a>
    
  </div> 

)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
