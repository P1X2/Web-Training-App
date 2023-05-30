import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './img.css'
import tom from './tom.jpg'
import ronnie from './ronnie2.jpg'






const Home = () => {
  return (
    <>

      <Container class="container-xxl">
          <Row>
              <div class="col">
                    <img src={tom} width="100%" alt="React Image" />
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

              <div class="col"><img src={tom} width="100%"  alt="React Image" /></div>

          </Row>


          <div class="row">





          </div>

      </Container>
    </>
  );
};

export default Home;
