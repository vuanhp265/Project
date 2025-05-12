import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [location, setLocation] = useState('Hanoi, Vietnam');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };
      setCurrentDateTime(now.toLocaleDateString('en-US', options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    //get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {

          //reverse to get city name 
          setLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Long: ${position.coords.longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Hanoi, Vietnam');
        }
      );
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary mb-3">Star IELTS Classes</h5>
            <p>
              Specializing in comprehensive IELTS preparation with proven results. 
              Our expert instructors and tailored curriculum help students achieve their desired band scores.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-2"><FaFacebook size={20} /></a>
              <a href="https://youtube.com" className="text-white me-2"><FaYoutube size={20} /></a>
              <a href="https://instagram.com" className="text-white"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-primary mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/courses" className="text-white">Courses</a></li>
              <li><a href="/Instructors" className="text-white">Instructors</a></li>
              <li><a href="/SuccessStories1" className="text-white">Success Stories</a></li>
              <li><a href="#contact-us" className="text-white">Contact Us</a></li>
              <li><a href="/PrivacyPolicy" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-primary mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-primary" />
                101 Lang Ha Street, Dong Da, Hanoi
              </li>
              <li className="mb-2">
                <FaPhone className="me-2 text-primary" />
                <a href="tel:+84123456789" className="text-white">+84 123 456 789</a>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <a href="mailto:ielts@starclasses.com" className="text-white">ielts@starclasses.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="text-primary mb-3">IELTS Tips Newsletter</h5>
            <form>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Time */}
        <div className="border-top pt-3 mt-2">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <small>
                &copy; {new Date().getFullYear()} Star IELTS Classes. All rights reserved.
              </small>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <small>
                {currentDateTime} | {location}
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;