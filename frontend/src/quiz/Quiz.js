import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";

const Quiz = () => {
  const [goal, setGoal] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [trainingFrequency, setTrainingFrequency] = useState('');
  const [trainingDuration, setTrainingDuration] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [trainingIntensity, setTrainingIntensity] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
    const [trained, setTrained] = useState('');
    const [time, setTime] = useState('');
    const [intensity, setIntensity] = useState('');
    const [experienceScore, setExperienceScore] = useState("");


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

    let experiencePoints=0;
    let experiencePointsMultiplayer=0;
    let experienceScore=0;

    let intensity="";
    let time = 0;
    //wiek war
    if (age < 18) {
      alert("You can use this utility only if you are older than 18");
      return;
        }
    // wiek points
    if (age >=18 && age <=30) {
      experiencePoints+=15;
            }
    if (age >=31 && age <=50) {
      experiencePoints+=20;
            }
    if (age >=51) {
      experiencePoints+=10;
            }
    // plec=
    if (gender==="male") {
          experiencePointsMultiplayer+=1;
                }
    if (gender==="female") {
          experiencePointsMultiplayer+=0.7;
                }
    // waga
    if (currentWeight<60) {
          experiencePoints+=5;
                }
    if (currentWeight>=60 && currentWeight<=80) {
          experiencePoints+=10;
                }
    if (currentWeight>=81) {
          experiencePoints+=20;
                }
    // trained
    if (trained==="yes") {
          experiencePointsMultiplayer+=0.5;
    }

    if (trained==="no") {
          experiencePointsMultiplayer+=0;
    }

    // ciezkie czy lekkie
    if (trainingIntensity==="light") {
          intensity="Medium";
            experiencePointsMultiplayer+=0.0;
          }

    if (trainingIntensity==="heavy") {
          intensity="High";
            experiencePointsMultiplayer+=0.3;
          }


    experienceScore = experiencePoints * experiencePointsMultiplayer;

    if (experienceScore>=40) {
        experienceLevel="Advanced";
         }

    if (experienceScore<=40 && experienceScore>=25) {
        experienceLevel="Intermediate";
         }

    if (experienceScore<25) {
        experienceLevel="Begginer";
        }





    setExperienceScore(experienceScore);
    setTime(trainingDuration * trainingFrequency);
    setIntensity(intensity);
    setExperienceLevel(experienceLevel);
  };





  return (
    <div className="container ">
        <div class="row">
            <div class="col-sm">
              <h1 class="text-center">Gym Quiz</h1>
            </div>

          </div>




      <p></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="goal">What is your training goal?</label>
          <select
            className="form-control"
            id="goal"
            value={goal}
            onChange={handleGoalChange}
            required
          >
            <option value="">Select</option>
            <option value="weightLoss">Weight Loss</option>
            <option value="muscleGain">Muscle Gain</option>
            <option value="strengthBuilding">Strength Building</option>
          </select>
        </div>
        <p></p>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="gender">What is your gender?</label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <p></p>
        <div className="form-group">
          <label htmlFor="currentWeight">What is your current weight (in kg)?</label>
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
        <div className="form-group">
          <label htmlFor="trained">Have you ever trained in the gym before?</label>
          <select
              className="form-control"
              id="trained"
              value={trained}
              onChange={handleTrainedChange}
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
        </div>
        <p></p>
        <div className="form-group">
          <label htmlFor="trainingFrequency">How many training sessions per week do you want to have?</label>
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
        <div className="form-group">
          <label htmlFor="trainingDuration">How long do you want your training sessions to last (in minutes)?</label>
          <input
            type="number"
            className="form-control"
            id="trainingDuration"
            value={trainingDuration}
            onChange={handleTrainingDurationChange}
            required
          />
        </div>
        <p></p>
        <div className="form-group">
          <label htmlFor="muscleGroup">Which muscle group do you want to focus on the most?</label>
          <select
            className="form-control"
            id="muscleGroup"
            value={muscleGroup}
            onChange={handleMuscleGroupChange}
            required
          >
            <option value="">Select</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="legs">Legs</option>
            <option value="shoulders">Shoulders</option>
            <option value="arms">Arms</option>
            <option value="abs">Abs</option>
          </select>
        </div>
        <p></p>
        <div className="form-group">
          <label htmlFor="trainingIntensity">Do you want to have light or heavy training sessions?</label>
          <select
            className="form-control"
            id="trainingIntensity"
            value={trainingIntensity}
            onChange={handleTrainingIntensityChange}
            required
          >
            <option value="">Select</option>
            <option value="light">Light</option>
            <option value="heavy">Heavy</option>
          </select>
        </div>
        <p></p>
        <button type="submit" className="btn btn-warning">Submit your answers</button>
      </form>


      {experienceLevel && (
        <div className="mt-3">
          <h4>Quiz Result</h4>
          <p>Your Experience Score: {experienceScore}</p>
          <p>Estimated experience level: {experienceLevel}</p>
          <p>Training intensity : {intensity}</p>
          <p>Time needed per week (in minutes) : {time}</p>

          <p>Proposed training plan</p>





          //proponowany plan treningowy


        </div>
      )}
    </div>
  );
};

export default Quiz;


