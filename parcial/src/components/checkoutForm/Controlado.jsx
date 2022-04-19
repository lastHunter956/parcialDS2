import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Controlado.module.css";

function Controlado() {
  return (
    <div>
      <container className={style.container}>
      <div class={style.pestanas1}>
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div class={style.pestanas1}>
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </container>
    </div>
  )
}
export default Controlado;

