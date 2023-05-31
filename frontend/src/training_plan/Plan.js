import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import sendRequest from "../util/ajax";
import YouTube from 'react-youtube';
import { useLocalState } from "../util/useLocalStorage";



                                     /* <a class="text-secondary" href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
                                        Tutorial Video
                                      </a>*/
const opts = {
      height: '300',
      width: '90%',
    playerVars: {
      autoplay: 0,
        },
}

  const getVideoId = (videoUrl) => {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    return urlParams.get('v');
  };

function Plan() {
  const [plan, setPlan] = useState("", "plan");
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
                                <Card key={exercise.id} className="mb-3 border-dark">
                                  <Card.Body>
                                    <div class="card-title text-center mb-2 text-uppercase fs-3 pb-2">
                                      {capitalizeFirstLetter(exercise.name)}
                                    </div>
                                    <Card.Text class="fs-5">Reps: {exercise.reps}</Card.Text>
                                    <Card.Text class="fs-5">Weight: {exercise.weight}</Card.Text>
                                       <Card.Text class="fs-5">
                                          Muscle Group: {exercise.muscleGroup}
                                       </Card.Text>
                                    <Card.Text class="display-5">
                                      {" "}
                                        <p class="text-center">Tutorial</p>

                                    </Card.Text>
                                    <div class="text-center">
                                        <YouTube videoId={getVideoId(exercise.videoUrl)} opts={opts} />
                                    </div>


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
        <h3 class="text-center pt-3 display-4">No plan available</h3>
      )}
    </div>
  );
}

export default Plan;
