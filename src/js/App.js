import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../css/App.css';
import React, { lazy } from 'react';


const LaunchData = lazy(() => import('./launch_data'));

function App() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <ul className="flex items-center space-x-4">
          <Link className="navbar-link" to="/">Home</Link>
          <Link className="navbar-link" to="/pastLaunches">Past Launches</Link>
        </ul>
      </nav>
      <header className="hero">
        <LaunchData/>
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
