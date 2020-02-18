import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import '../styles/ButtonsComponent.css';

function Navbar() {
    // estas constantes definen un estado "show" del componente
    // creamos dos setters de la variable estado "handleClose"
    // y "handleShow", hacemos esto para mostrar o no por ejemplo un Modal
    // ya que el componente modal de react bootstrap tiene una propiedad
    // llamada "show" que lo muestra si su valor es true y lo esconde si es false
    // en este caso no lo estas usando, pero seria buena idea utilizarlas para
    // crear un modal para añadir viajes como puede ser el modal del componente login.
    // PERO si utilizamos dos modales: añadir viajes y ver viajes, entonces no podremos
    // utilizar la misma variable ya que se mostrarian los dos al pulsar cualquiera de
    // los dos botones.

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="navbar">
            <div id="buttonComponent1">
                <Button variant="outline-secondary" onClick={handleShow}>Añadir</Button>
            </div>
            <div id="buttonComponent2">
                <Button variant="outline-secondary">Ver viajes</Button>
            </div>
        </div>
    );
  }

export default Navbar;
