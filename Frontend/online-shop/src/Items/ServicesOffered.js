import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/services/');
        console.log(response.data); // Debug API response
        setServices(response.data);
      } catch (err) {
        setError('Failed to load services');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="services-container">
        <LandingPage />
        <h1 className="services-title">Our Services</h1>
        <div className="services-list">
          {services.map((serviceCategory) => (
            <div key={serviceCategory.id} className="service-category">
            <img
              src={`http://127.0.0.1:8000${serviceCategory.service_image || '/default-image.jpg'}`}
              alt={serviceCategory.name || 'Service'}
            />
            <h2 className="service-category-title">
              {serviceCategory.name || 'No Name Available'}
            </h2>
            <p>
              {serviceCategory.description
                ? serviceCategory.description.split('\r\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))
                : 'No Description Available'}
            </p>
          </div>
          ))}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ServicesPage;
