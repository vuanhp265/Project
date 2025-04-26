import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Level0Table from '../components/Schedule/Level0Table';
import Level1Table from '../components/Schedule/Level1Table';
import ClassDetail from '../components/Schedule/ClassDetail';
import ClassDetailone from '../components/Schedule/ClassDetailone';

function SchedulePage() {
  return (
    <div className="schedule-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/schedule">Class Schedule</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule/level0">Level 0 Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule/level1">Level 1 Classes</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route index element={<><Level0Table /><Level1Table /></>} />
          <Route path="class/:id" element={<ClassDetail />} />
          <Route path="class1/:id" element={<ClassDetailone />} />
          <Route path="level0" element={<Level0Table />} />
          <Route path="level1" element={<Level1Table />} />
        </Routes>
      </div>
    </div>
  );
}

export default SchedulePage;