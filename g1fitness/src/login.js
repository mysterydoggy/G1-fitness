import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Signup from './SignUp';
import logo from "./G1_Logo.png"; // Importing G1 Fitness Logo


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Attempt:", { username, password });
    };

    return (
        <div className="login-header">
          <div className="form-box">
            <h1 className="form-title">Sign In</h1>
            <p className="form-header">Please enter your credentials to sign in.</p>
            
            <button className="form-button">Sign In with Google</button>
            <button className="form-button">Sign In with Apple</button>
            
            <hr /> 

            <form onSubmit={handleSubmit}>
              <div>
                <label className="form-text">Username:</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="form-text">Password:</label>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
    
              <button type="submit" className="form-button">Sign In</button>
            </form>

            <p><Link className="form-link" to="#">Forgot password?</Link></p>
            <p style = {{fontSize: '18px'}}>New User? <Link className="form-link" to="/Signup">Sign Up</Link>
            </p>
            <Link to="/">
              <button className="nav-button">Home</button>
            </Link>
          </div>
          <img className="form-logo" src={logo} alt="G1 Fitness Logo" />
        </div>
    );
}

export default Login;
