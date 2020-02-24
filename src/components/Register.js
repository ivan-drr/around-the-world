import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Register extends Component {

  constructor(props) {
    super();
    this.state = {
      show: true,
      name: false,
      nickname: false,
      birthYear: false,
      password: false
    }
  }

  handleClose = () => this.setState(state => state.show = false);
  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  };

  handleRegister = () => {
    const errorRegister = document.getElementById("errorRegister");

    const userToCreate = {
      name: this.state.name,
      nickname: this.state.nickname,
      password: this.state.password
    };

    fetch("https://atw-users.herokuapp.com/create", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': "application/json",
      },
      body: userToCreate
    })
    .then(() => this.handleClose)
    .catch(function(err) {
      errorRegister.innerHTML = "Could not create user";
      errorRegister.style.display = "block";
      console.log(err);
    });
  }

  render() {
    return (
      <div id="registerComponent">
        <Modal show={this.state.show} onHide={() => { this.handleClose(); this.props.history.push('/');}} className="text-center border-shadow">
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <span id="errorRegister" className="mt-4" style={{display: "none", color: "rgb(170, 58, 58)"}} />
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGridUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" onChange={this.handleChange} type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group controlId="formGridNickName">
                <Form.Label>Nick</Form.Label>
                <Form.Control name="nickname" onChange={this.handleChange} type="text" placeholder="Your nickname" />
              </Form.Group>

              <Form.Group controlId="formGridBirthYear">
                <Form.Label>Birth</Form.Label>
                <Form.Control name="birthYear" onChange={this.handleChange} type="text" placeholder="Your birth year" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={this.handleChange} type="password" placeholder="Your Password" />
              </Form.Group>

              <Form.Group controlId="formBasicRePassword">
                <Form.Label>Rewrite your password</Form.Label>
                <Form.Control type="password" placeholder="Rewrite your password" />
              </Form.Group>
            </Form>

            <Button variant="primary" onClick={this.handleRegister} className="mr-2">
              Create account
            </Button>
            <Button variant="secondary" onClick={() => { this.handleClose(); this.props.history.push('/');}}>
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Register);
