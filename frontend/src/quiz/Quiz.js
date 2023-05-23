import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Quiz = () => {
  const [goal, setGoal] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [trainingFrequency, setTrainingFrequency] = useState('');
  const [trainingDuration, setTrainingDuration] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [trainingIntensity, setTrainingIntensity] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCurrentWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  const handleTargetWeightChange = (e) => {
    setTargetWeight(e.target.value);
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
    let experienceLevel = '';
    if (age >= 18 && age <= 25) {
      experienceLevel = 'beginner';
    } else if (age > 25 && age <= 40) {
      experienceLevel = 'intermediate';
    } else if (age > 40) {
      experienceLevel = 'advanced';
    }

    // Set experience level state
    setExperienceLevel(experienceLevel);
  };

  return (
    <div className="container">
      <h1>Gym Quiz</h1>
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
        <div className="form-group">
          <label htmlFor="height">What is your height (in cm)?</label>
          <input
            type="number"
            className="form-control"
            id="height"
            value={height}
            onChange={handleHeightChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="targetWeight">What is your target weight (in kg)?</label>
          <input
            type="number"
            className="form-control"
            id="targetWeight"
            value={targetWeight}
            onChange={handleTargetWeightChange}
            required
          />
        </div>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


      {experienceLevel && (
        <div className="mt-3">
          <h4>Quiz Result</h4>
          <p>Your Experience Level: {experienceLevel}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;


