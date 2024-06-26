import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useLocalState } from "../util/useLocalStorage";
import sendRequest from "../util/ajax";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function sendRegistrationRequest() {
    const requestBody = {
      gender: gender,
      username: username,
      password: password,
    };
    console.log(requestBody);
    sendRequest("rest/auth/register", "POST", null, requestBody).then(
      (response) => {
        console.log(response);
        window.location.href = "login";
      }
    );
    //   .catch((errorResponse) => {
    //     alert(errorResponse);});
  }

  return (
    <div class="container-fluid">
      <div class="row my-3">
        <div class="display-2 fw-semibold text-center">Register</div>
      </div>

      <div class="row pt-4">
        <div class="col-3"></div>

        <div class="col">
          <div class="">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={gender}
                    onChange={(e) => setGender(e.currentTarget.value)}
                  >
                    <option>Choose gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    onChange={(event) => setGender(event.target.value)}
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group as={Col} md="4" controlId="validationCustomPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a password.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Row className="mb-3"></Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button
                type="submit"
                size="lg"
                onClick={() => sendRegistrationRequest()}
              >
                Register
              </Button>
              <Button
                className="m-3"
                onClick={() => (window.location.href = "/login")}
                size="lg"
                id="submit"
                type="button"
                variant="success"
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
