import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../ForgotPasswordPage/ForgotPasswordPage.css';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      setEmail(e.target.value);
      setError('');
      setMessage('');
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // **Feature: Call forgot password API (mock)**
      try {
        const response = await fetch('/api/forgot-password', { // Replace with your actual API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage(data.message || 'Password reset request sent. Please check your email.');
          setError('');
        } else {
          setError(data.message || 'Account not found with this email. Please try again.');
          setMessage('');
        }
      } catch (error) {
        console.error('Error sending password reset request:', error);
        setError('An error occurred. Please try again later.');
        setMessage('');
      }
    };
  
    return (
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <p className="instructions">
          Enter the email address associated with your account, and we'll send instructions to reset your password.
        </p>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="reset-button">Send Reset Request</button>
        </form>
        <p className="back-to-login">
          <Link to="/LoginPage">Back to login</Link>
        </p>
      </div>
    );
  }
  
  export default ForgotPasswordPage;