import React, { useState } from 'react';
import { FaUserAlt, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // For navigation
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const navigate = useNavigate(); // Initialize navigate
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with:', email, password);
    
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
        <label>Email:</label>
        <div className="input-group">
          <FaUserAlt className="input-icon" /> {/* Add user icon */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label>Password:</label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle password type
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
