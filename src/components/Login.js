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

  const login = () => {
    handleClose();
    fadeOutEffect("loginComponent");
    disableBlocker();
  }

  return (
    <div id="loginComponent">
      <div className="btnCstm btn-two" onClick={handleShow}>
        <span>Dive in</span>
      </div>
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

          <Button variant="primary" onClick={login}>
            Entrar
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Link to="signup">New here? Create an account</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const disableBlocker = () =>  {
  fadeOutEffect("blocker");
}

const fadeOutEffect = targetId => {
    var fadeTarget = document.getElementById(targetId);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = "none";
        }
    }, 30);
}

export default Login;
