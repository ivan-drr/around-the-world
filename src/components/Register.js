import React, { useState } from 'react';
// import $ from 'jquery';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Register() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="registerComponent">
      <Button variant="primary" onClick={handleShow}>
        Registrarse
      </Button>

      <Modal show={show} onHide={handleClose} className="text-center border-shadow">
        <Modal.Header closeButton>
          <Modal.Title>Regístrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Introduce tu correo" />
              <Form.Text className="text-muted">
                Nunca compartiremos tu correo con nadie.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridUserName">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control type="text" placeholder="Nombre de usuario" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Repite tu contraseña</Form.Label>
              <Form.Control type="password" placeholder="Repite tu contraseña" />
            </Form.Group>
          </Form>

          <Button variant="primary" onClick={handleClose} className="mr-2">
            Guardar Cambios
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default Register;
