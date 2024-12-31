import React, { useState } from 'react';
import '../Static/Styles.css';

const PhoneManagement = () => {
  const [phones, setPhones] = useState([]);
  const [formData, setFormData] = useState({
    brand: '',
    specs: '',
    image: null,  
    price: '',
    inStock: true,
    description: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle check for stock status
  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      inStock: !prev.inStock
    }));
  };

  // Handle file input for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setFormData((prev) => ({
        ...prev,
        image: imageUrl  
      }));
    }
  };

  // Handle form submission 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit existing item
      const updatedPhones = phones.map((phone, index) =>
        index === editIndex ? formData : phone
      );
      setPhones(updatedPhones);
      setEditIndex(null);
    } else {
      // Add new phone
      setPhones([...phones, formData]);
    }

    // Reset the form
    setFormData({
      brand: '',
      specs: '',
      image: null,
      price: '',
      inStock: true,
      description: '',
    });
  };

  // Handle delete item
  const handleDelete = (index) => {
    const updatedPhones = phones.filter((_, i) => i !== index);
    setPhones(updatedPhones);
  };

  // Handle edit button
  const handleEdit = (index) => {
    setFormData(phones[index]);
    setEditIndex(index);
  };

  return (
    <div className="admin-phone-management">
      <h3>Phone List</h3>
      <div className="phone-list">
        {phones.map((phone, index) => (
          <div key={index} className="phone-item">
            {phone.image && <img src={phone.image} alt={phone.brand} width="100" />}
            <div>
              <h4>{phone.brand}</h4>
              <p><strong>Specs:</strong> {phone.specs}</p>
              <p><strong>Price:</strong> KSH{phone.price}</p>
              <p><strong>Description:</strong> {phone.description}</p>
              <p><strong>Status:</strong> {phone.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
  
      <h2>{editIndex !== null ? 'Edit Phone' : 'Add New Phone'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          required
        />
  
        <label>Specifications</label>
        <textarea
          name="specs"
          value={formData.specs}
          onChange={handleInputChange}
          required
        />
  
        <label>Image Upload</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {formData.image && (
          <div>
            <img src={formData.image} alt="Phone" width="100" />
          </div>
        )}
  
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
  
        <label>In Stock</label>
        <input
          type="checkbox"
          checked={formData.inStock}
          onChange={handleCheckboxChange}
        />
  
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
  
        <button type="submit">{editIndex !== null ? 'Update Phone' : 'Add Phone'}</button>
      </form>
    </div>
  );
};

export default PhoneManagement;
