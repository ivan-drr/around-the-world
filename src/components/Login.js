import React from 'react';
// import $ from 'jquery';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/Login.css';

function Login() {
  return (
    <div id="loginComponent">
      <Card className="text-center">
        <Card.Header>Access to your account</Card.Header>
        <Card.Body>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>

        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to="signup">New here? Create an account</Link>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Login;
