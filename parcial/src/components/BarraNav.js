import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container} from "react-bootstrap";
// import "../App.css"
import styles from "./BarraNav.module.css";
import utb from "../iconos/utb-logotipo-blanco.png";

export default function BarraNav() {
  return (
    <div>
      <Navbar className="nav-bar-utb" variant="dark">
        <Container>
          <Navbar.Brand href="#"><img src={utb} id="logo-utb" /></Navbar.Brand>
          <Nav>
            <Nav.Link href="#" id="color-text" >Inicio</Nav.Link>
            <Nav.Link href="#" id="color-text">Proyectos</Nav.Link>
            <Nav.Link href="#" id="color-text">Propuestas</Nav.Link>
            <Nav.Link href="#" id="color-text">Donaciones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}