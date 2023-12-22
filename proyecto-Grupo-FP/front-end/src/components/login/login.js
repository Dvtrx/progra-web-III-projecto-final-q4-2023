import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { style } from '@mui/system';
import men from '../../men.png';
//importado
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//logica de login añadida
// deben hacer el / npm install axios

const Login = () => {
  //logica
  const [user, setUser] = React.useState({
    Nombre_Usuario: "",
    ContraseNa: "",
  });
  const [userAuth, setUserAuth] = React.useState();
  const navigate = useNavigate();
  const urlDelApi = "http://localhost:8080/inicio/login";

  const onChangeInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const ComprobarUsuarioLogin = (e) => {
    axios
      .post(`${urlDelApi}?Nombre_Usuario=${user.Nombre_Usuario}&ConstraseNa=${user.ContraseNa}`,null,{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(function (response) {
        window.location.href="../blocs";
        
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  };

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault(); // Check if event exists before calling preventDefault
    }// Prevent the default form submission behavior
    ComprobarUsuarioLogin();
  };

  //hasta aca lo añadido
  return (
    <div className={styles.Login} data-testid="Login">
      <div className={styles.fondologin}>
        <Grid container component="main" sx={{ height: '60vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${men})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  color='grey'
                  id="username"
                  label="Username"
                  name="Nombre_Usuario"
                  autoComplete="username"
                  autoFocus
                  variant='standard'
                  onChange={onChangeInput}
                  value={user.Nombre_Usuario}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  color='grey'
                  name="ContraseNa"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant='standard'
                  onChange={onChangeInput}
                  value={user.ContraseNa}
                />

                <Button className={styles.botonInicio}
                 onClick={onSubmit}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}

                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/registro" variant="body2" style={{ color: 'black', textDecorationColor: 'black', marginLeft: '220px' }}>
                      {"Sign up"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;