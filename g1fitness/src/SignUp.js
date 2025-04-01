import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./G1_Logo.png"; 

function Signup() {
    const handleGoogleSignUp = () => {
        window.open("http://localhost:8080/auth/google", "_self"); // redirect to Google OAuth
    };

    return (
        <div className="login-header">
            <div className="form-box">
                <h1 className="auth-title">Sign Up</h1>
                <p className="auth-header">Create an account using Google.</p>

                <button className="auth-button" onClick={handleGoogleSignUp}>
                    Sign Up with Google
                </button>

                <hr />

                <p style={{ fontSize: "18px" }}>
                    Already have an account? <Link className="Links" to="/login">Sign In</Link>
                </p>

                <Link to="/">
                    <button className="nav-button">Home</button>
                </Link>
            </div>
            <img className="logo" src={logo} alt="G1 Fitness Logo" />
        </div>
    );
}

export default Signup;
