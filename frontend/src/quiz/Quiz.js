import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import sendRequest from "../util/ajax";
import { useLocalState } from "../util/useLocalStorage";

const Quiz = () => {
  const [goal, setGoal] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [trainingFrequency, setTrainingFrequency] = useState("");
  const [trainingDuration, setTrainingDuration] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [trainingIntensity, setTrainingIntensity] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [trained, setTrained] = useState("");
  const [time, setTime] = useState("");
  const [intensity, setIntensity] = useState("");
  const [experienceScore, setExperienceScore] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleTrainedChange = (e) => {
    setTrained(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCurrentWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  const handleTrainingFrequencyChange = (e) => {
    setTrainingFrequency(e.target.value);
  };

  const handleTrainingDurationChange = (e) => {
    setTrainingDuration(e.target.value);
  };

  const handleMuscleGroupChange = (e) => {
    setMuscleGroup(e.target.value);
  };

  const handleTrainingIntensityChange = (e) => {
    setTrainingIntensity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Determine experience level
    let experienceLevel = "";

    let experiencePoints = 0;
    let experiencePointsMultiplayer = 0;
    let experienceScore = 0;

    let intensity = "";
    let time = 0;
    //wiek war
    if (age < 18) {
      alert("You can use this service only if you are older than 18");
      return;
    }

    if (currentWeight <= 40) {
      alert(
        "Invalid weight - you need to weight at least 40kg to use our services"
      );
      return;
    }

    if (trainingDuration <= 20 || trainingFrequency <= 0) {
      alert("Invalid input - check your answers");
      return;
    }
    // wiek points
    if (age >= 18 && age <= 30) {
      experiencePoints += 15;
    }
    if (age >= 31 && age <= 50) {
      experiencePoints += 20;
    }
    if (age >= 51) {
      experiencePoints += 10;
    }
    // plec=
    if (gender === "male") {
      experiencePointsMultiplayer += 1;
    }
    if (gender === "female") {
      experiencePointsMultiplayer += 0.7;
    }
    // waga
    if (currentWeight < 60) {
      experiencePoints += 5;
    }
    if (currentWeight >= 60 && currentWeight <= 80) {
      experiencePoints += 10;
    }
    if (currentWeight >= 81) {
      experiencePoints += 20;
    }
    // trained
    if (trained === "yes") {
      experiencePointsMultiplayer += 0.5;
    }

    if (trained === "no") {
      experiencePointsMultiplayer += 0;
    }

    // ciezkie czy lekkie
    if (trainingIntensity === "light") {
      intensity = "Medium";
      experiencePointsMultiplayer += 0.0;
    }

    if (trainingIntensity === "heavy") {
      intensity = "High";
      experiencePointsMultiplayer += 0.3;
    }

    experienceScore = experiencePoints * experiencePointsMultiplayer;

    if (experienceScore >= 40) {
      experienceLevel = "advanced";
    }

    if (experienceScore <= 40 && experienceScore >= 25) {
      experienceLevel = "intermediate";
    }

    if (experienceScore < 25) {
      experienceLevel = "beginner";
    }

    setExperienceScore(experienceScore);
    setTime(trainingDuration * trainingFrequency);
    setIntensity(intensity);
    setExperienceLevel(experienceLevel);

    const requestBody = {
      mainTarget: goal,
      advancement: experienceLevel,
      weight: currentWeight,
      mainMuscleGroup: muscleGroup,
    };

    try {
      console.log(requestBody);
      sendRequest("rest/plan/create", "POST", jwt, requestBody);
    } catch (error) {
      console.error("Error occurred while creating plan", error);
    }
  };

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-sm">
          <h1 class="text-center pt-3 display-2">Gym Quiz</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-2"></div>

        <div class="col">
          <form onSubmit={handleSubmit}>
            <div className="form-group pb-2">
              <label htmlFor="goal">What is your training goal?</label>
              <select
                className="form-control"
                id="goal"
                value={goal}
                onChange={handleGoalChange}
                required
              >
                <option value="">Select training goal</option>
                <option value="stamina">Stamina</option>
                <option value="growth">Growth</option>
                <option value="strength">Strength</option>
              </select>
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="age">How old are you?</label>

              <input
                type="number"
                className="form-control"
                id="age"
                value={age}
                onChange={handleAgeChange}
                required
              />
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="gender">What is your gender?</label>
              <select
                className="form-control"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="currentWeight">
                What is your current weight (in kg)?
              </label>
              <input
                type="number"
                className="form-control"
                id="currentWeight"
                value={currentWeight}
                onChange={handleCurrentWeightChange}
                required
              />
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="trained">
                Have you ever trained in the gym before?
              </label>
              <select
                className="form-control"
                id="trained"
                value={trained}
                onChange={handleTrainedChange}
                required
              >
                <option value="">Select answer</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="trainingFrequency">
                How many training sessions per week do you want to have?
              </label>
              <input
                type="number"
                className="form-control"
                id="trainingFrequency"
                value={trainingFrequency}
                onChange={handleTrainingFrequencyChange}
                required
              />
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="trainingDuration">
                How long do you want your training sessions to last (in
                minutes)?
              </label>
              <input
                placeholder="Must be grater than 20min"
                type="number"
                className="form-control"
                id="trainingDuration"
                value={trainingDuration}
                onChange={handleTrainingDurationChange}
                required
              />
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="muscleGroup">
                Which muscle group do you want to focus on the most?
              </label>
              <select
                className="form-control"
                id="muscleGroup"
                value={muscleGroup}
                onChange={handleMuscleGroupChange}
                required
              >
                <option value="">Select prio muscle group</option>
                <option value="CHEST">Chest</option>
                <option value="BACK">Back</option>
                <option value="LEGS">Legs</option>
                <option value="SHOULDER">Shoulders</option>
                <option value="ARMS">Arms</option>
                <option value="ABS">Abs</option>
              </select>
            </div>
            <p></p>
            <div className="form-group pb-2">
              <label htmlFor="trainingIntensity">
                Do you want to have light or heavy training sessions?
              </label>
              <select
                className="form-control"
                id="trainingIntensity"
                value={trainingIntensity}
                onChange={handleTrainingIntensityChange}
                required
              >
                <option value="">Select intensity</option>
                <option value="light">Light</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
            <div class="row text-center py-5">
              <button
                type="submit"
                className="btn btn-warning btn-lg btn-block"
              >
                Submit your answers
              </button>
            </div>
          </form>

          {experienceLevel && (
            <div className="mt-3 fs-5">
              <h1 class="pb-3 text-center">Quiz Result</h1>
              <p>Your Experience Score: {experienceScore}</p>
              <p>Estimated experience level: {experienceLevel}</p>
              <p>Training intensity : {intensity}</p>
              <p>Time needed per week (in minutes) : {time}</p>
              <Button
                className="m-3"
                onClick={() => (window.location.href = "/training_plan")}
                size="lg"
                id="submit"
                type="button"
                variant="success"
              >
                See your plan
              </Button>
            </div>
          )}
        </div>

        <div class="col-2"></div>
      </div>
    </div>
  );
};

export default Quiz;