import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/LoginPage.css'; // Import file CSS tùy chỉnh (tùy chọn)

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setError(''); // Clear error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **Feature 1: Client-side validation (simple example)**
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // **Feature 2: Call login API (mock)**
    try {
      const response = await fetch('/api/login', { // Replace '/api/login' with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // **Feature 3: Handle successful login**
        console.log('Login successful!', data);
        localStorage.setItem('authToken', data.token); // Store token (if any)
        navigate('/dashboard'); // **Feature 4: Navigation after login**
      } else {
        // **Feature 5: Handle login error from API**
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      // **Feature 6: Handle network error or unknown error**
      console.error('Login error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit" className="login-button">Login</button>

        {/* **Feature 7: Link to registration page (optional)** */}
        <p className="signup-link">
          Don't have an account? <a href="/RegisterPage">Sign up</a>
        </p>

        {/* **Feature 8: Link to forgot password page (optional)** */}
        <p className="forgot-password">
          <a href="/ForgotPasswordPage">Forgot password?</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;