import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Register(props) {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = () => {
    const errorRegister = document.getElementById("errorRegister");

    const userToCreate = JSON.parse(`{
      "name": "` + document.getElementById("nameR").value + `",
      "nickname": "` + document.getElementById("nicknameR").value + `",
      "password": "` + document.getElementById("passwordR").value + `",
      "birthYear": "` + document.getElementById("birthYearR").value + `"
    }`);

    console.log(userToCreate);

    fetch("https://atw-users.herokuapp.com/create", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': "application/json",
      },
      body: userToCreate
    })
    .then(() => handleClose)
    .catch(function(err) {
      errorRegister.innerHTML = "Could not create user";
      errorRegister.style.display = "block";
      console.log(err);
    });
  }

  return (
    <div id="registerComponent">
      <Modal show={show} onHide={() => { handleClose(); props.history.push('/');}} className="text-center border-shadow">
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <span id="errorRegister" className="mt-4" style={{display: "none", color: "rgb(170, 58, 58)"}} />
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control id="nameR" type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group controlId="formGridUserName">
              <Form.Label>Nick</Form.Label>
              <Form.Control id="nicknameR" type="text" placeholder="Your nickname" />
            </Form.Group>

            <Form.Group controlId="formGridUserName">
              <Form.Label>Birth</Form.Label>
              <Form.Control id="birthYearR" type="text" placeholder="Your birth year" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control id="passwordR" type="password" placeholder="Your Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Rewrite your password</Form.Label>
              <Form.Control type="password" placeholder="Rewrite your password" />
            </Form.Group>
          </Form>

          <Button variant="primary" onClick={handleRegister} className="mr-2">
            Create account
          </Button>
          <Button variant="secondary" onClick={() => { handleClose(); props.history.push('/');}}>
            Close
          </Button>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default withRouter(Register);
