import React from 'react';
import PropTypes from 'prop-types';
import styles from './contac.module.css';

const Contac = () => (
  <div className={styles.Contac} data-testid="Contac">
    <div className={styles.divContac}>
      <h1 className={styles.titulo}>Contacto</h1>
      <h3 className={styles.parrafo}>¡Conéctate con Nosotros!</h3>
      <p className={styles.parrafo}><strong>Correo Electrónico:</strong> <a href="mailto:deepbloc@gmail.com">deepbloc@gmail.com</a></p>
      <p className={styles.parrafo}><strong>Teléfono:</strong> +506 64473745</p>
      <p className={styles.parrafo}><strong>Redes Sociales:</strong> <a href="https://www.facebook.com/nombreweb" target="_blank" >Facebook</a>, <a href="https://www.twitter.com/nombreweb" target="_blank" >Twitter</a>, <a href="https://www.instagram.com/nombreweb" target="_blank" >Instagram</a></p>
      <p className={styles.parrafo}>¡Estamos disponibles en múltiples plataformas para atender tus consultas, compartir novedades emocionantes y conectarnos contigo! No dudes en contactarnos a través del canal que más te convenga. ¡Esperamos escucharte pronto!</p>
    </div>
  </div>
);

Contac.propTypes = {};

Contac.defaultProps = {};

export default Contac;
