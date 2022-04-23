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
              <input type="int" class={style.form_control} id="correo de respaldo para la donacion" placeholder="correo de respaldo para la donacion"></input>
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
//controldo es para el formulario de donaciones
//para que se pueda hacer el formulario de donaciones
//se debe importar el componente de formulario de donaciones
//y se debe importar el componente de checkoutForm
//para que se pueda hacer el checkoutForm
//se debe importar el componente de checkoutForm
//se debe importar el componente de controlado
//para que se pueda hacer el controlado
//se debe importar el componente de controlado