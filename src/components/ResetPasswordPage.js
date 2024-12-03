import React, { useState } from 'react';
import './ResetPasswordPage.css';
function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    // Simulate password reset logic
    setMessage('Your password has been successfully reset!');
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm new password"
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default ResetPasswordPage;
