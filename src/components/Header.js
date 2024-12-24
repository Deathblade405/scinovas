import React, { useState } from 'react';
import './Header.css';
import scinovasLogo from '../assets/scinovas.png'; // Corrected import path for logo
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/'; // Check if on the Login page

  const isSuperAdmin = location.state?.isSuperAdmin || false; // Assuming isSuperAdmin is passed

  const handleLogout = () => {
    setShowLogoutModal(true); // Show the logout confirmation modal
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/'); // Navigate back to login page after logging out
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Close the modal if canceled
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={scinovasLogo} alt="Scinova Scientifics Logo" className="logo-img" />
          <h1>Scinova Scientifics - Science as a Service</h1>
        </div>

        {/* Conditionally render logout button if not on LoginForm */}
        {!isLoginPage && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </header>

      {/* Custom Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button onClick={confirmLogout} className="modal-button">Yes</button>
              <button onClick={cancelLogout} className="modal-button">No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
