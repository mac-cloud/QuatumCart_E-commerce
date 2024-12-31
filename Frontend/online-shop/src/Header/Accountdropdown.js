import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Static/Styles.css";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="account-dropdown">
      <button className="account-link" onClick={toggleDropdown}>
        <i className="fa fa-user"></i> Account
      </button>
      {isOpen && (
        <div className="dropdown-menu">
         <button className="dropdown-item">
            <Link to="/signin">
            <i className="fa fa-sign-in-alt"></i> Sign In
             </Link>
          </button>
          <button className="dropdown-item">
            <i className="fa fa-user-circle"></i> Account
          </button>
          <button className="dropdown-item">
            <i className="fa fa-bookmark"></i> Saved Items
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
