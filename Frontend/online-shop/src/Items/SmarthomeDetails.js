import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import  smart1 from '../Images/smart1.webp';
import  smart2 from '../Images/smart2.webp';
import  smart4 from '../Images/smart4.jpg';
import  smart5 from '../Images/smart5.jpg';
import  smart6 from '../Images/smart6.jpg';
import smart7 from  '../Images/smart7.jpg';

const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  smart1  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: smart2  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  smart4  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: smart2  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  smart2  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: smart5  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: smart6  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: smart4  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: smart5  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: smart4  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: smart7  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: smart4  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: smart1 },
    { id: 2, name: 'iPhone 14', price: '$799', image: smart5 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: smart7 },
    { id: 4, name: 'iPhone 14', price: '$799', image: smart2 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: smart1 },
    { id: 6, name: 'iPhone 14', price: '$799', image: smart4 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: smart7 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: smart4 },
    { id: 3, name: 'Nokia G50', price: '$250', image: smart6 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: smart7 },
    { id: 5, name: 'Nokia G50', price: '$250', image: smart2 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: smart7 },
  ],
 
  
};

const PhoneShop = () => {
  return (
    <div>
      <LandingPage />
      <div className="phone-shop">
        <h1>Our Phone Collection</h1>

        <div className="category-container">
          {Object.keys(phoneData).map((category) => (
            <div key={category} className="category">
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <div className="phone-list">
                {phoneData[category].map((phone) => (
                  <div key={phone.id} className="phone-item">
                    <img src={phone.image} alt={phone.name} className="phone-image" />
                    <div className="phone-info">
                      <h3>{phone.name}</h3>
                      <p>{phone.price}</p>
                      <button className="buy-btn">Buy Now</button>
                    </div>
                  </div>
                ))}
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
