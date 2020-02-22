import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import '../styles/Toolbar.css';

function Navbar() {

    const [show, setShow] = useState(false);

    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleCloseRead = () => setShow2(false);
    const handleShowRead = () => setShow2(true);

    return (
        <div id="navbar">
            <div id="addJourney">
                <Button id="btnAddJourney" onClick={handleShowAdd} style={{fontSize: "2.3em"}}>✚</Button>
            </div>
            <div id="seeAllJourneys">
                <Button id="btnSeeAllJourneys" onClick={handleShowRead} style={{fontSize: "2em"}}>⦿</Button>
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
