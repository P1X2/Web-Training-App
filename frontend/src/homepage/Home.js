import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";



const Home = () => {
  return (
    <>

      <Container class="container-fluid">
          <Row>
              <div class="col">
              <img src="ronnie.jpg" class="img-fluid" alt="Responsive img"></img>
              </div>

              <Col class="fs-1 pt-4 text-center">
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

              <div class="col"></div>

          </Row>


          <div class="row">





          </div>

      </Container>
    </>
  );
};

export default Home;
