import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [location, setLocation] = useState('Hanoi, Vietnam');
  const [email, setEmail] = useState('');

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

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Long: ${position.coords.longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Hanoi, Vietnam');
        }
      );
    }

    return () => clearInterval(intervalId);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      // Simulate subscription (replace with actual API call if needed)
      alert(`Subscribed with ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* Left Column: Star IELTS Classes, Quick Links */}
          <div className="col-md-4 mb-4">
            {/* Star IELTS Classes */}
            <div className="mb-4">
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
            <div className="col-md-12 mb-4">
              <h5 className="text-primary mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/courses" className="text-white">Courses</a></li>
                <li><a href="/Instructors" className="text-white">Instructors</a></li>
                <li><a href="/SuccessStories1" className="text-white">Success Stories</a></li>
                <li><a href="/contact" className="text-white">Contact Us</a></li>
                <li><a href="/PrivacyPolicy" className="text-white">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Middle Column: Contact Us, Newsletter */}
          <div className="col-md-4 mb-4">
            {/* Contact Info */}
            <div className="mb-4">
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
            <div className="mb-4">
              <h5 className="text-primary mb-3">IELTS Tips Newsletter</h5>
              <div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="col-md-4 mb-4">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.506207845139!2d105.82306361504302!3d21.01219598599861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7b9b1f5d67%3A0x1b3b8b1f1c7e7b7!2s101%20L%C3%A1ng%20H%E1%BA%A1%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Star IELTS Classes Location"
                className="map-iframe"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/101+L%C3%A1ng+H%E1%BA%A1,+L%C3%A1ng+H%E1%BA%A1,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vietnam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mt-2 d-block text-center"
              >
                View in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Time */}
        <div className="border-top pt-3 mt-2">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <small>
                © {new Date().getFullYear()} Star IELTS Classes. All rights reserved.
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