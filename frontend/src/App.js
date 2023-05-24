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

function App() {
  // console.log(sendRequest("rest/auth//get?username=wojtek398", "GET"));
  //cos nie dziala
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/calculator" element={<BmiCalculator />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/testbooster" element={<Testoboost />}></Route>
      <Route
        path="/aaa"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
