import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './img.css'





const Home = () => {
  return (
    <>

      <Container class="container-l">
          <Row>
              <div class="col-6 tom">

              </div>

              <Col class="fs-1 pt-4  text-center">

                <h1 class="display-3">Welcome to gym app!</h1>
                <h2><span>Join us!</span></h2>

                <Button
                  className="btn"
                  size="lg"
                  id="submit"
                  type="button"
                  variant="success"
                  onClick={() => window.location.href = "/register"}
                >
                  Register

                </Button>
              </Col>

              <div class="col-2"></div>

          </Row>


          <div class="row">





          </div>

      </Container>
    </>
  );
};

export default Home;
