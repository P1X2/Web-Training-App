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

  
  const muscleGroups = [
    "LEGS",
    "ARMS",
    "BACK",
    "CHEST",
    "ABS"];


  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = () => {
    sendRequest("rest/exercise/blank/get/all", "GET", "").then((data) => {
      setExercises(data);
    }).catch((error) => {
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
    try {
      sendRequest("rest/exercise/blank/create", "POST", null, exercise);
  
      //fetchExercises(); // Fetch the updated exercise list from the server
      setExerciseName("");
      setMinReps("");
      setMaxReps("");
      setMaxWeight("");
      setMinWeight("");
      setTutorialUrl("");
      setMuscleGroup("");
      fetchExercises();
    } catch (error) {
      console.error("Error occurred while saving exercise", error);
    }
    fetchExercises();
  };
    

  //     if (response) {
  //       const savedExercise = response;
  //       setExercises([...exercises, savedExercise]);
  //       setExerciseName("");
  //       setMinReps("");
  //       setMaxReps("");
  //       setMaxWeight("");
  //       setMinWeight("");
  //       setTutorialUrl("");
  //       setMuscleGroup("");
  //     } else {
  //       console.error("Failed to save exercise");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred while saving exercise", error);
  //   }
  // };


  
  const deleteExercise = async (index) => {
    const exerciseId = exercises[index].id;
    try {
      const response = await sendRequest(`rest/exercise/${exerciseId}`, "DELETE");
  
      if (response) {
        const updatedExercises = [...exercises];
        updatedExercises.splice(index, 1);
        setExercises(updatedExercises);
      } else {
        console.error("Failed to delete exercise");
      }
    } catch (error) {
      console.error("Error occurred while deleting exercise", error);
    }
  };

  return (
    <Container className="my-5">
      <h1>Training Plan</h1>

      <div className="my-5">
        <h2>Add Exercise</h2>
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
            <Form.Label>Maximal Weight</Form.Label>
            <Form.Control
              type="number"
              value={maxWeight}
              onChange={(event) => setMaxWeight(event.target.value)}
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

          {/* <Form.Group className="mb-3">
            <Form.Label>Muscle Group</Form.Label>
            <Form.Control
              type="text"
              value={muscleGroup}
              onChange={(event) => setMuscleGroup(event.target.value)}
              required
            />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Add Exercise
          </Button>
        </Form>
      </div>

      {exercises.length > 0 ? (
      <div className="my-5">
        <h2>Exercise List</h2>
        <ListGroup>
          {exercises.map((exercise, index) => (
            <ListGroup.Item key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>{exercise.name}</h3>
                  <p>
                    Reps: {exercise.minReps} - {exercise.maxReps}
                    <br />
                    Weight: {exercise.minWeight}kg - {exercise.maxWeight}kg
                    <br />
                    Muscle Group: {exercise.muscleGroup}
                  </p>
                </div>
                <div>
                
                   <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">Tutorial Video</a>
                
                  <Button
                    variant="danger"
                    className="ms-3"
                    onClick={() => deleteExercise(index)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
) : null}

    </Container>
  );
}

export default TrainingPlan;
