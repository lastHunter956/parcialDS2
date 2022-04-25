import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styles from './Student.module.css';
import BarraStud from './components/BarraStud';
import FooterUtb from './components/FooterStud';
import usuario from './iconos/usuario.jpg';

export default function Student() {
    return (
        <div>
            <BarraStud />
            <Fragment>
                <div id={styles.div_87px} />
                
                <section className={styles.section_2}>
                    <Container>
                    <img src={usuario} id={styles.usuario} atl="usuario" />
                        <h2>Jaider Castilla</h2>
                        <div className={styles.Nombre}>
                        </div>
                        <div className={styles.Codigo}>
                            <h2>T00061422</h2>
                        </div>
                        <br />
                        <Container>
                            <br />
                            <div class="accordion " id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="acorden1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Mis proyectos
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <Container><div class={styles.persona1}>
                                            <br />
                                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <h2>1</h2>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <h2>2</h2>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <h2>3</h2>
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                            <br />
                                        </div></Container>
                                    </div>
                                </div>
                                <br />
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Proyectos Disponibles
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <Container><div class={styles.persona1}>
                                            <br />
                                            <input type="" class="form-control" id="nombre" placeholder="Nombre Completo" required></input>
                                            <br />
                                            <input class="form-control" type="number" placeholder="Cedula" aria-label="default input example" required></input>
                                            <br />
                                            <div class={styles.descripcion}>
                                                <textarea class="form-control" id="descripcionP" rows="3" placeholder="Descripcion del proyecto" required></textarea>
                                            </div>
                                            <br />
                                            <div class={styles.email}>
                                                <input type="email" class="form-control" id="emaill" placeholder="NIT" required></input>
                                            </div>
                                            <br />
                                            <div class="marcar">
                                                <input class="form-check-input" type="checkbox" value="" id="marcar_termi" required></input>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    he leído todos los términos y condiciones de usuario.
                                                </label>
                                            </div>
                                            <br />
                                            <div class="Enviar">
                                                <button type="submit" class="btn btn-primary mb-3">Enviar propuesta</button>
                                            </div>
                                        </div></Container>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </Container>
                        <br />
                    </Container>
                </section>
            </Fragment>
            <FooterUtb />
        </div>
    )
}