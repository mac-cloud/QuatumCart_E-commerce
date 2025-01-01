import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Static/Styles.css";
import LandingPage from "../Header/LandingPage";
import FooterPage from "../Header/FooterPage";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Use React Router to navigate after login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.status === "success") {
        alert(response.data.message);
        setFormData({ email: "", password: "" });
        navigate("/"); // Navigate to a protected dashboard after login
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="signin-container">
        <LandingPage />
        <div className="signin-box">
          <h2 className="signin-title">Sign In</h2>
          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email" className="signin-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="signin-input"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                className="signin-input"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="signin-button">Sign In</button>
            <p className="signin-footer">
              Don't have an account?
              <Link to="/signup" className="signin-link"> Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default SignInPage;
