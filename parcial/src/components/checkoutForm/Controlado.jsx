import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Controlado.module.css";

function Controlado() {
  return (
    <div>
      <div className={style.bloque_principal}>
        <div className={style.bloque_titulo}>
          <h1>Has tu donacion</h1>
        </div>
        <container className={style.container1}>
          <container className={style.container}>
            <div class={style.pestanas1}>
              <input type="int" class={style.form_control} id="cantidad_user" placeholder="Cantidad a contribuir"></input>
            </div>
            <div class={style.pestanas1}>
              <select class={style.selecciona}>
                <option selected>Seleccione método de pago</option>
                <option value="1">SuperGiros</option>
                <option value="2">Efecty</option>
                <option value="3">Ganaya</option>
              </select>
            </div>
            <div class={style.pestanas1}>
              <input type="text" class={style.form_control} id="iniciativa_user" placeholder="Ingrese iniciativa para apoyarla"></input>
            </div>
            <div class={style.boton_enviar_donacion}>
              <button type="button" class="mb-4 p-2 shadow-lg btn btn-secondary btn-lg btn-danger" >Enviar donacion</button>
            </div>

          </container>
        </container>
      </div>
    </div>
  )
}
export default Controlado;

