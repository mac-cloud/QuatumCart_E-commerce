import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';

const PhoneShop = () => {
  const [productData, setProductData] = useState(null); // State to store products data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch product data from backend
    const fetchProductData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/wholesale/'); // Your backend API URL
        console.log(response.data); // Log the response to verify structure
        setProductData(response.data); // Store data in state
      } catch (error) {
        setError('Failed to fetch products');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData(); // Trigger API call
  }, []); // Empty dependency array to fetch data only once

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error if fetching data fails
  }

  return (
    <div>
      <LandingPage />
      <div className="phone-shop">
        <h1>Our Wholesale Collection</h1>
        <div className="phone-list">
          {/* Iterate over products in the 'wholesale' category */}
          {productData.map((product) => (
            <div key={product.id} className="phone-item">
              <img
                src={`http://127.0.0.1:8000${product.image || '/default-image.jpg'}`}
                alt={product.name}
                className="phone-image"
              />
              <div className="phone-info">
                <h3>{product.name}</h3>
                <p>Brand: {product.brand}</p>
                <h3>Price: {product.price}</h3>
                <p>{product.description}</p>
                <p
                  style={{
                    color: product.stock_status === 'In Stock' ? 'green' : 'red',
                    fontWeight: 'bold',
                  }}
                >
                  {product.stock_status}
                </p>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default PhoneShop;
