import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import ethernet1 from '../Images/ethernet1.jpeg';
import ethernet2 from '../Images/ethernet2.jpeg';
import ethernet3 from '../Images/ethernet3.jpeg';
import ethernet4 from '../Images/ethernet4.jpeg';
import ethernet5 from '../Images/ethernet5.jpeg';
import ethernet6 from '../Images/ethernet6.jpeg';
import ethernet7 from '../Images/ethernet7.jpeg';
import ethernet8 from '../Images/ethernet8.jpeg';
import ethernet9 from '../Images/ethernet9.jpeg';
import ethernet10 from '../Images/ethernet10.jpeg';
const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  ethernet1  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: ethernet8  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  ethernet3  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: ethernet6  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  ethernet5  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: ethernet3  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: ethernet2  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: ethernet10  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: ethernet3  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: ethernet5 },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: ethernet7  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: ethernet2  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: ethernet2 },
    { id: 2, name: 'iPhone 14', price: '$799', image: ethernet3 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: ethernet10 },
    { id: 4, name: 'iPhone 14', price: '$799', image: ethernet4 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: ethernet8 },
    { id: 6, name: 'iPhone 14', price: '$799', image: ethernet6 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: ethernet10 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: ethernet4 },
    { id: 3, name: 'Nokia G50', price: '$250', image: ethernet9 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: ethernet5 },
    { id: 5, name: 'Nokia G50', price: '$250', image: ethernet3 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: ethernet2 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: ethernet3 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: ethernet2 },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: ethernet6 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: ethernet5 },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: ethernet4 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: ethernet7 },
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
