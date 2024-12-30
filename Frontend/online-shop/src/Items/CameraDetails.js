import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import  camera1 from '../Images/camera1.jpeg';
import  camera2 from '../Images/camera2.jpeg';
import  camera3 from '../Images/camera3.jpeg';
import  camera4 from '../Images/camera4.jpeg';
import  camera5 from '../Images/camera5.jpeg'
import lens1 from '../Images/lens1.jpeg';
import lens2 from '../Images/lens2.jpeg';
import lens3 from '../Images/lens3.jpeg';
import lens4 from '../Images/lens4.jpeg';
import lens5 from '../Images/lens5.jpeg';
const phoneData = {
  infinix: [
    { id: 1, name: 'Infinix Zero 8', price: '$250', image:  camera1  },
    { id: 2, name: 'Infinix Note 10', price: '$220', image: camera2  },
    { id: 3, name: 'Infinix Zero 8', price: '$250', image:  lens1  },
    { id: 4, name: 'Infinix Note 10', price: '$220', image: camera3  },
    { id: 5, name: 'Infinix Zero 8', price: '$250', image:  camera4  },
    { id: 6, name: 'Infinix Note 10', price: '$220', image: camera5 },
  ],
  samsung: [
    { id: 1, name: 'Samsung Galaxy S23', price: '$999', image: camera2  },
    { id: 2, name: 'Samsung Galaxy A54', price: '$450', image: lens2  },
    { id: 3, name: 'Samsung Galaxy S23', price: '$999', image: camera2  },
    { id: 4, name: 'Samsung Galaxy A54', price: '$450', image: lens3 },
    { id: 5, name: 'Samsung Galaxy S23', price: '$999', image: camera2  },
    { id: 6, name: 'Samsung Galaxy A54', price: '$450', image: lens5  },
  ],
  iphone: [
    { id: 1, name: 'iPhone 15 Pro', price: '$1099', image: lens5 },
    { id: 2, name: 'iPhone 14', price: '$799', image: lens3 },
    { id: 3, name: 'iPhone 15 Pro', price: '$1099', image: lens1 },
    { id: 4, name: 'iPhone 14', price: '$799', image: camera2 },
    { id: 5, name: 'iPhone 15 Pro', price: '$1099', image: lens2 },
    { id: 6, name: 'iPhone 14', price: '$799', image: camera4 },
  ],
  nokia: [
    { id: 1, name: 'Nokia G50', price: '$250', image: camera3 },
    { id: 2, name: 'Nokia 5.4', price: '$180', image: camera3 },
    { id: 3, name: 'Nokia G50', price: '$250', image: camera3 },
    { id: 4, name: 'Nokia 5.4', price: '$180', image: lens4 },
    { id: 5, name: 'Nokia G50', price: '$250', image: camera3 },
    { id: 6, name: 'Nokia 5.4', price: '$180', image: camera3 },
  ],
  techno: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: camera4 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: camera4  },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: camera4 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: lens2  },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: camera4 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: camera4  },
  ],
  Cameras: [
    { id: 1, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: camera5 },
    { id: 2, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: camera5  },
    { id: 3, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: camera5 },
    { id: 4, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: camera5  },
    { id: 5, name: 'Samsung TV 55 inches', price: '38,000 ksh', image: camera5 },
    { id: 6, name: 'Samsung TV 55 inches', price: '24,000 ksh', image: camera5  },
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
