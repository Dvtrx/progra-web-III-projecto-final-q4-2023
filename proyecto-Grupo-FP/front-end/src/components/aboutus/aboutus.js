import React from 'react';
import PropTypes from 'prop-types';
import styles from './aboutus.module.css';

const Aboutus = () => (
  <div className={styles.Aboutus} data-testid="Aboutus">
    <div className={styles.divAbout}>
      <h1 className={styles.titulo}>About us</h1>
      <p className={styles.parrafo}> En Deep Bloc, somos cinco jóvenes apasionados que hemos unido fuerzas para dar vida a este proyecto innovador. Nuestra historia comienza con la ambición compartida de crear un espacio digital que potencie la creatividad y simplifique el proceso de tomar notas e inspirarse.

        Guiados por nuestra pasión por el diseño y la tecnología, nos hemos comprometido a ofrecer una plataforma donde la colaboración y la creatividad se fusionan. Desde la génesis de una idea hasta la realización de proyectos completos, cada característica de Deep Bloc ha sido cuidadosamente elaborada por nuestro equipo para proporcionarte una experiencia única.

        Somos más que un grupo de mentes creativas; somos una comunidad que celebra la diversidad de ideas y perspectivas. Con Deep Bloc, te invitamos a formar parte de nuestra familia digital, donde cada nota es un paso hacia la materialización de tus sueños creativos.

        Únete a nosotros en este viaje emocionante mientras llevamos adelante Deep Bloc con nuestra dedicación y pasión compartida.</p>
    </div>
  </div>
);

Aboutus.propTypes = {};

Aboutus.defaultProps = {};

export default Aboutus;
