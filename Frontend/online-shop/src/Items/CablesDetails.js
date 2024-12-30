import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import phonecable1 from '../Images/phonecable1.jpeg';
import phonecable2 from '../Images/phonecable2.jpeg';
import phonecable3 from '../Images/phonecable3.jpeg';
import phonecable4 from '../Images/phonecable4.jpeg';
import phonecable5 from '../Images/phonecable5.jpeg';

const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  phonecable1  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: phonecable2  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  phonecable3  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: phonecable4  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  phonecable5  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: phonecable3  },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: phonecable2  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: phonecable1  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: phonecable3  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: phonecable5 },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: phonecable4  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: phonecable2  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: phonecable2 },
    { id: 2, name: 'iPhone 14', price: '$799', image: phonecable3 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: phonecable1 },
    { id: 4, name: 'iPhone 14', price: '$799', image: phonecable4 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: phonecable5 },
    { id: 6, name: 'iPhone 14', price: '$799', image: phonecable4 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: phonecable1 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: phonecable4 },
    { id: 3, name: 'Nokia G50', price: '$250', image: phonecable3 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: phonecable5 },
    { id: 5, name: 'Nokia G50', price: '$250', image: phonecable3 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: phonecable2 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: phonecable3 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: phonecable2 },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: phonecable3 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: phonecable5 },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: phonecable4 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: phonecable3 },
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
