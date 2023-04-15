import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import sendRequest from "../util/ajax";

const PrivateRoute = ({ children }) => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);

  if (jwt) {
    sendRequest(`/rest/auth/validate?token=${jwt}`, "GET", jwt)
      .then((isValid) => {
        console.log(isValid);
        setIsValid(isValid);
        setLoading(false);
      }) //do zmiany potem
      .catch((error) => {
        console.log(error);
      });
  } else {
    return <Navigate to="/login" />;
  }
  return loading ? (
    <div>Loading</div>
  ) : isValid ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
