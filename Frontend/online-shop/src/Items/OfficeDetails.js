import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import office2 from '../Images/office2.jpeg';
import office3 from '../Images/office3.jpeg';
import office4 from '../Images/office4.jpeg';
import office5 from  '../Images/office5.jpeg';
import office6 from '../Images/office6.jpeg';
import office7 from '../Images/office7.jpeg';
import office8 from  '../Images/office8.jpeg';
import office9 from '../Images/office9.jpeg';
import office10 from '../Images/office10.jpeg';
const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  office2 },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: office3 },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  office5 },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: office7 },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  office9 },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: office5 },
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  office2 },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: office3 },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  office5 },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: office7 },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  office9 },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: office5 },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: office4  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: office2  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: office5  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: office9  },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: office10  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: office3  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: office3 },
    { id: 2, name: 'iPhone 14', price: '$799', image: office6 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: office4 },
    { id: 4, name: 'iPhone 14', price: '$799', image: office7 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: office8 },
    { id: 6, name: 'iPhone 14', price: '$799', image: office10 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: office3 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: office5 },
    { id: 3, name: 'Nokia G50', price: '$250', image: office9 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: office2 },
    { id: 5, name: 'Nokia G50', price: '$250', image: office8 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: office10 },
  ],
  techno: [
    { id: 1, name: 'Techno Phantom X2', price: '38,000 ksh', image: office3},
    { id: 2, name: 'Techno Spark 8', price: '24,000 ksh', image: office6 },
    { id: 3, name: 'Techno Phantom X2', price: '38,000 ksh', image: office5},
    { id: 4, name: 'Techno Spark 8', price: '24,000 ksh', image: office8 },
    { id: 5, name: 'Techno Phantom X2', price: '38,000 ksh', image: office9},
    { id: 6, name: 'Techno Spark 8', price: '24,000 ksh', image: office4 },
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
