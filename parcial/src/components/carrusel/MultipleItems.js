import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./MultipleItems.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {

      className: "center",
      centerMode: true,
      centerPadding: "60px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div>
        <Slider {...settings}>
          {
            lista.map((item, index) => {
              return <div key={index} id={styles.fondo}>
                <div id={styles.contenido_slider}>
                  <h2>PROYECTO {item}</h2>
                  <div id={styles.parrafo}>
                    <p>
                      Do sit laborum labore dolor irure laboris. Deserunt pariatur incididunt laboris nostrud tempor quis magna est. Fugiat adipisicing occaecat aliquip laborum veniam eiusmod anim mollit sunt enim quis anim elit mollit. Sunt ut ex nostrud commodo irure officia consequat ex sunt ad nisi voluptate.
                    </p>
                  </div>
                  <div id={styles.botones_div}>
                    <button id={styles.boton_slider}>Leer más</button>
                    <button id={styles.boton_slider}>Posturlarte</button>
                  </div>
                </div>
              </div>
            })
          }
        </Slider>
      </div>
    );
  }
}