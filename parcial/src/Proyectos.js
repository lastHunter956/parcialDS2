import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Flecha from './iconos/flecha-hacia-abajo-para-navegar.png';
import styles from "./Proyectos.module.css";
import { Container } from 'react-bootstrap';
import BarraNav from './components/BarraNav.js';
import FooterUtb from './components/FooterUtb.js';

export default function Proyectos() {
    return (
        <div>
            <BarraNav />
            <div id={styles.div_86px} />
            <div id={styles.foto_inicio}>
                <a href="#contenido_texto" id={styles.link_inicio}>
                    <h1 id={styles.Titulos_inicio}>CONOCE MAS DE COMO LLEVAMOS A <br />CABO LOS PRYECTOS</h1>
                </a>
                <a href="#contenido_texto" id={styles.link_inicio}>
                    <img src={Flecha} id={styles.flecha_inicio} alt="Flecha"/>
                </a>
            </div>
            <section id={styles.contenido_texto}>
                <Container>
                    <p id="contedio_texto">
                        Sit irure exercitation laborum exercitation ullamco nostrud consequat ut quis aliqua esse laborum elit. Sit ipsum consequat pariatur ex magna dolor aliqua mollit culpa veniam. Ex quis culpa non ut ea anim cillum tempor mollit incididunt. Veniam esse sint laborum non laborum. Ea nisi sit elit anim deserunt voluptate ipsum reprehenderit deserunt pariatur sint est irure voluptate. Ea id cupidatat incididunt laboris Lorem sunt veniam do duis irure voluptate ea aliquip incididunt. Labore in est nulla ullamco anim.
                    </p>
                </Container>
            </section>
            <h2 id={styles.titulo_propuestas_publicadas}>Propuestas publicadas</h2>
            <section id={styles.etapas_proyectos}>
                <h2 id={styles.etapas_proyecto_titulo}>Etapas de un proyecto</h2>
                <ul id={styles.etapas_proyecto_lista}>
                    <li id={styles.etapas_proyecto_lista_item}>Inscripción de propuestas.</li>
                    <li id={styles.etapas_proyecto_lista_item}>Propuesta publicada.</li>
                    <li id={styles.etapas_proyecto_lista_item}>En ejecución</li>
                    <li id={styles.etapas_proyecto_lista_item}>Cerrado.</li>
                </ul>
            </section>
            <div id={styles.etapas_img}>
                <div>
                    <img src={require('./imagenes/ordenes-de-cooperativas.jpg')} id={styles.etapas_img_img} alt="cooperativas"/>
                    <h3 id={styles.subtitulo_img}>CONOCE NUESTROS <br />PROYECTOS</h3>
                    <h3 id={styles.subtitulo2_img}>AQUÍ </h3>
                </div>
            </div>
            <div className={styles.clearfix}></div>
            <FooterUtb />
        </div>
    )
}
