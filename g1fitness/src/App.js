import logo from './G1_Logo.png';
import dogVideo from "./Wenomechainsama.mp4";
import './App.css';











function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <div className="button-group">
            <button className="nav-button">Workout Library</button>
            <button className="nav-button">Create a workout</button>
            <button className="nav-button">Journal</button>
            <button className="nav-button">About us</button>
            <button className="nav-button">Sign in</button>

          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>

         Hey guys
        </p>

        <h1>Welcome to G1 Fitness</h1>

        <video width="600" controls autoPlay loop muted className="spinning-video">
          <source src={dogVideo}  type="video/mp4" />
        </video>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

export default App;
