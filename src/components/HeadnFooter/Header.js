import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaFacebookF, FaYoutube, FaUser, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './ielts_logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simulating visitor count, it can be updated based on a real backend or API
  useEffect(() => {
    const currentCount = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem('visitorCount', newCount);  // Save updated count in localStorage
    setVisitorCount(newCount);
  }, []);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar bg-primary text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaPhone className="me-2" />
            <span className="me-3">Hotline: 098.123.4567</span>
            <span>Email: ielts@starclasses.com</span>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" className="text-white me-2"><FaFacebookF /></a>
            <a href="https://youtube.com" className="text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Visitor Count */}
      <div className="visitor-count position-absolute top-0 end-0 p-2 bg-light">
        <span>Visitor Count: {visitorCount}</span>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Star IELTS Logo" height="50" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Main Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Information</a>
                  <ul className="dropdown-menu">
                    <Link className="nav-link" to="/SchedulePage">Schedule</Link>
                    <Link className="nav-link" to="/information">Recruitment</Link>
                  </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="d-flex align-items-center">
              <div className="search-box me-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link to="/LoginPage" className="btn btn-outline-primary me-2">
                <FaUser className="me-1" /> Login
              </Link>
              <Link to="/RegisterPage" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
