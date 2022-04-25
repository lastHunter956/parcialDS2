import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../App.css";
import Flecha from '../iconos/flecha-hacia-abajo-para-navegar.png';
import BarraNav from './BarraNav';
import FooterUtb from './FooterUtb';
import styles from "./Contenido.module.css";

export default function Contenido() {
    return (
        <div>
            <BarraNav />
            <div id={styles.div_86px}></div>
            <div id={styles.Personas_inicio}>
                <a href="#contenido_texto" id={styles.link_inicio}>
                    <h1 id={styles.Titulos_inicio}>SE PARTE DE LA INNOVACIÓN</h1>
                </a>
                <a href="#contenido_texto" id={styles.link_inicio}>
                    <img src={Flecha} id={styles.flecha_inicio} alt="Flecha"/>
                </a>
            </div>
            <Container>
                <div id={styles.contenido_1}>
                    <p id="contenido_texto">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis dolore reprehenderit eiusmod. Mollit dolor aliquip incididunt dolor aliquip eu voluptate ex. Ullamco exercitation laboris fugiat Lorem magna sunt aute ad. Deserunt sit fugiat elit velit non in est deserunt ad nulla cillum deserunt. Nulla labore velit esse adipisicing nostrud non amet dolore eu aute in elit ex laborum. Eiusmod laborum exercitation labore consectetur occaecat duis dolore qui incididunt laboris amet labore non veniam. Reprehenderit tempor deserunt eiusmod officia laborum id in Lorem non velit voluptate sunt laborum.
                    </p>
                    <p>
                        Aute labore eiusmod dolor ex voluptate magna. Sunt ullamco sunt velit sit cillum ut voluptate id amet culpa nisi qui. Pariatur occaecat enim ipsum dolor ad duis eiusmod ea ullamco Lorem velit nisi reprehenderit nulla. Elit fugiat reprehenderit sunt dolor ullamco sunt officia exercitation pariatur cupidatat aute velit. Excepteur dolore aliquip dolore aute fugiat quis eiusmod laboris pariatur do laboris. Fugiat elit consectetur mollit quis laboris cillum nisi Lorem excepteur do.
                    </p>
                </div>
            </Container>
            <div id={styles.nuestro_equipo}>
                <h2 id={styles.nuestro_equipo_titulo}>Nuestro equipo</h2>
                <p id={styles.nuestro_equipo_parrafo}>
                    Enim consequat anim et ut non. Elit Lorem Lorem ad aute fugiat labore. Aliqua do pariatur voluptate elit laborum tempor ea dolore nostrud. Esse ea sunt ullamco nisi dolor. Ipsum in ipsum magna et do.
                </p>
            </div>
            <div id={styles.nuestro_equipo_img}></div>
            <div className={styles.clearfix}></div>

            <div id={styles.empresas_asociadas_img}></div>
            <div id={styles.empresas_asociadas}>
                <p id={styles.empresas_asociadas_parrafo}>
                    Enim consequat anim et ut non. Elit Lorem Lorem ad aute fugiat labore. Aliqua do pariatur voluptate elit laborum tempor ea dolore nostrud. Esse ea sunt ullamco nisi dolor. Ipsum in ipsum magna et do.
                </p>
                <h2 id={styles.empresas_asociadas_titulo}>Marcas asociadas</h2>
            </div>
            <div className={styles.clearfix}></div>
            <h2 id={styles.nuestro_trabajo_titulo}>Conoce nuestro trabajo</h2>
            <Container>
                <div id={styles.contenido_1}>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis dolore reprehenderit eiusmod. Mollit dolor aliquip incididunt dolor aliquip eu voluptate ex. Ullamco exercitation laboris fugiat Lorem magna sunt aute ad. Deserunt sit fugiat elit velit non in est deserunt ad nulla cillum deserunt. Nulla labore velit esse adipisicing nostrud non amet dolore eu aute in elit ex laborum. Eiusmod laborum exercitation labore consectetur occaecat duis dolore qui incididunt laboris amet labore non veniam. Reprehenderit tempor deserunt eiusmod officia laborum id in Lorem non velit voluptate sunt laborum.
                    </p>
                </div>
            </Container>
            <FooterUtb />
        </div >
    )
}