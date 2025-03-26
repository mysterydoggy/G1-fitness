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
        <div className="login-header" style = {{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <div className="login-box" style = {{margin: '10px'}}>
            <h1>Sign In</h1>
            <p>Please enter your credentials to sign in.</p>
            
            
            <button className="login-button" style = {{display: 'block', width: '200px', margin: '10px 0'}}>Sign In with Google</button>
            <button className="login-button" style = {{display: 'block', width: '200px', margin:'10px 0'}}>Sign In with Apple</button>
            
            <hr style = {{ margin: '10px 0' }} /> 

            <form onSubmit={handleSubmit}>
              <div>
              <label style={{fontSize: '20px'}}>Username: </label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style = {{ display: 'block', height: "20px", width: "200px"}}
              />
              </div>

              <div>
              <label style = {{fontSize: '20px'}}>Password: </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style = {{ display: 'block', height: "20px", width: "200px"}}
              />
              </div>
    
              <button type="submit" className="login-button" style={{display: 'block', width: '208px', margin: "20px 0"}}>Sign In</button>

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
