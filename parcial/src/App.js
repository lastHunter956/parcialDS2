import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Contenido from './components/Contenido.js';
import Propuestas from './Propuestas.jsx';
import Proyectos from './Proyectos.js';
import Donaciones from './Donaciones.js';
import secciones from './secciones.js';
import Student from './Student.jsx';
//<Contenido />
      /*
      <div>
        <LoginButton />
        </div>
      */
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Contenido} />
        <Route path="/Proyectos" component={Proyectos} />
        <Route path="/Propuestas" component={Propuestas} />
        <Route path="/Donaciones" component={Donaciones} />
        <Route path="/secciones" component={secciones}/> 
        <Route path="/propuestas" component={Propuestas} />
        <Route path="/Student" component={Student} />
      </Router>
    </div>
  );
}

export default App;
