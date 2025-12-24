
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="octofit-logo me-2" />
            <span className="fw-bold fs-3">Octofit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities"><i className="bi bi-list-task"></i> Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard"><i className="bi bi-trophy"></i> Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams"><i className="bi bi-people"></i> Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users"><i className="bi bi-person"></i> Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts"><i className="bi bi-heart-pulse"></i> Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center mt-5"><h1 className="display-4 fw-bold">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
