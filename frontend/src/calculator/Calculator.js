import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function BmiCalculator() {
  const [mass, setMass] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  

  const calculateBmi = (event) => {
    event.preventDefault();
    if (mass <= 0 || height <= 0) {
      alert("Please enter positive values for weight and height.");
      return;
    }
    const heightInMeters = height / 100;
    const calculatedBmi = mass / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));
  };

  const [repetitions, setRepetitions] = useState("");
  const [maxBenchPress, setMaxBenchPress] = useState("");

  const calculateMaxBenchPress = (event) => {
    event.preventDefault();
    if (weight <= 0 || repetitions <= 0) {
      alert("Please enter positive values for weight and repetitions.");
      return;
    }
    const calculatedMaxBenchPress = weight * (1 + repetitions / 30);
    setMaxBenchPress(calculatedMaxBenchPress.toFixed(2));
  };
  

return (
    <Container className="my-5">
      <h1>Calculators</h1>

      <div className="my-5">
        <h2>BMI Calculator</h2>
        <Form onSubmit={calculateBmi}>
          <Form.Group className="mb-3">
            <Form.Label>Weight (in kg)</Form.Label>
            <Form.Control
              type="number"
              value={mass}
              onChange={(event) => setMass(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Height (in cm)</Form.Label>
            <Form.Control
              type="number"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Calculate BMI
          </Button>
        </Form>

        {bmi && (
          <div className="mt-3">
            <h3>Your BMI is: {bmi}</h3>
          </div>
        )}
      </div>

      <div className="my-5">
        <h2>Max Bench Press Calculator</h2>
        <Form onSubmit={calculateMaxBenchPress}>
          <Form.Group className="mb-3">
            <Form.Label>Weight (in kg)</Form.Label>
            <Form.Control
              type="number"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Repetitions</Form.Label>
            <Form.Control
              type="number"
              value={repetitions}
              onChange={(event) => setRepetitions(event.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Calculate Max Bench Press
          </Button>
        </Form>

        {maxBenchPress && (
          <div className="mt-3">
            <h3>Your max bench press is: {maxBenchPress} kg</h3>
          </div>
        )}
      </div>
    </Container>
  );
}

export default BmiCalculator;