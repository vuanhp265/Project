import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaFacebookF, FaYoutube, FaUser, FaSearch } from 'react-icons/fa';
import logo from './ielts_logo.png'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">
                  IELTS Courses
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/ielts-foundation">IELTS Foundation</Link>
                  <Link className="dropdown-item" to="/ielts-intermediate">IELTS Intermediate</Link>
                  <Link className="dropdown-item" to="/ielts-advanced">IELTS Advanced</Link>
                  <Link className="dropdown-item" to="/ielts-crash-course">IELTS Crash Course</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ielts-mock-test">Ielts Mock Test</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ielts-materials">IELTS Materials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ielts-blog">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="d-flex align-items-center">
              <div className="search-box me-3">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link to="/login" className="btn btn-outline-primary me-2">
                <FaUser className="me-1" /> Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;