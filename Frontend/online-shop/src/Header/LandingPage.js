import React from 'react';
import '../Static/Styles.css';
import './Accountdropdown';
import { useCart} from "../GlobalContext/CartContext";
import logo from "../Images/logo1.png";
import Context from './Context';
import Accountdropdown from './Accountdropdown';
const Navbar = () => {


    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
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
                <a href="#home">
                <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Seach..." />
            </div>

            <div className="search-button">
            <button>Search</button>
            </div>
            <div className="navbar-actions">
                <Accountdropdown/>
                <button>
                <a href="#cart">
               <i className="fa fa-shopping-cart"></i> Cart 
               <span className="cart-count" style={{ color: "orange", fontWeight: "bold" }}>
                 {cartCount}
               </span>
             </a>
             </button>
            
            </div>
            
         </div>
        </nav>


        </div>
     );
};

export default Navbar;