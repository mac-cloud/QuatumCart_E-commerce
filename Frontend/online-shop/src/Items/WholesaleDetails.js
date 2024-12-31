import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import wholesale2 from '../Images/wholesale2.jpeg';
import wholesale3 from '../Images/wholesale3.jpeg';
import wholesale4 from '../Images/wholesale4.jpeg';
import wholesale5 from '../Images/wholesale5.jpeg';
import wholesale6 from '../Images/wholesale6.jpeg';
import wholesale7 from '../Images/wholesale7.jpeg';
import wholesale8 from '../Images/wholesale8.jpeg';
import wholesale9 from '../Images/wholesale9.jpeg';
import wholesale10 from '../Images/wholesale10.jpeg';
import wholesale11 from '../Images/wholesale11.jpeg'
import wholesale12 from '../Images/wholesale12.jpeg'
const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  wholesale3  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: wholesale6  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  wholesale8  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: wholesale4  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  wholesale12  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: wholesale8  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: wholesale4  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: wholesale12  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: wholesale6  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: wholesale9  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: wholesale7  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: wholesale11  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: wholesale5 },
    { id: 2, name: 'iPhone 14', price: '$799', image: wholesale2 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: wholesale10 },
    { id: 4, name: 'iPhone 14', price: '$799', image: wholesale4 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: wholesale5 },
    { id: 6, name: 'iPhone 14', price: '$799', image: wholesale7 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: wholesale2 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: wholesale9 },
    { id: 3, name: 'Nokia G50', price: '$250', image: wholesale12 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: wholesale4 },
    { id: 5, name: 'Nokia G50', price: '$250', image: wholesale8 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: wholesale3 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: wholesale12 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: wholesale6 },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: wholesale8 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: wholesale4 },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: wholesale9 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: wholesale5 },
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
