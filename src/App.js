import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ClassDetail from './components/ClassDetail';
import ClassDetailone from './components/ClassDetailone';
import Level0Table from './components/Level0Table';
import Level1Table from './components/Level1Table';
import CourseTable from './components/Coursetable';
import AboutUs from './components/AboutUs'; // 👉 Bạn cần tạo thêm component này

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Lịch Khai Giảng</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Tất cả các lớp</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={
              <>
                <Level0Table />
                <Level1Table />
              </>
            } />
            <Route path="/class/:id" element={<ClassDetail />} />
            <Route path="/class1/:id" element={<ClassDetailone />} />
            <Route path="/courses" element={<CourseTable />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
