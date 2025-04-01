import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Authentication.css";
import logo from "./G1_Logo.png"; 

function Login() {
    const handleGoogleSignIn = () => {
        window.open("http://localhost:8080/auth/google", "_self"); // redirect to Google OAuth
    };

    return (
        <div className="login-header">
            <div className="auth-box">
                <h1 className="auth-title">Sign In</h1>
                <p className="auth-header">Sign in using your Google account.</p>
                
                <button className="auth-button" onClick={handleGoogleSignIn}>
                    Sign In with Google
                </button>

                <hr />

                <p><Link className="Links" to="#">Forgot password?</Link></p>
                <p style={{ fontSize: '18px' }}>
                    New User? <Link className="Links" to="/Signup">Sign Up</Link>
                </p>

                <Link to="/">
                    <button className="nav-button">Home</button>
                </Link>
            </div>
            <img className="logo" src={logo} alt="G1 Fitness Logo" />
        </div>
    );
}

export default Login;
