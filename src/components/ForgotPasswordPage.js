import React, { useState } from 'react';
import './ForgotPasswordPage.css';
function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    // Simulate sending a reset email
    setMessage(`A password reset link has been sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleSendEmail}>Send Reset Link</button>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default ForgotPasswordPage;
