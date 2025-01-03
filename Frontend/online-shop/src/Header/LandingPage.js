import React from 'react';
import '../Static/Styles.css';
import './Accountdropdown';
import Context from './Context';
import Accountdropdown from './Accountdropdown';
const Navbar = () => {

     return(

        <div className="home">
        <nav className='navbar'>  
        <div className="navbar-top">
            <div className="left-side">
                <p>HELLO it's December, shop with us</p>
                < Context />
            </div>
            <div className="right-side">
                <p className="animated-text">Free Delivery to your doorstep</p>
                <p className="animated-text">Contact us for arrangements: 03866286482</p>
            </div>
        </div>
       
         <div className="navbar-center">
            <div className='logo'>
                <a href="#home">Logo</a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Seach..." />
            </div>

            <div className="search-button">
            <button>Search</button>
            </div>
            <div className="navbar-actions">
                <Accountdropdown/>
                <a href="#cart"><i className="fa fa fa-shopping-cart"></i>Cart</a>
            </div>
            
         </div>
        </nav>


        </div>
     );
};

export default Navbar;