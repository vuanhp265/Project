import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClassDetail from './components/ClassDetail';
import Level0Table from './components/Level0Table';
import Level1Table from './components/Level1Table';
import ClassDetailone from './components/ClassDetailone';
import CourseTable from './components/Coursetable';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Lịch Khai Giảng</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Tất cả các lớp</Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {/* Add other navigation links */}
          </ul>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Level0Table />} />
            <Route path="/class/:id" element={<ClassDetail/>} />
          </Routes>  
        </div>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Level1Table />} />
            <Route path="/class1/:id" element={<ClassDetailone/>} />
          </Routes>
          <Routes>
          <Route path="/about" element={<AboutUs />} />
          {/* Add other routes */}
          <Route path="/" element={<div>Home Page Content</div>} />
        </Routes>  
        </div>
      </div>
    </Router>
  );
}

export default App;