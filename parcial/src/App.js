import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BarraNav from './components/BarraNav.js';
import Contenido from './components/Contenido.js';
import FooterUtb from './components/FooterUtb.js';

function App() {
  return (
    <div>
      <BarraNav />
      <Contenido />
      <FooterUtb />
    </div>
  );
}

export default App;
