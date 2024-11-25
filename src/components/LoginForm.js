import React, { useState } from 'react';
import { FaUserAlt, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // For navigation
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState(''); // Use state for username
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [error, setError] = useState(''); // For error messages
  const navigate = useNavigate(); // Initialize navigate

  // Validate the form
  const validateForm = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return false;
    }

    // Username validation (example: minimum 3 characters)
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    setError(''); // Clear error if validation passes
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Only proceed if the form is valid

    console.log('Logged in with:', username, password);
    
    // Your login logic here, if successful:
    navigate('/dashboard'); // Navigate to Dashboard after login
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const goToSignup = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}

        <label>Username:</label>
        <div className="input-group">
          <FaUserAlt className="input-icon" /> {/* Add user icon */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>

        <label>Password:</label>
        <div className="input-group">
          <FaLock className="input-icon" /> {/* Add lock icon */}
          <input
            type={showPassword ? 'text' : 'password'} // Toggle password type
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <span onClick={togglePasswordVisibility} className="eye-icon">
            {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Toggle eye icon */}
          </span>
        </div>

        <button type="submit">Login</button>
        <button type="button" onClick={goToSignup} className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
