//All of these imports help the homepage route to other parts of the website.
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./G1_Logo.png";
import dogVideo from "./Wenomechainsama.mp4";
import "./App.css";
import WorkoutPage from "./WorkoutPage"; // Ensure this file exists
import WorkoutCreation from "./Create_Workout";
import Journal from "./Journal";
import AboutUs from "./AboutUs";
import Login from "./login";
import Signup from "./SignUp";
import { Link } from "react-router-dom";



function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <div className="button-group">
            <Link to="/WorkoutLibrary"><button className="nav-button">Workout Library</button></Link>   
            <Link to="/WorkoutCreation"><button className="nav-button">Create a workout</button></Link>      
            <Link to="/Journal"><button className="nav-button">Journal</button></Link>
            <Link to="/AboutUs"><button className="nav-button">About us</button></Link>
            <Link to="/Login"><button className="nav-button">Sign in</button></Link>
            
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="Title"><h1>Welcome to G1 Fitness</h1></div>
          <video width="600" controls autoPlay loop className="spinning-video">
            <source src={dogVideo} type="video/mp4" />
          </video>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/WorkoutLibrary" element={<WorkoutPage/>}/>  
        <Route path="/WorkoutCreation" element={<WorkoutCreation/>}/>  
        <Route path="/Journal" element={<Journal/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
