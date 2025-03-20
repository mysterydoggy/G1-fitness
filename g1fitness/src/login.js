import React, { useState } from "react"; import { Link } from "react-router-dom";
import "./App.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //Needs authentication logic implemented
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Attempt:", { username, password });
      };
      return (
        <div className="login-header">
          <div className="login-box">
            <h1>Sign In</h1>
            <p>Please enter your credentials to sign in.</p>

            <form onSubmit={handleSubmit}>
              <label>Username:</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
    
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
    
              <button type="submit" className="login-button">Sign In</button>
            </form>
    
            <Link to="/">
              <button className="nav-button">Home</button>
            </Link>
          </div>
        </div>
      );
    }

export default Login;
