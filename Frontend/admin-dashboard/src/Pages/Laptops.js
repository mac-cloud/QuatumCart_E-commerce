import React, { useState } from 'react';
import '../Static/Styles.css';

const LaptopManagement = () => {
  const [laptops, setLaptops] = useState([]);
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
      const updatedLaptops = laptops.map((laptop, index) =>
        index === editIndex ? formData : laptop
      );
      setLaptops(updatedLaptops);
      setEditIndex(null);
    } else {
      // Add new phone
      setLaptops([...laptops, formData]);
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
    const updatedLaptops = laptops.filter((_, i) => i !== index);
    setLaptops(updatedLaptops);
  };

  // Handle edit button
  const handleEdit = (index) => {
    setFormData(laptops[index]);
    setEditIndex(index);
  };

  return (
    <div className="admin-phone-management">
      <h3>Laptops List</h3>
      <div className="phone-list">
        {laptops.map((laptop, index) => (
          <div key={index} className="phone-item">
            {laptop.image && <img src={laptop.image} alt={laptop.brand} width="100" />}
            <div>
              <h4>{laptop.brand}</h4>
              <p><strong>Specs:</strong> {laptop.specs}</p>
              <p><strong>Price:</strong> KSH{laptop.price}</p>
              <p><strong>Description:</strong> {laptop.description}</p>
              <p><strong>Status:</strong> {laptop.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
  
      <h2>{editIndex !== null ? 'Edit Laptop' : 'Add New Laptop'}</h2>
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
            <img src={formData.image} alt="Laptop" width="100" />
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
  
        <button type="submit">{editIndex !== null ? 'Update Laptop' : 'Add Laptop'}</button>
      </form>
    </div>
  );
};

export default LaptopManagement;
