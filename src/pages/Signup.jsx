import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created Successfully! Now please login.");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-form-container">
          <div className="form-header">
            <h3>Join Shopcart</h3>
            <p>Create your account in seconds</p>
          </div>
          <form onSubmit={handleSignup} className="login-form">
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper"><FiUser className="input-icon" /><input type="text" placeholder="John Doe" required /></div>
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper"><FiMail className="input-icon" /><input type="email" placeholder="john@example.com" required /></div>
            </div>
            <div className="input-group">
              <label>Create Password</label>
              <div className="input-wrapper"><FiLock className="input-icon" /><input type="password" placeholder="••••••••" required /></div>
            </div>
            <button type="submit" className="login-btn">CREATE ACCOUNT <FiArrowRight className="btn-arrow" /></button>
          </form>
          <div className="form-footer">
            <p>Already have an account? <Link to="/login" className="create-acc">Login Here</Link></p>
          </div>
        </div>
        {/* Same branding side as Login or keep it simple */}
      </div>
    </div>
  );
}