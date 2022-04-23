import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styles from './Propuestas.module.css';
import Docentes from "./imagenes/image-perfil-docentes-5.jpg";

export default function Propuestas() {
    return (
        <div>
            <Fragment>
                <img src={Docentes} class="img-fluid" alt="personas"></img>
                <Container>
                    <h1 className={styles.primer_linea}>DEJA QUE NOS ENCANGEMOS</h1>
                </Container>
                <div className={styles.texto}>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat tempore sequi magnam harum necessitatibus, praesentium provident, distinctio repudiandae reprehenderit unde quasi a illum, accusamus quam nobis quibusdam libero eligendi?

                </div>
                <br />
                <div className={styles.text2}>
                    <p><b>Cuéntanos tu propuesta</b></p>
                </div>
                <br />
                <Container>
                    <form class={styles.formulario}>
                        <Container>
                            <br />
                            <div class="accordion " id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="acorden1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Persona
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                                                <input type="email" class="form-control" id="emaill" placeholder="Correo" required></input>
                                            </div>
                                            <br />
                                            <div class="marcar">
                                                <input class="form-check-input" type="checkbox" value="" id="marcar_termi" required></input>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    he leído todos los términos y condiciones de usuario.
                                                </label>
                                            </div>
                                            <br />
                                            <div class="Enviar" id="boton_enviar1">
                                                <button type="submit" class="btn btn-primary">Enviar propuesta</button>
                                            </div>
                                            <br />
                                        </div></Container>
                                    </div>
                                </div>
                                <br />
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Empresa
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
                    </form>
                </Container>
                <br />
            </Fragment>
        </div>
    )
}