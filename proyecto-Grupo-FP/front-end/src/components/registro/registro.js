//useState añadido
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './registro.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import girl from '../../girl.png';

//import axios
import axios from 'axios';

const Registro = () => {
  //la logica añadida
  const [formValues, setFormValues] = useState({
    Nombre_Usuario: '',
    ConstraseNa: ''
  });

  const urlDelApi = 'http://localhost:8080/inicio/Registro';

  const onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const insertCuenta = () => {
    
    axios
      .post(`${urlDelApi}?Nombre_Usuario=${formValues.Nombre_Usuario}&ConstraseNa=${formValues.ConstraseNa}`,null, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then(function (response) {
        console.log(response.formValues);
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  //hasta aca la logica

  return (

    <div className={styles.Registro} data-testid="Registro">
      <div className={styles.fondoRegistro}>
        <Grid container component="main" sx={{ height: '60vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${girl})`,
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
                Sign up
              </Typography>
              <Box component="form" noValidate >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  color='grey'
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  variant='standard'
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  color='grey'
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant='standard'
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  color='grey'
                  name="confirm"
                  label="Confirm password"
                  type="password"
                  id="confirm"
                  autoComplete="current-password"
                  variant='standard'
                />

                <Button className={styles.botonInicio}
                 onClick={insertCuenta}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/login" variant="body2" style={{ color: 'black', textDecorationColor: 'black', marginLeft: '224px' }}>
                      {"Sign in"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

Registro.propTypes = {};

Registro.defaultProps = {};

export default Registro;