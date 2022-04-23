import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../App.css";
import Logo from "../iconos/utb-logotipo-blanco.png";
import LogoInstagram from "../iconos/instagram.svg";
import LogoTwitter from "../iconos/twitter.svg";
import LogoYoutube from "../iconos/youtube.svg";
import LogoFacebook from "../iconos/facebook-app-symbol.svg";
import LogoLinkedin from "../iconos/logotipo-de-linkedin.svg";
import styles from "./FooterUtb.module.css";

export default function FooterUtb() {
    return (
        <footer className={styles.footer_utb}>
            <Container>
                <section className={styles.section_footer}>
                    <img src={Logo} id={styles.footer_logo_utb} />
                    <p>
                        Universidad Tecnológica de Bolívar – 2017 Institución de
                        Educación Superior sujeta a inspección y vigilancia por el
                        Ministerio de Educación Nacional.
                    </p>
                    <p>
                        Resolución No 961 del 26 de octubre de 1970 a través de
                        la cual la Gobernación de Bolívar otorga la Personería
                        Jurídica a la Universidad Tecnológica de Bolívar
                    </p>
                    <ul className="social-icons">
                        <li className={styles.icon}><a href="#"><img src={LogoLinkedin} alt="Logo de Instagram" className={styles.icon_logo}></img></a></li>
                        <li className={styles.icon}><a href="#"><img src={LogoTwitter} alt="Logo de Instagram" className={styles.icon_logo}></img></a></li>
                        <li className={styles.icon}><a href="#"><img src={LogoInstagram} alt="Logo de Instagram" className={styles.icon_logo}></img></a></li>
                        <li className={styles.icon}><a href="#"><img src={LogoFacebook} alt="Logo de Instagram" className={styles.icon_logo}></img></a></li>
                        <li className={styles.icon}><a href="#"><img src={LogoYoutube} alt="Logo de Instagram" className={styles.icon_logo}></img></a></li>
                    </ul>
                </section>
                <section className={styles.section_footer_2}>
                    <h6>Donde estamos</h6>
                    <hr />
                    <h6>Campus tecnologico</h6>
                    <p>
                        Parque Industrial y Tecnológico Carlos <br />
                        Vélez Pombo Km 1 Vía Turbaco <br />
                        Tel: +57 605 6931919
                    </p>
                    <p><b>Cartagena- Colombia </b></p>
                    <h6>Campus Casa Lemaitre</h6>
                    <p>
                        Calle del Bouquet Cra.21 #25-92 <br />
                        Barrio Manga <br />
                        Tel: +57 605 6931919
                    </p>
                    <p><b>Cartagena- Colombia </b></p>
                    <h6>Programas virtuales CLIS </h6>
                    <p>
                        Complejo Logístico Industrial Siberia <br />
                        vía Cota, Bl. E – Bod.49 <br />
                        Tel:+57 1 593 6193 – 01 8000 961821
                    </p>
                    <p><b>Bogotá- Colombia</b></p>
                </section>
                <section className={styles.section_footer_3}>
                    <h6>Programas y servicios </h6>
                    <hr />
                    <p><b>Pregrados</b></p>
                    <p><b>Posgrados</b></p>
                    <p><b>Cursos, diplomados y talleres </b></p>
                    <p><b>Idiomas</b></p>
                    <p><b>Inscripciones y Admisiones</b></p>
                    <p><b>Apoyo Financiero </b></p>
                </section>
                <section className={styles.section_footer_4}>
                    <h6>Institucional</h6>
                    <hr />
                    <p><b>Derechos pecuniarios </b></p>
                    <p><b>Estatutos generales</b></p>
                    <p><b>Estatuto profesoral</b></p>
                    <p><b>Reglamentos</b></p>
                    <p><b>Política de tratamiento de datos</b></p>
                </section>
                <section className={styles.section_footer_5}>
                    <h6>servicios Web</h6>
                    <hr />
                    <p><b>Banner</b></p>
                    <p><b>Savio</b></p>
                    <p><b>Trabaja con nosotros</b></p>
                    <p><b>Portal 356</b></p>
                    <p><b>Come DoReTIC</b></p>
                    <p><b>Calidad Online</b></p>
                </section>
                <section className={styles.section_footer_6}>
                    <h6>Contacto</h6>
                    <hr />
                    <p>
                        <b>
                            Inscripciones Pregrado <br />
                            605 6931919 <br />
                            3235668731 - 3113417981 <br />
                            3235668733 - 3235668730 <br />
                            3113400661 - 3235668729 <br />
                            3167301597 <br />
                            infoinscripciones@utb.edu.co
                        </b>
                    </p>
                    <p>
                        <b>
                            Inscripciones Posgrado <br />
                            3113405776 – 3106508107 <br />
                            3113406556 – 3216085653 3164837199 <br />
                            mercadeoposgrado@utb.edu.co
                        </b>
                    </p>
                    <p>
                        <b>
                            Inscripciones Centro de Educación Permanente <br />
                            3216086917- 3106508127 <br />
                            Notificaciones legales <br />
                            secretariageneral@utb.edu.co <br />
                            Preguntas frecuentes
                        </b>
                    </p>

                </section>
            </Container>
        </footer>
    )
}