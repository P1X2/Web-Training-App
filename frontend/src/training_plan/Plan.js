import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useLocalState } from "../util/useLocalStorage";
import sendRequest from "../util/ajax";

function Plan() {
  const [plan, setPlan] = useLocalState("", "plan");
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    fetchPlan();
  }, []);

  const fetchPlan = () => {
    sendRequest("rest/plan/get", "GET", jwt)
      .then((data) => {
        setPlan(data);
      })
      .catch((error) => {
        console.error("Error occurred while fetching plan", error);
      });
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div class="container-fluid">
        <div class="row pt-5 text-center">
            <h1 class="display-1 fw-semibold">Your Training Plan</h1>
        </div>

      {plan ? (
            <div class="row">
                <div class="col-1"></div>
                <div class="col">
                    <div>
                      {plan.exercises && plan.exercises.length > 0 ? (
                        <div>
                          <h3 class="text-center display-3 pt-4">Exercises:</h3>
                          <Row>
                            {plan.exercises.map((exercise) => (
                              <Col key={exercise.id} xs={12} md={6} lg={4}>
                                <Card key={exercise.id} className="mb-3">
                                  <Card.Body>
                                    <Card.Title class="text-uppercase fs-3 pb-2">
                                      {capitalizeFirstLetter(exercise.name)}
                                    </Card.Title>
                                    <Card.Text>Reps: {exercise.reps}</Card.Text>
                                    <Card.Text>Weight: {exercise.weight}</Card.Text>
                                       <Card.Text>
                                          Muscle Group: {exercise.muscleGroup}
                                       </Card.Text>
                                    <Card.Text>
                                      {" "}
                                      <a
                                        href={exercise.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        Tutorial Video
                                      </a>
                                    </Card.Text>



                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </div>


                      ) : (
                        <p>No exercises available</p>
                      )}
                </div>
           </div>

           <div class="col-1"></div>
            <div class="row">
                <h3 class="text-center pt-3 display-4">Break time between sets: {plan.breakTime} minutes</h3>
            </div>

        </div>
      ) : (
        <p>No plan available</p>
      )}
    </div>
  );
}

export default Plan;
