import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import  tv1 from '../Images/tv1.jpeg';
import  tv2 from '../Images/tv2.jpeg';
import  tv3 from '../Images/tv3.jpeg';
import  tv4 from '../Images/tv4.jpeg';
import tv5 from '../Images/tv5.jpeg';
import  tv6 from '../Images/tv6.jpeg';

const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  tv1  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: tv1  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  tv1  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: tv1  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  tv1  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: tv1  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: tv2  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: tv2  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: tv2  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: tv2  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: tv2  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: tv2  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: tv5 },
    { id: 2, name: 'iPhone 14', price: '$799', image: tv5 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: tv6 },
    { id: 4, name: 'iPhone 14', price: '$799', image: tv6 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: tv5 },
    { id: 6, name: 'iPhone 14', price: '$799', image: tv6 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: tv3 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: tv3 },
    { id: 3, name: 'Nokia G50', price: '$250', image: tv3 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: tv3 },
    { id: 5, name: 'Nokia G50', price: '$250', image: tv3 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: tv3 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: tv4},
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: tv4 },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: tv4},
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: tv4 },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: tv4},
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: tv4 },
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
