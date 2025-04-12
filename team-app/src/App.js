import React from "react";
import Team from "./Team";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Team />
      <div className="scrolling-title">
        <h2>Project Title - Travlo</h2>
      </div>
    </div>
  );
};

export default App;
