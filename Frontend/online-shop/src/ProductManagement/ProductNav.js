import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaTv, FaLaptop, FaHeadphones, FaCamera, FaHome, FaBatteryFull, FaPlug } from 'react-icons/fa'; 
import '../Static/Styles.css';

const ProductNav = () => {
    return (
        <div className="nav-products">
            <div className="nav-item">
                < Link to="/phones">
                <h2> <FaMobileAlt size={18} color={'green'} />Phones & Tablets</h2>
                </Link>
            </div>
            <div className="nav-item">
               <Link to="/televions">
                <h2>  <FaTv size={18} color={'green'} />TV Sets</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/computer">
                <h2> <FaLaptop size={18} color={'green'} />Computer & Laptops</h2>
                </Link>
            </div>
            <div className="nav-item">
               <Link to="/appliances">
                <h2>  <FaHome size={18} color={'green'} />Home Appliances</h2>
                </Link>
            </div>
           
            <div className="nav-item">
               <Link to="/audio">
                <h2>  <FaHeadphones size={18} color={'green'} />Audio Equipment</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/camera">
                <h2> <FaCamera size={18} color={'green'} />Photography Cameras</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/smart">
                <h2> <FaHome size={18} color={'green'} />Smart Home Devices</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/wearables">
                <h2>  <FaBatteryFull size={18} color={'green'} /> Wearables</h2>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/cables">
                <h2> <FaPlug size={18} color={'green'} /> Cables</h2>
                </Link>
            </div>
        </div>
    );
}

export default ProductNav;
