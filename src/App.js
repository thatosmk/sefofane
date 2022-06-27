import { Link } from "react-router-dom";
import logo from './images/logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App-header">
      <nav className="navbar">
        <ul className="flex items-center space-x-4">
          <Link className="navbar-link" to="/">Home</Link>
          <Link className="navbar-link" to="/pastLaunches">Past Launches</Link>
        </ul>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
