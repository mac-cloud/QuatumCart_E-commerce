import React from "react";
import "../Static/Styles.css";
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';

const SignUpPage = () => {
  return (
    <div>
    <div className="signup-container">
        < LandingPage />
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <div className="input-group">
            <label htmlFor="name" className="signup-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="signup-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="signup-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signup-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="signup-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="signup-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="signup-input"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <p className="signup-footer">
            Already have an account? <a href="/signin" className="signup-link">Sign In</a>
          </p>
        </form>
      </div>
    </div>
    < FooterPage />
    </div>
  );
};

export default SignUpPage;
