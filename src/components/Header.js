import React from 'react';
import './Header.css';
import scinovasLogo from '../assets/scinovas.png';  // Corrected import path for logo

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={scinovasLogo} alt="Scinova Scientifics Logo" className="logo-img" />
        <h1>Scinova Scientifics - Science as a Service</h1>
      </div>
    </header>
  );
}

export default Header;
