import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import docentes from "../imagenes/image-perfil-docentes-5.jpg"

export default function Propuestas() {
    return (
        <div>
            <img src={docentes} id="docentes" />

            <span class="">
                <br />
                <p class="text">DEJA QUE NOS ENCANGEMOS</p>
            </span>

            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat tempore sequi magnam harum necessitatibus, praesentium provident, distinctio repudiandae reprehenderit unde quasi a illum, accusamus quam nobis quibusdam libero eligendi?
                </p>
            </div>
            <Container>
                <form class="formulario">
                    <div class="nombre">
                        <input class="form-control" type="text" aria-label="Nombre del creador o empresa" placeholder="Nombre del creador o empresa" required></input>
                    </div>

                    <br />

                    <div class="descripcion">
                        <textarea class="form-control" id="descripcionP" rows="3" placeholder="Descripcion del proyecto" required></textarea>
                    </div>

                    <br />

                    <div class="email">
                        <input type="email" class="form-control" id="emaill" placeholder="name@example.com" required></input>
                    </div>

                    <br />

                    <form class="formulario">
                        <div class="mb-3">
                            <label for="formFile" class="form-label">
                                <b>Por favor, cargue una prueba de que pertenece a una entidad</b>
                                <p>
                                    Esta es una prueba que busca que las personas que solicitan un proyecto sean
                                    personas reales con necesidades reales y no bots, asegúrese de que la foto sea
                                    clara y muestre la información solicitada.
                                </p>
                            </label>
                            <input class="form-control" type="file" id="formFile"></input>
                        </div>
                        
                        <div class="select">
                            <select class="form-label" aria-label="Default select example" required>
                                <option selected>una opcion</option>
                                <option value="1">suncuncuwncuanc</option>
                                <option value="2">scjscjkacsnkascnsajcnas</option>
                                <option value="3">csacjjnclacakscmlac</option>
                            </select>
                        </div>
                    </form>

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
                </form>
            </Container>
        </div>
    );
}