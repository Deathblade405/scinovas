import React, { useState } from 'react';
import { FaUserAlt, FaEye, FaEyeSlash, FaLock, FaRegWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ username: '', password: '' });
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);  // State to track if the user is superadmin
  const navigate = useNavigate();

  const SUPERADMIN_USERNAME = 'padmaraj';
  const SUPERADMIN_PASSWORD = 'padmaraj@2024';

  const validateForm = () => {
    let isValid = true;
    const newError = { username: '', password: '' };

    if (username === '') {
      newError.username = 'Username cannot be empty.';
      isValid = false;
    } else if (username.length < 3) {
      newError.username = 'Username must be at least 3 characters long.';
      isValid = false;
    }

    if (password === '') {
      newError.password = 'Password cannot be empty.';
      isValid = false;
    } else if (password.length < 6) {
      newError.password = 'Password must be at least 6 characters long.';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === SUPERADMIN_USERNAME && password === SUPERADMIN_PASSWORD) {
      // SuperAdmin login
      console.log('SuperAdmin logged in!');
      setIsSuperAdmin(true); // Set the superadmin flag to true
      navigate('/Dashboard', { state: { isSuperAdmin: true } });  // Pass superadmin flag to Dashboard
      return;
    }

    if (!validateForm()) return;

    // Normal user login
    console.log('Logged in with:', username, password);
    setIsSuperAdmin(false); // Set the superadmin flag to false
    navigate('/dashboard', { state: { isSuperAdmin: false } });  // Pass normal user flag to Dashboard
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Redirect to the Forgot Password page
  };

  const handleResetPassword = () => {
    navigate('/reset-password'); // Redirect to the Reset Password page
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setError({ username: '', password: '' });
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        </div>

        <div className="horizontal-links">
          <span onClick={handleForgotPassword} className="link">
            Forgot Password?
          </span>
          <span onClick={handleResetPassword} className="link">
            Reset Password
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
