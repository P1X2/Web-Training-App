import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const Home = () => {
  return (
    <>
      <Container className="mt-3">
      <Row>
          <Col>
            <h2>Welcome on Training App!</h2>
            <h2>Join us!</h2>

            <Button
              className="m-2"
              size="lg"
              id="submit"
              type="button"
              variant="success"
              onClick={() => window.location.href = "/register"}
            >
              Register
            </Button>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
