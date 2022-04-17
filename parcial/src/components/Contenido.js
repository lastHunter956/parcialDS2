import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../App.css";
import Personas from '../imagenes/personas.jpg';

export default function Contenido() {
    return (
        <div>
            <img src={Personas} id="Personas-inicio" />
            <Container>
                <div id="contenido-1">
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis dolore reprehenderit eiusmod. Mollit dolor aliquip incididunt dolor aliquip eu voluptate ex. Ullamco exercitation laboris fugiat Lorem magna sunt aute ad. Deserunt sit fugiat elit velit non in est deserunt ad nulla cillum deserunt. Nulla labore velit esse adipisicing nostrud non amet dolore eu aute in elit ex laborum. Eiusmod laborum exercitation labore consectetur occaecat duis dolore qui incididunt laboris amet labore non veniam. Reprehenderit tempor deserunt eiusmod officia laborum id in Lorem non velit voluptate sunt laborum.
                    </p>
                    <p>
                        Aute labore eiusmod dolor ex voluptate magna. Sunt ullamco sunt velit sit cillum ut voluptate id amet culpa nisi qui. Pariatur occaecat enim ipsum dolor ad duis eiusmod ea ullamco Lorem velit nisi reprehenderit nulla. Elit fugiat reprehenderit sunt dolor ullamco sunt officia exercitation pariatur cupidatat aute velit. Excepteur dolore aliquip dolore aute fugiat quis eiusmod laboris pariatur do laboris. Fugiat elit consectetur mollit quis laboris cillum nisi Lorem excepteur do.
                    </p>
                </div>
                <div id="contenido-1">
                    <p>
                        Aute labore eiusmod dolor ex voluptate magna. Sunt ullamco sunt velit sit cillum ut voluptate id amet culpa nisi qui. Pariatur occaecat enim ipsum dolor ad duis eiusmod ea ullamco Lorem velit nisi reprehenderit nulla. Elit fugiat reprehenderit sunt dolor ullamco sunt officia exercitation pariatur cupidatat aute velit. Excepteur dolore aliquip dolore aute fugiat quis eiusmod laboris pariatur do laboris. Fugiat elit consectetur mollit quis laboris cillum nisi Lorem excepteur do.
                    </p>
                </div>
            </Container>
        </div>
    )
}