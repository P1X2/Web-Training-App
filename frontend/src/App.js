import logo from "./logo.svg";
import "./App.css";
import sendRequest from "./util/ajax";
import { Route, Routes } from "react-router-dom";
import Home from "./homepage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";

function App() {
  // console.log(sendRequest("rest/auth//get?username=wojtek398", "GET"));
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
