import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import  computer8 from '../Images/computer8.jpeg';
import  computer7 from '../Images/computer7.jpeg';
import  computer3 from '../Images/computer3.jpeg';
import  computer4 from '../Images/computer4.jpeg';
import  computer5 from '../Images/computer5.jpeg';
import  computer6 from '../Images/computer6.jpeg';

const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  computer8  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: computer8  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  computer8  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: computer8  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  computer8  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: computer8  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: computer7  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: computer7  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: computer7  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: computer7  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: computer7  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: computer7  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: computer3 },
    { id: 2, name: 'iPhone 14', price: '$799', image: computer3 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: computer3 },
    { id: 4, name: 'iPhone 14', price: '$799', image: computer3 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: computer3 },
    { id: 6, name: 'iPhone 14', price: '$799', image: computer3 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: computer4 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: computer4 },
    { id: 3, name: 'Nokia G50', price: '$250', image: computer4 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: computer4 },
    { id: 5, name: 'Nokia G50', price: '$250', image: computer4 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: computer4 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: computer5 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: computer5  },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: computer5 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: computer5  },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: computer5 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: computer5  },
  ],
  HP_Laptops: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: computer6 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: computer6  },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: computer6 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: computer6  },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: computer6 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: computer6  },
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
