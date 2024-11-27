import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaEye, FaEyeSlash, FaLock, FaRegWindowClose } from 'react-icons/fa'; // Changed icon here
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;
    const newError = { username: '', password: '' };

    // Username validation
    if (username === '') {
      newError.username = ''; // Clear error if username is empty
    } else if (username.length < 3) {
      newError.username = 'Username must be at least 3 characters long.';
      isValid = false;
    }

    // Password validation
    if (password === '') {
      newError.password = ''; // Clear error if password is empty
    } else if (password.length < 6) {
      newError.password = 'Password must be at least 6 characters long.';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  // Trigger validation on form submit
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Logged in with:', username, password);
    navigate('/dashboard');
  };

  // Handle toggle for password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  // Effect to re-validate the form when username or password changes
  useEffect(() => {
    validateForm(); // Re-validate form whenever the username or password changes
  }, [username, password]);

  // Reset the form fields
  const handleReset = () => {
    setUsername('');
    setPassword('');
    setError({ username: '', password: '' }); // Clear any validation errors
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Display username validation error */}
        {error.username && <div className="error-message">{error.username}</div>}
        <label>Username</label>
        <div className="input-group">
          <FaUserAlt className="input-icon" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        {/* Display password validation error */}
        {error.password && <div className="error-message">{error.password}</div>}
        <label>Password</label>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <span onClick={togglePasswordVisibility} className="eye-icon">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <div className="form-buttons">
          <button type="submit">Login</button>
          {/* Reset icon updated to a different symbol (FaRegWindowClose) */}
          <FaRegWindowClose onClick={handleReset} className="reset-icon" />
        </div>

        {/* Links for additional actions */}
        <div className="horizontal-links">
          <span onClick={handleForgotPassword} className="link">
            Forgot Password?
          </span>
          <span onClick={handleResetPassword} className="link">
            Reset Password
          </span>
          <span onClick={goToSignup} className="link">
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
