import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container} from "react-bootstrap";
import styles from "./BarraStud.module.css";
import utb from "../iconos/LOGO EN BLANCO Y NEGRO-02.png";

export default function BarraStud() {
    return (
      <div>
        <Navbar className={styles.principall} variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/"><img src={utb} className={styles.logo_utb} alt="Logo UTB"/></Navbar.Brand>
            <Nav>
              <Nav.Link className={styles.principal} href="/" id="color-text">Inicio</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }