import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
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

    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleCloseRead = () => setShow2(false);
    const handleShowRead = () => setShow2(true);

    return (
        <div id="navbar">
            <div id="buttonComponent1">
                <Button variant="outline-secondary" onClick={handleShowAdd} style={{fontSize: "2.3em"}}>✚</Button>
            </div>
            <div id="buttonComponent2">
                <Button variant="outline-secondary" onClick={handleShowRead} style={{fontSize: "2em"}}>⦿</Button>
            </div>
            <Modal show={show} onHide={handleCloseAdd} className="text-center border-shadow">
                <Modal.Header closeButton>
                    <Modal.Title>Añadir viaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="text" placeholder="País" />
                        </Form.Group>

                        <Form.Group controlId="formBasicFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="text" placeholder="¿Cuándo has estado?" />
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicLugar">
                            <Form.Label>Lugares visitados</Form.Label>
                            <Form.Control type="text" placeholder="Ciudades, sitios..." />
                        </Form.Group>

                        <Form.Group controlId="formBasicPreferidos">
                            <Form.Label>Preferidos</Form.Label>
                            <Form.Control type="text" placeholder="Lo que más te gustó" />
                        </Form.Group>

                        <Form.Group controlId="formBasicComer">
                            <Form.Label>¿Dónde comer?</Form.Label>
                            <Form.Control type="text" placeholder="Algún sitio al que volverías" />
                        </Form.Group>

                        <Form.Group controlId="formBasicFotos">
                            <Form.Label>Añadir fotos</Form.Label>
                            <Form.Control type="text" placeholder="URL" />
                        </Form.Group>
                    </Form>
                    <Button variant="primary">Añadir</Button>
                </Modal.Body>
            </Modal>
            <Modal show={show2} onHide={handleCloseRead} className="text-center border-shadow">
                <Modal.Header closeButton>
                    <Modal.Title>Tus viajes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" />
                        <Card.Body>
                            <Card.Title>País</Card.Title>
                            <Card.Text>
                            Fecha
                            </Card.Text>
                            <Button variant="primary">Ir al viaje</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </div>
    );
  }

export default Navbar;
