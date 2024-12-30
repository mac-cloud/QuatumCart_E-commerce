import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import  headphone2 from '../Images/headphone2.jpeg';
import  headphone4 from '../Images/headphone4.webp';
import  headphone5 from '../Images/headphone5.webp';
import  headphone6 from '../Images/headphone6.webp';

const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  headphone2  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: headphone2  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  headphone2  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: headphone2  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  headphone2  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: headphone2  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: headphone4  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: headphone4  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: headphone4  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: headphone4  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: headphone4  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: headphone4  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: headphone6 },
    { id: 2, name: 'iPhone 14', price: '$799', image: headphone6 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: headphone6 },
    { id: 4, name: 'iPhone 14', price: '$799', image: headphone6 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: headphone6 },
    { id: 6, name: 'iPhone 14', price: '$799', image: headphone6 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: headphone5 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: headphone5 },
    { id: 3, name: 'Nokia G50', price: '$250', image: headphone5 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: headphone5 },
    { id: 5, name: 'Nokia G50', price: '$250', image: headphone5 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: headphone5 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: headphone4 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: headphone4  },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: headphone4 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: headphone4  },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: headphone4 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: headphone4  },
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
