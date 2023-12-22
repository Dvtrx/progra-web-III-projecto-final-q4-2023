import React from 'react';
import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Login from './components/login/login';
import { useNavigate } from 'react-router-dom';
import Registro from './components/registro/registro';
import Aboutus from './components/aboutus/aboutus';
import ParticleBg from './components/ParticleBg';
import Sidebar from './components/sidebar/sidebar';
import Notes from './components/notes/notes';
import Blocs from './components/blocs/blocs';
import Manual from './components/manual/manual';
import Contac from './components/contac/contac';

function App() {
  return (
    <div className="App">
      <ParticleBg />
      <Router>
        <Nav />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blocs" element={<Blocs />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/contac" element={<Contac />} />
          <Route path="/" element={<InitialRedirect />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

function InitialRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
}

export default App;