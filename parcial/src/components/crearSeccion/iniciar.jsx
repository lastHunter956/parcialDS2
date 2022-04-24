import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./iniciar.module.css";

function Iniciar() {
    return (
        <div>
            <div className={style.bloque_padre}>
                <div className={style.bloque_principal}>
                    <h1>Inicia seccion</h1>
                </div>
                <container >
                    <div className={style.bloque2}>
                        <div className={style.bloque3}>
                            <form>
                                <container class="mb-3">
                                    <label for="T000000001" class="form-label">Codigo de usuario</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    <div id="codigo" class="form-text">No compartiremos tus datos con nadie.</div>
                                </container>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>

                                <button type="submit" class="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>

                </container>


            </div>
        </div>
    );
}
export default Iniciar;
