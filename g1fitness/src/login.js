import React, { useState } from "react"; import { Link } from "react-router-dom";
import "./App.css";
import logo from "./G1_Logo.png"; //importing G1 Fitness Logo 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Needs authentication logic implemented
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Attempt:", { username, password });
      };

      return (
        <div className="login-header" style = {{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
          <div className="login-box" style = {{ flexDirection: 'row', gap: '10px'}}>
            <h1>Sign In</h1>
            <p>Please enter your credentials to sign in.</p>
            
            
            <button className="login-button" style = {{display: 'block', width: '200px', margin: '10px'}}>Sign In with Google</button>
            <button className="login-button" style = {{display: 'block', width: '200px', margin: '10px'}}>Sign In with Apple</button>
            
            <hr style = {{ margin: '10px 0' }} /> 

            <form onSubmit={handleSubmit}>
              <div>
              <label>Username: </label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style = {{ margin: '10'}}
              />
              </div>

              <div>
              <label>Password: </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style = {{ margin: '10px 0' }}
              />
              </div>
    
              <button type="submit" className="login-button" style={{display: 'block', margin: "10px 0"}}>Sign In</button>

            </form>

            <p><a href="#" style = {{color: 'DodgerBlue', fontSize: '18px'}}>Forgot password?</a></p>
            <p style={{fontSize: '18px'}}>New User? <a href="#" style={{color: 'DodgerBlue', fontSize: '18px' }}>Sign Up</a></p>
            <Link to="/">
              <button className="nav-button">Home</button>
            </Link>
          </div>
          <img src={logo} alt="G1 Fitness Logo" style = {{height: '30vmin'}} />
        </div>
      );
    }

export default Login;
