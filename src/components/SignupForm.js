import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // For navigation
import './SignupForm.css';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signed up with:', { name, email, password });
    // Add your signup logic here
    navigate('/dashboard'); // Navigate to Dashboard
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
