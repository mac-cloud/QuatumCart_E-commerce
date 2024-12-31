import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Static/Styles.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setDropdownOpen(false); // Close dropdown when a tab is clicked
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar Section */}
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-nav">
          <li
            className={activeTab === "services" ? "active" : ""}
            onClick={() => handleTabChange("services")}
          >
            <Link to="/services">
              <i className="fa fa-cogs"></i> Services
            </Link>
          </li>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => handleTabChange("users")}
          >
            <Link to="/users">
              <i className="fa fa-users"></i> Users
            </Link>
          </li>
          <li
            className={activeTab === "inventory" ? "active" : ""}
            onClick={toggleDropdown}
          >
            <i className="fa fa-box"></i> Inventory
            <i className={`fa ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleTabChange("phones")}>
                  <Link to="/phones">Phones</Link>
                </li>
                <li onClick={() => handleTabChange("tvsets")}>
                  <Link to="/tvs">TV Sets</Link>
                </li>
                <li onClick={() => handleTabChange("laptops")}>
                  <Link to="/laptops">Laptops</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => handleTabChange("orders")}
          >
            <Link to="/admin/orders">
              <i className="fa fa-shopping-cart"></i> Orders
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Welcome to the Admin Dashboard</h1>
          <div className="header-actions">
            <button className="logout-button">
              <i className="fa fa-sign-out"></i> Logout
            </button>
          </div>
        </header>
        {/* Add content here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
