import logo from "./logo.svg";
import "./App.css";
import sendRequest from "./util/ajax";
import { Route, Routes } from "react-router-dom";
import Home from "./homepage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";
import PrivateRoute from "./private_page/PrivatePage";
import Register from "./registeer/Register";
import BmiCalculator from "./calculator/Calculator";
import Testoboost from "./testbooster/Testoboost";

import Quiz from "./quiz/Quiz";
import TrainingPlan from "./training_creator/TrainingCreator";
import Plan from "./training_plan/Plan";
import { useLocalState } from "./util/useLocalStorage";
import { useEffect, useState } from "react";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [isTrainer1, setIsTrainer1] = useLocalState(false, "isTrainer");
  useEffect(() => {
    isTrainer();
  }, []);
  function isTrainer() {
    sendRequest("/rest/auth/role", "GET", jwt)
      .then((response) => {
        setIsTrainer1(response.role === "TRAINER");
      })
      .catch((er) => {
        console.log(er);
      });
  }
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/calculator" element={<BmiCalculator />}></Route>
      <Route
        path="/quiz"
        element={
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/training_plan"
        element={
          <PrivateRoute>
            {isTrainer1 ? <TrainingPlan /> : <Plan />}
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/testbooster"
        element={
          <PrivateRoute>
            <Testoboost />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
