import React, { useState } from 'react';
// import $ from 'jquery';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../styles/Login.css';

function Login() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="loginComponent">
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose} className="text-center border-shadow">
        <Modal.Header closeButton>
          <Modal.Title>Accede a tu cuenta</Modal.Title>
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

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuerdame" />
            </Form.Group>
          </Form>

          <Button variant="primary" onClick={handleClose} className="mr-2">
            Guardar Cambios
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Link to="signup">New here? Create an account</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
