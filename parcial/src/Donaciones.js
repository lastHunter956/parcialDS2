import React, { Fragment } from 'react'
//import from1 from './components/from1.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Personas from './imagenes/img_center_donacion.png';
import './Donaciones.css';
import Controlado from "./components/checkoutForm/Controlado.jsx";
import { Container } from 'react-bootstrap';
import LoginButton from "./components/crearSeccion/login";
import LogoutButton from "./components/crearSeccion/Logout";
import Profile from "./components/crearSeccion/Profile";
export default function Donaciones() {
  return (
    <div>
      <Fragment>
        <img src={Personas} class="img-fluid" ></img>

        <div className="primer_texto">
          <p>
            Pellentesque id. Amet nulla facilisi morbi tempus iaculis urna. Placerat in
            egestas erat imperdiet sed euismod nisi. Faucibus nisl tincidunt eget nullam
            non. Duis at consectetur lorem donec massa sapien faucibus. Diam donec
            adipiscing tristique risus nec feugiat in. Aliquet lectus proin nibh nisl
            condimentum id. Et netus et malesuada fames ac turpis. Donec massa sapien
            faucibus et molestie ac feugiat sed. Risus pretium quam vulputate dignissim.

            Tristique risus nec feugiat in fermentum posuere urna nec. Ultrices tincidunt
            arcu non sodales neque sodales. Fermentum odio eu feugiat pretium nibh
            ipsum consequat nisl vel.
          </p>
        </div>
        <div className="container_1">

          <div className="Donar">
            ¿Comó donar?

          </div>
          <div className="lista_donar">
            <ul>• selecciona la cantidad.
            </ul>
            <ul>• Selecciona método de pago.
            </ul>
            <ul>• Ingrese la iniciativa.
            </ul>
            <ul>• Envié su donación.
            </ul>
            <ul>• Imprima recibo de pago.</ul>

          </div>
          <div className="row">
            <div className="col">
              <from1 />
            </div>
          </div>
          <div className="col">
            <div className="row" >
              <Container>
                <Controlado />
              </Container>
            </div>
            <div className="contenedor_perfiles">
              <div className="botones_user">
                <LoginButton />
              </div>
              <div className="perfil_user">
                <Profile />
              </div>
              <div className="botones_user" >
                <LogoutButton />
              </div>
            </div>
          </div>




        </div>

      </Fragment>


    </div>
  )
}
