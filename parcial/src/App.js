import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BarraNav from './components/BarraNav.js';
import Contenido from './components/Contenido.js';
import FooterUtb from './components/FooterUtb.js';
import Donaciones from './Donaciones.js';
import Proyectos from './Proyectos.js';
//<Contenido />

function App() {
  return (
    <div>
      <Router>
        <BarraNav />
        <Route path="/" exact component={Contenido} />
        <Route path="/Proyectos" component={Proyectos} />
        <Route path="/Donaciones" component={Donaciones} />
      </Router>
      
      <FooterUtb />
    </div>
  );
}

export default App;
