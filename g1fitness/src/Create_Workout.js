import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
//User will be able to create a workout on this page. 



function WorkoutCreation() {
  return (

    <div className="App-header">

        <div className="Title">
            <h1>Workout Creation</h1>
        </div>
      
      <Link to="/">
        <button className="nav-button">Home</button>
      </Link>
    </div>
  );
}

export default WorkoutCreation;
