import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import sendRequest from "../util/ajax";
import { useLocalState } from "../util/useLocalStorage";

const Login = () => {
  //"" is default value in useState function
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");
  function sendLoginRequest() {
    const requestBody = {
      username: username,
      password: password,
    };

    sendRequest("rest/auth/login", "POST", "", requestBody)
      .then((data) => {
        console.log(data);
        setJwt(data.jwtToken);
        window.location.href = "/aaa";
      })
      .catch((message) => {
        alert(message);
      });
  }

  return (
  <div class="container-fluid">
       <div class="row my-3">
            <div class="display-2 fw-semibold text-center">Login</div>
       </div>
      <div class="row pt-1">
        <div class="col-4">
            <p></p>
        </div>

        <div class="col">
          <Container className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="sm-2 w-50"
                type="username"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(usernameEvent) =>
                  setUsername(usernameEvent.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(passwordEvent) =>
                  setPassword(passwordEvent.target.value)
                }
              />
            </Form.Group>
            <Row>
              <Col>
                <Button
                  className="m-2"
                  size="lg"
                  id="submit"
                  type="button"
                  onClick={() => sendLoginRequest()}
                  variant="success"
                >
                  Login
                </Button>
                <Button
                  className="m-3"
                  onClick={() => window.location.href = "/register"}
                  size="lg"
                  id="submit"
                  type="button"
                  color="Dark"
                >
                  Register
                </Button>
              </Col>
            </Row>


          </Container>


        </div>
      </div>
  </div>
  );
};

export default Login;
