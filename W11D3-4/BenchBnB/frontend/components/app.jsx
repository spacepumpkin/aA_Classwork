import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting_container";

const App = function () {
  return (
    <>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>
    </>
  )
}

export default App;