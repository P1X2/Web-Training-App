import React, { useState, useEffect } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { useLocalState } from "../util/useLocalStorage";
import sendRequest from "../util/ajax";







function TrainingPlan() {
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [minReps, setMinReps] = useState("");
  const [maxReps, setMaxReps] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [tutorialUrl, setTutorialUrl] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const muscleGroups = ["LEGS", "ARMS", "BACK", "CHEST", "ABS"];

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = () => {
    sendRequest("rest/exercise/blank/get/all", "GET", "")
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error("Error occurred while fetching exercises", error);
      });
  };

  const addExercise = async (event) => {
    event.preventDefault();
    if (
      !exerciseName ||
      !minReps ||
      !maxReps ||
      !maxWeight ||
      !minWeight ||
      !tutorialUrl ||
      !muscleGroup
    ) {
      alert("Please fill all exercise details.");
      return;
    }

    const exercise = {
      name: exerciseName,
      minReps: minReps,
      maxReps: maxReps,
      maxWeight: maxWeight,
      minWeight: minWeight,
      videoUrl: tutorialUrl,
      muscleGroup: muscleGroup,
    };

    //try {
    setErrorMsg("");
    
    sendRequest("rest/exercise/blank/create", "POST", null, exercise)
    .then((response) => {
      if (response.status !== 200){
        setErrorMsg("Invalid exercise, try again");
      }
    });
    //fetchExercises(); // Fetch the updated exercise list from the server
    setExerciseName("");
    setMinReps("");
    setMaxReps("");
    setMaxWeight("");
    setMinWeight("");
    setTutorialUrl("");
    setMuscleGroup("");
    fetchExercises();

  };


  return (
    <div className="my-5 container-fluid">
        <div class="row text-center ">
          <h1 class="display-1 fw-semibold">Training Plan Creator</h1>
        </div>



        <div class="row">

            <div class="col-1"></div>

            <div class="col">
              <div className="my-5">
                <h2 class="display-4 mb-3 text-center">Add Exercise</h2>
                <Form onSubmit={addExercise}>
                  <Form.Group className="mb-3">
                    <Form.Label>Exercise Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={exerciseName}
                      onChange={(event) => setExerciseName(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Minimal Number of Repetitions</Form.Label>
                    <Form.Control
                      type="number"
                      value={minReps}
                      onChange={(event) => setMinReps(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Maximal Number of Repetitions</Form.Label>
                    <Form.Control
                      type="number"
                      value={maxReps}
                      onChange={(event) => setMaxReps(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Minimal Weight</Form.Label>
                    <Form.Control
                      type="number"
                      value={minWeight}
                      onChange={(event) => setMinWeight(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Maximal Weight</Form.Label>
                    <Form.Control
                      type="number"
                      value={maxWeight}
                      onChange={(event) => setMaxWeight(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Tutorial Video URL</Form.Label>
                    <Form.Control
                      type="text"
                      value={tutorialUrl}
                      onChange={(event) => setTutorialUrl(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <div>
                    <label htmlFor="muscleGroup">Muscle Group:</label>
                    <select
                      className="form-control"
                      id="muscleGroup"
                      value={muscleGroup}
                      onChange={(event) => setMuscleGroup(event.target.value)}
                    >
                      <option value="">Select a muscle group</option>
                      {muscleGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button type="submit"  className="btn btn-warning btn-lg btn-block mt-4">
                    Add Exercise
                  </Button>
                  {errorMsg ? (
                  <Form.Group className="mb-4">
                      <div className="" style={{ color: "red", fontWeight: "bold" , fontSize: "14"}}>
                        {errorMsg}
                      </div>
                  </Form.Group>
                ) : (
                <></>
                )}

                </Form>
                
              </div>
            </div>

            <div class="col-1"></div>
        </div>



      {exercises.length > 0 ? (
        <div class="row">
            <div class="col-1"></div>
            <div class="col">
                  <h2 class="text-center display-3">Exercise List</h2>
                  <ListGroup>
                    {exercises.map((exercise, index) => (
                      <ListGroup.Item key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h3 class="text-uppercase">{exercise.name}</h3>
                            <p>
                              Reps: {exercise.minReps} - {exercise.maxReps}
                              <br />
                              Weight: {exercise.minWeight}kg - {exercise.maxWeight}kg
                              <br />
                              Muscle Group: {exercise.muscleGroup}
                            </p>
                          </div>
                          <div>
                            <a
                              href={exercise.videoUrl}
                              target="_blank"
                              class="text-secondary"
                              rel="noopener noreferrer"
                            >
                              Tutorial Video
                            </a>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
            </div>
            <div class="col-1"></div>
        </div>
      ) : null}
    </div>
  );
}

export default TrainingPlan;
