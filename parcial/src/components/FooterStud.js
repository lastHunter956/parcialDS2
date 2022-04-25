import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../App.css";
import LogoS from "../iconos/LOGO EN BLANCO Y NEGRO-02.png";
import styles from "./FooterStud.module.css";

export default function FooterUtb() {
    return (
        <footer className={styles.footerStud_utb}>
            <Container>
                    <center><img src={LogoS} id={styles.footer_logoS_utb} alt="Logo UTB"/></center>
                    <br />
                    <br />
                    <center><p>
                        Universidad Tecnológica de Bolívar – 2017 Institución de
                        Educación Superior sujeta a inspección y vigilancia por el
                        Ministerio de Educación Nacional.
                    </p></center>
                    <br />
                    <center><p>
                        Resolución No 961 del 26 de octubre de 1970 a través de
                        la cual la Gobernación de Bolívar otorga la Personería
                        Jurídica a la Universidad Tecnológica de Bolívar
                    </p></center>
                    <br />
            </Container>
        </footer>
    ) 
}   