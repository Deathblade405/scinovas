import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dash from './components/Dash'; // Import the Dash component (formerly Dashboard)
import InfoSection from './components/InfoSection';
import Admins from './components/Admins';
import CorAdmin from './components/CorAdmin'; // Import the Admins component
import ForgotPasswordPage from './components/ForgotPasswordPage'; // Import Forgot Password Page
import ResetPasswordPage from './components/ResetPasswordPage'; // Import Reset Password Page
import './App.css';
import './components/Responsive.css';

function App() {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);  // State to track if the user is superadmin

  return (
    <Router>
      {/* Pass isSuperAdmin state to Header to manage logout button visibility */}
      <Header isSuperAdmin={isSuperAdmin} />

      <Routes>
        {/* Route for Login Form */}
        <Route
          path="/"
          element={
            <div className="main-content">
              <InfoSection /> {/* Info Section */}
              <LoginForm setIsSuperAdmin={setIsSuperAdmin} /> {/* Pass setIsSuperAdmin to LoginForm */}
            </div>
          }
        />

        {/* Route for Signup Form */}
        <Route
          path="/signup"
          element={
            <div className="main-content">
              <InfoSection /> {/* Info Section */}
              <SignupForm />  {/* Signup Form */}
            </div>
          }
        />

        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dash isSuperAdmin={isSuperAdmin} />} /> {/* Pass isSuperAdmin to Dash */}

        {/* Route for Admins */}
        <Route path="/admins" element={<Admins />} /> {/* New route for Admins component */}
        <Route path="/admin" element={<CorAdmin />} /> {/* Updated route for CorAdmin */}

        {/* Route for Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Forgot Password Page */}

        {/* Route for Reset Password */}
        <Route path="/reset-password" element={<ResetPasswordPage />} /> {/* Reset Password Page */}
      </Routes>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
}

export default App;
