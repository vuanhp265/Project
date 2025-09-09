import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../RegisterPage/RegisterPage.css'; // Import file CSS tùy chỉnh (tùy chọn)

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
    setError(''); // Clear error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **Feature 1: Client-side validation**
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // **Feature 2: Call registration API (mock)**
    try {
      const response = await fetch('/api/register', { // Replace '/api/register' with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // **Feature 3: Handle successful registration**
        console.log('Registration successful!', data);
        // You might redirect the user to the login page or show a success message
        navigate('/login'); // **Feature 4: Navigation after registration (optional)**
      } else {
        // **Feature 5: Handle registration error from API**
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      // **Feature 6: Handle network error or unknown error**
      console.error('Registration error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Sign Up</button>

        {/* **Feature 7: Link to login page** */}
        <p className="login-link">
          Already have an account? <a href="/LoginPage">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;