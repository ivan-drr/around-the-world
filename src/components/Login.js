import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../styles/Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      nickname: false,
      password: false
    }
  }

  handleClose = () => this.setState(state => state.show = false);
  handleShow = () => this.setState(state => state.show = true);

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  };

  login = () => {
    fetch("https://atw-users.herokuapp.com", {
      method: 'GET',
      mode: 'no-cors'
    })
    .then((resp) => resp.json())
    .then((user) => {
      if (user[0].nickname === this.state.nickname
        && user[0].password === this.state.password) {
        this.handleClose();
        fadeOutEffect("loginComponent");
        disableBlocker();
        sessionStorage.setItem("logged", true);
      }
    })
    .catch(function(err) {
      const errorLogin = document.getElementById("errorLogin");
      errorLogin.innerHTML = "User not found with that nickname and password";
      errorLogin.style.display = "block";
      console.log(err);
    });

  }

  render() {
    return (
      <div id="loginComponent">
        <div className="btnCstm btn-two" onClick={this.handleShow}>
          <span>Dive in</span>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} className="text-center border-shadow">
          <Modal.Header closeButton>
            <Modal.Title>Access to your account</Modal.Title>
          </Modal.Header>

          <span id="errorLogin" className="mt-4" style={{display: "none", color: "rgb(170, 58, 58)"}} />
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGridUserName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="nickname" onChange={this.handleChange} placeholder="Your nickname" />
                <Form.Text className="text-muted">
                  We'll not share it with anyone.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
            </Form>

            <Button variant="primary" onClick={this.login}>
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
