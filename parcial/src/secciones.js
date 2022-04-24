import React, { Fragment } from 'react'
import styles from './secciones.module.css'
import Iniciar from './components/crearSeccion/iniciar.jsx'
function secciones() {
    return (
        <Fragment>
            <div className={styles.espacio}>
                <div className={styles.fondo}>
                    <div className={styles.principal}>
                        <div className={styles.hi}>
                            <Iniciar />
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}
export default secciones;
