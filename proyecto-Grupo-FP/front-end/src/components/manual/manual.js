import React from 'react';
import PropTypes from 'prop-types';
import styles from './manual.module.css';

const Manual = () => (
  <div className={styles.Manual} data-testid="Manual">
    <div className={styles.divManual}>

<div className="letras">
      <h1>Manual de usuario - Bloc de Notas en línea</h1>
  <p>¡Bienvenido a nuestro Bloc de Notas en Línea! Esta es la herramienta perfecta para organizar tus ideas en cualquier momento y lugar. Este recurso nace con la idea de ofrecerte una plataforma sencilla y eficiente para gestionar tus diferentes apuntes de manera práctica y eficiente.</p>
  <br></br>


  <h2>Características principales:</h2>
    <p><strong>Acceso Seguro:</strong> Protege tus notas con un inicio de sesión seguro, el cual te garantiza la total privacidad de tus ideas.</p>
    <p><strong>Gestión Intuitiva de Notas:</strong> Puedes crear, editar y eliminar tus diferentes notas de manera intuitiva y eficiente.</p>
    <br></br>
    

  <h2>Instrucciones de Uso</h2>
  <p>Primero se abrirá una pestaña, la cual le mandará un mensaje de bienvenida a la página web, deberá tocar el botón que dice “empezar” y lo enviará a la pestaña de Inicio de sesión.</p>
  <p>Una vez en el inicio de sesión, debe seguir los siguientes pasos:</p>


    <p>Ingrese el nombre de usuario y contraseña.</p>
    <p>Debe hacer clic en "Iniciar Sesión".</p>


  <p>Y así accederá a la página.</p>
  
  <p>En caso de no tener cuenta:</p>


    <p>Debe darle clic al botón de “Registrarse”, esto lo redireccionará a un apartado de la página donde se le pedirá nombre de usuario, contraseña y correo.</p>
    <p>Debe ingresar la información solicitada en los espacios debidos.</p>
    <p>Si la información se guarda con éxito se guardarán los datos y entrará en la página web con éxito.</p>
    <br></br>

  
  <h2>Panel Principal</h2>
  <p>Cerrar Sesión: En la esquina superior derecha, encontrarás el botón "Cerrar Sesión". Haz clic en él si deseas cerrar tu sesión y salir.</p>
  
  <h3>Escribe, elimina o guarda tu nota.</h3>


    <p><strong>Crear Nota:</strong> Haz clic en el botón llamado "Nueva Nota" que se encuentra en el panel principal de la página. Se abrirá un espacio para poder escribir la nota. Al finalizar de escribir la nota, tendrás habilitada una zona en la cual podrás guardarla y asignarle un nombre.</p>
    <p><strong>Editar Nota:</strong> Para la edición, ubica la nota que deseas cambiar. Haz clic en el botón "Editar", realiza los cambios deseados y luego presiona “guardar”.</p>
    <p><strong>Eliminar nota:</strong> Para eliminar una nota, haz clic en el botón "Eliminar" y listo (ten en cuenta que no se puede recuperar después de realizar la acción).</p>
    <br></br>

  
  <h2>Preguntas frecuentes</h2>
  <h3>Gestión de Notas</h3>
  <p><strong>Pregunta:</strong> ¿Puedo recuperar una nota eliminada?</p>
  <p><strong>Respuesta:</strong> No, la eliminación es irrevocable.</p>
  <br></br>
  
  
  <h2>¡Comienza Ahora!</h2>
  <p>Explora los servicios que te ofrecemos en nuestro Bloc de Notas en Línea y mantente organizado.</p>
  <p>¡Gracias por ser parte de nuestro proyecto y esperamos tener tu apoyo!</p>
    </div>

    </div>

  </div>
);

Manual.propTypes = {};

Manual.defaultProps = {};

export default Manual;
