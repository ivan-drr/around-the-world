import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
import '../styles/ButtonsComponent.css';

function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="navbar">
            <div id="buttonComponent1">
                <Button variant="outline-secondary" onClick={handleShow}>Añadir</Button>
            </div>
            <div id="buttonComponent2">
                <Button variant="outline-secondary" onClick={handleShow}>Ver viajes</Button>
            </div>
        </div>
    );
  }



export default Navbar;
