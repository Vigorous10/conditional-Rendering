import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">{userIsRegistered ? <Form /> : <Login />}</div>
  );
}

export default App;
