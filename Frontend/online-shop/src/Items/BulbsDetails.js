import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import bulb2 from '../Images/bulb2.jpeg';
import bulb3 from '../Images/bulb3.jpeg';
import bulb4 from '../Images/bulb4.jpeg';
import bulb5 from '../Images/bulb5.jpeg';
import bulb6 from '../Images/bulb6.jpeg';
import bulb7 from '../Images/bulb7.jpeg';
import bulb8 from '../Images/bulb8.jpeg';
import bulb9 from '../Images/bulb9.jpeg';
const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  bulb3  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: bulb6  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  bulb8  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: bulb4  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  bulb5  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: bulb6  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: bulb4  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: bulb4  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: bulb6  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: bulb9  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: bulb7  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: bulb3  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: bulb6 },
    { id: 2, name: 'iPhone 14', price: '$799', image: bulb2 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: bulb5 },
    { id: 4, name: 'iPhone 14', price: '$799', image: bulb4 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: bulb4 },
    { id: 6, name: 'iPhone 14', price: '$799', image: bulb8 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: bulb2 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: bulb9 },
    { id: 3, name: 'Nokia G50', price: '$250', image: bulb6 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: bulb4 },
    { id: 5, name: 'Nokia G50', price: '$250', image: bulb8 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: bulb3 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: bulb3},
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: bulb6 },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: bulb8},
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: bulb4 },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: bulb9},
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: bulb5 },
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
