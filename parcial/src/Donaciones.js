import React,{Fragment} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Personas from './imagenes/img_center_donacion.png';
import './Donaciones.css';
import { Container } from 'react-bootstrap';
export default function Donaciones() {
  return (
    <div>
        <Fragment>
        <img src={Personas} class="img-fluid" ></img>
         <Container>
         <div className="primer_texto">
          Pellentesque id. Amet nulla facilisi morbi tempus iaculis urna. Placerat in 
          egestas erat imperdiet sed euismod nisi. Faucibus nisl tincidunt eget nullam 
          non. Duis at consectetur lorem donec massa sapien faucibus. Diam donec 
          adipiscing tristique risus nec feugiat in. Aliquet lectus proin nibh nisl 
          condimentum id. Et netus et malesuada fames ac turpis. Donec massa sapien 
          faucibus et molestie ac feugiat sed. Risus pretium quam vulputate dignissim.
          
          Tristique risus nec feugiat in fermentum posuere urna nec. Ultrices tincidunt 
          arcu non sodales neque sodales. Fermentum odio eu feugiat pretium nibh 
          ipsum consequat nisl vel.
          </div>
         </Container> 
         
        </Fragment>

    </div>
  )
}
