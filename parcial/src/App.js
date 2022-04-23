import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BarraNav from './components/BarraNav.js';
import Contenido from './components/Contenido.js';
import FooterUtb from './components/FooterUtb.js';
import Propuestas from './Propuestas.jsx';
import Proyectos from './Proyectos.js';
import Donaciones from './Donaciones.js';
//<Contenido />



function App() {
  return (
    <div>
      <Router>
        <BarraNav />
        <Route path="/" exact component={Contenido} />
        <Route path="/Proyectos" component={Proyectos} />
        <Route path="/Propuestas" component={Propuestas} />
        <Route path="/Donaciones" component={Donaciones} />
        <Router path="/propuestas" components={Propuestas}/> 
        <Propuestas />
      </Router>
      <FooterUtb />
    </div>
  );
}

export default App;