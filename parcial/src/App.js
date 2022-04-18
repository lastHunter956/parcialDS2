import react from 'react';
import { BrowserRouter as Router, Router } from 'react-router-d'
import "bootstrap/dist/css/bootstrap.main.css"
import './App.css';
import BarraNav from './components/BarraNav.js';
import Propuestas from './Propuestas.jsx';
import FooterUtb from './components/FooterUtb.js';

function App() {
  return (
    <div>
      <Router>
        <BarraNav />
        <Router path="/propuestas" components={Propuestas}/> 
        <Propuestas />
      </Router>
      <FooterUtb />
    </div>
  );
}

export default App;