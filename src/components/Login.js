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
    const errorLogin = document.getElementById("errorLogin");

    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;

    fetch("https://atw-users.herokuapp.com", {
      method: 'GET',
      mode: 'no-cors'
    }, nickname, password)
    .then((resp) => resp.json())
    .then((user) => {
      if (user[0].nickname === nickname
        && user[0].password === password) {
        handleClose();
        fadeOutEffect("loginComponent");
        disableBlocker();
        sessionStorage.setItem("logged", true);
      }
    })
    .catch(function(err) {
      errorLogin.innerHTML = "User not found with that nickname and password";
      errorLogin.style.display = "block";
      console.log(err);
    });

  }

  return (
    <div id="loginComponent">
      <div className="btnCstm btn-two" onClick={handleShow}>
        <span>Dive in</span>
      </div>
      <Modal show={show} onHide={handleClose} className="text-center border-shadow">
        <Modal.Header closeButton>
          <Modal.Title>Access to your account</Modal.Title>
        </Modal.Header>
        <span id="errorLogin" className="mt-4" style={{display: "none", color: "rgb(170, 58, 58)"}} />
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control id="nickname" type="text" placeholder="Your nickname" />
              <Form.Text className="text-muted">
                We'll not share it with anyone.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>

          <Button variant="primary" onClick={login}>
            Login
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
