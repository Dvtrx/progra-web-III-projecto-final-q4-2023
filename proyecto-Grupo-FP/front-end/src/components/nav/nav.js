import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logoNotas from '../../logoNotas.png';
import Button from '@mui/material/Button';

const Nav = () =>

(
  <div className={styles.Nav} data-testid="Nav">
    <Box className={styles.nav} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className={styles.icon} />
          </IconButton>
          <a href="/home">
            <img src={logoNotas} alt="Logo Deep Bloc" className={styles.logoNotas} />
          </a>
          <div className={styles.info}>
            <Button className={styles.btnInfo} href='/login' variant="text">Login</Button>
            <Button className={styles.btnInfo} href='/registro' variant="text">Register</Button>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
);

export default Nav;