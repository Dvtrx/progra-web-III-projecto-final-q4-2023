import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import { IoHome, IoMailOutline, IoInformationCircleOutline, IoMenuOutline, IoLogOutOutline, IoDocumentTextOutline, IoPlanetOutline, IoBookOutline } from 'react-icons/io5';


const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);


  const handleButtonClick = () => {
    setSidebarActive(!sidebarActive);
  };

  return (

    <div className='sidebard'>
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`} data-testid="Sidebar">
        <div className='contenido'>


          <div className='logo'>
            <span className='icono'><IoPlanetOutline /></span>
            <div className='nombre'>
              <span className="titulo">Options</span>
            </div>


          </div>
          <div className='navegacion'>
            <span className='btn' onClick={handleButtonClick}><IoMenuOutline /></span>


            <ul>
              <li>
                <a href='/login'>
                  <span className="iconos" onClick={handleButtonClick}><IoBookOutline /></span>
                  <span className="titulos"> Notes </span>
                </a>
                <span className='tool'>Notes</span>
              </li>
              <li>
                <a href='/manual'>
                  <span className="iconos" onClick={handleButtonClick}><IoDocumentTextOutline /></span>
                  <span className="titulos">User Manual </span>
                </a>
                <span className='tool'>Manual</span>
              </li>
              <li>
                <a href='/contac'>
                  <span className="iconos" onClick={handleButtonClick}><IoInformationCircleOutline /></span>
                  <span className="titulos"> Contacts </span>
                </a>
                <span className='tool'>Contacts</span>
              </li>
              <li>
                <a href='/aboutus'>
                  <span className="iconos" onClick={handleButtonClick}><IoMailOutline /></span>
                  <span className="titulos"> About Us </span>
                </a>
                <span className='tool'>About Us</span>
              </li>
            </ul>


            <div className="salir">
              <div className="perfil">
                <div className="perfil2">



                  <div className="detalles">
                    <div className="cierre">Home</div>
                    <div className="despedida">Safe your ideas!</div>
                  </div>
                </div>
                <a href='/home'>
                  <span className="logout" onClick={handleButtonClick}><IoHome /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;