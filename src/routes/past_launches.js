import { Link } from "react-router-dom";

export default function PastLaunches() {
    return (
      <main className="App-header">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/pastLaunches">Past Launches</Link>
      </nav>
        <h2 className="h2">PastLaunches</h2>
      </main>
    );
  }
