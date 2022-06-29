import { Link } from "react-router-dom";

export default function PastLaunches() {
    return (
      <div>
        <nav className="navbar">
          <ul className="flex items-center space-x-4">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/pastLaunches">Past Launches</Link>
          </ul>
        </nav>
        <h2 className="h1">PastLaunches</h2>
      </div>
    );
  }
