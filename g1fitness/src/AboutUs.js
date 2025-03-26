import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
//About us page that will introduce our project, along with giving the user access to the repo with all the code. 



function AboutUs() {
    return (

        <div className="App-header" style = {{margin: '10px 0'}}>
            <div className="Title" style = {{margin: '15px', textAlign: 'center'}}>
                <h1>About Us</h1>
                <p style = {{fontSize: '20px'}}>
                Born from the innovative minds of students at the University of Central Florida, G1 Fitness redefines how you 
                interact with your health and fitness regimen. Our platform does more than just simplify the tracking of workouts 
                and nutrition; it elevates your entire fitness experience to be more comprehensive, accessible, and engaging. At 
                the heart of G1 Fitness is a mission fueled by a passion to empower individuals like you to chase your fitness 
                dreams and lead healthier, more active lives. Through our gamified approach, we make consistency not only rewarding 
                but also irresistibly fun. Committed to innovation and ease of use, we ensure every aspect of your fitness journey is 
                seamlessly integrated into your life, helping you to achieve your best self, one step at a time.
                </p>
            </div>

            <p>This is our website for our CIS4004 class!</p>
            <p1>Our github repo is: <Link style = {{color: 'DodgerBlue'}}>https://github.com/mysterydoggy/G1-fitness</Link></p1>

            <Link to="/">
                <button className="nav-button" style = {{width: '120px', margin: '10px 0'}}>Return Home</button>
            </Link>
        </div>
    );
}

export default AboutUs;
