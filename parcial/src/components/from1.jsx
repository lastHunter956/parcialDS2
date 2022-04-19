import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Seleccion() {
  return (
    <div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
export default Seleccion;

function Terminos({ history }) {
  return (
    <div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
          <label class="form-check-label" for="flexCheckIndeterminate">
            Indeterminate checkbox
          </label>
      </div>
    </div>
  )
}
export Terminos;
