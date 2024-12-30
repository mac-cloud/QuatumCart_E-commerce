import React from "react";
import { Link } from 'react-router-dom';
import '../Static/Styles.css';
import jumia1 from '../Images/jumia1.jpg';
import jumia2 from '../Images/jumia2.jpg';
import jumia3 from '../Images/jumia3.jpg';
import ProductListing from './ProductListing';
import ProductVariant from "./ProductVariant";
import FAQPage from '../CustomerSupport/FAQPage';
import FooterPage from '../Header/FooterPage';
import ProductNav from "./ProductNav";
import happy from '../Images/happy.jpeg';
import happy1 from '../Images/happy1.jpeg';
import phones from '../Images/phones.jpeg';
import service1 from '../Images/service1.png';
import wholesale from '../Images/wholesale.jpg';
import LandingPage from '../Header/LandingPage';
const Categories = () => {



     return (
        <div>
            <LandingPage />
    <div className="rectangle-container">
    <div className="rectangle" style={{ width: '260px' , height: '390px', left: '20px', borderRadius: '14px', top: '150px' }}>
     < ProductNav />
    </div>
    <div className="rectangle" style={{ width: '720px' , height: '390px',left: '310px', borderRadius: '14px', top: '150px' }}>
    <div className="image-container">
          <img src={jumia1} alt="Category 1" className="category-image" />
          <img src={jumia2} alt="Category 2" className="category-image" />
          <img src={jumia3} alt="Category 3" className="category-image" />
        </div>
    </div>
    <div className="rectangle" style={{ width: '260px' , height: '200px',left: '1060px', borderRadius: '14px', top: '150px' }}>
   <div className="image-nav">
    <img src={happy} alt="happy" />
    <img src={happy1} alt="happy1" />
   
   </div>
    </div>
    <div className="rectangle" style={{ width: '260px' , height: '170px',left: '1060px', backgroundColor: 'orange', top: '370px', borderRadius: '14px' }}>
    <div className="right-side">
                <p className="animated-text">Free Delivery to your doorstep</p>
                <p className="animated-text">Make Your Order and relax as we Delivery in minutes</p>
            </div>
    </div>
   
   
</div>
<div className="rectangle" style={{ width: '1300px' , height: '390px', borderRadius: '14px', top: '590px' }}>
<ProductListing />
</div>
<div className="rectangle" style={{ width: '1300px' , height: '390px', borderRadius: '14px', top: '1030px' }}>
<ProductVariant />
</div>
<div className="rectangle" style={{ width: '1300px' , height: '280px', borderRadius: '14px', backgroundColor: 'white', top: '1470px' }}>

    <div className="service-class">
   
  <div className="services-rectangle">
    <Link to="/phones">
    <p>view Phones</p>
    <img src={ phones} alt="phones" />
    </Link>
  </div> 

  <div className="services-rectangle">
  <p>view Services</p>
    <img src={ service1} alt="services" />
  </div>
 
  <div className="services-rectangle">
  <p>view Wholesale</p>
  <img src={ wholesale} alt="services" />
  </div>
  
  </div>
</div>

<div className="rectangle" style={{ width: '1300px' , height: '790px', borderRadius: '14px', top: '1780px' }}>
<FAQPage />
</div>

<div className="rectangle" style={{ backgroundColor: 'orange',width: '1300px' , height: '320px', borderRadius: '14px', top: '2600px' }}>
< FooterPage />
</div>
</div>
     );
};

export default Categories;