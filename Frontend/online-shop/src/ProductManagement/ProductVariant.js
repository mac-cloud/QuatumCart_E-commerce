import React from 'react';
import { Link } from 'react-router-dom';
import '../Static/Styles.css';
import phones2 from '../Images/phones2.jpeg';
import audio2 from '../Images/audio2.jpeg';
import office from '../Images/office.jpg';
import laptop1 from '../Images/laptop1.jpg';
import cables1 from '../Images/cables1.jpg';
import bulbs from '../Images/bulbs.jpeg';
const ProductVariant = () => {
    return (
        <div className="product-sell">
          <div className="product-header">
            <h5>Top Selling Products</h5>
          </div>
          
          <div className="product-images">
            <div className="product-item">
              <Link to="/phones">
              <img src={phones2} alt="phones" />
              <p>Smartphones</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="audio">
              <img src={audio2} alt="audio" />
              <p>Audio Equipment</p>
              </Link>
            </div>
            <div className="product-item">
              <img src={office} alt="office" />
              <p>Office Supplies</p>
            </div>
            <div className="product-item">
              <Link to="/computer">
              <img src={laptop1} alt="headphones" />
              <p>Laptops</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/cable">
              <img src={cables1} alt="cables" />
              <p>Cables</p>
              </Link>
            </div>
            <div className="product-item">
              <Link to="/bulbs">
              <img src={bulbs} alt="bulbs" />
              <p>Light Bulbs</p>
              </Link>
            </div>
          </div>
        </div>
      );

}
export default ProductVariant;