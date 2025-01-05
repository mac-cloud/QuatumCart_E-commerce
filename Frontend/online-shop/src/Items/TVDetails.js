import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        const response = await axios.get('http://127.0.0.1:8000/phones/'); // Your backend API URL
        console.log(response.data); // Log the response to verify structure
        setProductData(response.data.categories); // Store data in state
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

  // Ensure data exists and filter by "Televisions"
  const televisionsCategory = productData.find(
    (category) =>
      category.category_name.toLowerCase() === 'televisions'.toLowerCase()
  );

  if (!televisionsCategory || televisionsCategory.products.length === 0) {
    return <div>No televisions available</div>; // Handle case where no televisions are found
  }

  return (
    <div>
      <LandingPage />
      <div className="phone-shop">
        <h1>Our Television Collection</h1>

        <div className="category-container">
          {/* Display Televisions category */}
          <div key={televisionsCategory.category_name} className="category">
            <h2>{televisionsCategory.category_name}</h2>
            <p>{televisionsCategory.category_description}</p>
            <div className="phone-list">
              {/* Iterate over products in the 'Televisions' category */}
              {televisionsCategory.products.map((product) => (
                <div key={product.id} className="phone-item">
                  <img
                    src={`http://127.0.0.1:8000${product.image}`}
                    alt={product.name}
                    className="phone-image"
                  />
                  <div className="phone-info">
                    <h3>{product.name}</h3>
                    <p>Brand: {product.brand}</p>
                    <p>Price: {product.price}</p>
                    <p>{product.description}</p>
                    <p
                      style={{
                        color: product.stock_status === 'In Stock' ? 'green' : 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {product.stock_status}
                    </p>
                    {/* Link to payment page with item_id */}
                    <Link to={`/mpesapayment/${product.item_id}`}>
                      <button className="buy-btn">Buy Now</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default PhoneShop;
