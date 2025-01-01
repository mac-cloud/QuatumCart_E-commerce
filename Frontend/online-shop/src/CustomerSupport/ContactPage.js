import React, { useState } from "react";
import "../Static/Styles.css";
import axios from "axios";
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic 

     try {
      const response = await axios.post("http://127.0.0.1:8000/contact/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(response.data.message);
      setFormData({name: "", email: "", message: ""});
     } catch (error) {
      console.error("Therre was an error sending tha contact form :", error)
      alert("Something went wrong please try again later.")
     }

 
  };

  return (
    <div>
    <div className="contact-container">
        < LandingPage />
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="contact-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact-input"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
            />
          </div>
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </div>
      
    </div>
    < FooterPage />
    </div>
  );
};

export default ContactPage;
