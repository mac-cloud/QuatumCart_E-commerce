import React from "react";
import { Link } from 'react-router-dom';
import "../Static/Styles.css";
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
const SignInPage = () => {
  return (
    <div>
    <div className="signin-container">
      < LandingPage />
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form">
          <div className="input-group">
            <label htmlFor="email" className="signin-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signin-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="signin-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="signin-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
          <p className="signin-footer">
            Don't have an account?<Link to="/signup"> <a href="/signup" className="signin-link">Sign Up</a> </Link>
          </p>
        </form>
      </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default SignInPage;
