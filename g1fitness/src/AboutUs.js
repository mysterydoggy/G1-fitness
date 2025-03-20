import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
//About us page that will introduce our project, along with giving the user access to the repo with all the code. 



function AboutUs() {
    return (

        <div className="App-header">
            <div className="Title">
                <h1>About Us</h1>
            </div>

            <p>This is our website for our CIS4004 class!</p>
            <p1>Our github repo is: <Link>https://github.com/mysterydoggy/G1-fitness</Link></p1>

            <Link to="/">
                <button className="nav-button">Home</button>
            </Link>
        </div>
    );
}

export default AboutUs;
