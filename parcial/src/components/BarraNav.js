import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./BarraNav.module.css";

import utb from "../iconos/utb-logotipo-blanco.png";
export default function BarraNav() {
  return (
    <div>
      <Navbar className={styles.principal} variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/"><img src={utb} className={styles.logo_utb} /></Navbar.Brand>
          <Nav>
            <Nav.Link className={styles.principal} href="/" id="color-text" >Inicio</Nav.Link>
            <Nav.Link className={styles.principal} href="./Proyectos" id="color-text">Proyectos</Nav.Link>
            <Nav.Link className={styles.principal} href="./Propuestas" id="color-text">Propuestas</Nav.Link>
            <Nav.Link className={styles.principal} href="./Donaciones" id="color-text">Donaciones</Nav.Link>
            <Nav.Link className={styles.principal} href="./secciones" id="color-text">Seccion</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}