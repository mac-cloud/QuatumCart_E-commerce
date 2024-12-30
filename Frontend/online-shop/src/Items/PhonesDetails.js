import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import iphone1 from '../Images/iphone1.jpeg';
import infinix1 from '../Images/infinix1.jpeg';
import samsung from '../Images/samsung.jpeg';
import nokia1 from  '../Images/nokia1.jpeg';
import nokia2 from '../Images/nokia2.jpeg';
import techno1 from '../Images/techno1.jpeg';
import techno2 from  '../Images/techno2.jpeg';
const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  infinix1  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: infinix1  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  infinix1  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: infinix1  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  infinix1  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: infinix1  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: samsung  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: samsung  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: samsung  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: samsung  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: samsung  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: samsung  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: iphone1 },
    { id: 2, name: 'iPhone 14', price: '$799', image: iphone1 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: iphone1 },
    { id: 4, name: 'iPhone 14', price: '$799', image: iphone1 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: iphone1 },
    { id: 6, name: 'iPhone 14', price: '$799', image: iphone1 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: nokia1 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: nokia2 },
    { id: 3, name: 'Nokia G50', price: '$250', image: nokia1 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: nokia2 },
    { id: 5, name: 'Nokia G50', price: '$250', image: nokia1 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: nokia2 },
  ],
  techno: [
    { id: 1, name: 'Techno Phantom X2', price: '38,000 ksh', image: techno1},
    { id: 2, name: 'Techno Spark 8', price: '24,000 ksh', image: techno2 },
    { id: 3, name: 'Techno Phantom X2', price: '38,000 ksh', image: techno1},
    { id: 4, name: 'Techno Spark 8', price: '24,000 ksh', image: techno2 },
    { id: 5, name: 'Techno Phantom X2', price: '38,000 ksh', image: techno1},
    { id: 6, name: 'Techno Spark 8', price: '24,000 ksh', image: techno2 },
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
