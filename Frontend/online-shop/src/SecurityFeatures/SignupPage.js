import React, { useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../Static/Styles.css";
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';

const SignUpPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

   const navigate = useNavigate ();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData ({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
      });
      if (response.data.status === "success") {
      alert(response.data.message);
      setFormData({ name: "", email: "", password: ""});
      navigate("/signin");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div>
    <div className="signup-container">
        < LandingPage />
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="signup-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="signup-input"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
