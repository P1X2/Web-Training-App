import logo from "./logo.svg";
import "./App.css";
import sendRequest from "./util/ajax";
import { Routes } from "react-router-dom";

function App() {
  console.log(sendRequest("rest/auth//get?username=wojtek398", "GET"));
  return <Routes></Routes>;
}

export default App;
