import React, { lazy } from 'react';
import '../css/App.css';
import { Link } from "react-router-dom";

const Launches   = lazy(() => import('../js/components/launches'));

export default function PastLaunches() {
    return (
      <div className="main-container">
        <nav className="navbar">
          <ul className="flex items-center space-x-4">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/pastLaunches">Past Launches</Link>
          </ul>
        </nav>
        <h2 className="h1">PastLaunches</h2>
        <Launches size={20} />
      </div>
    );
  }
