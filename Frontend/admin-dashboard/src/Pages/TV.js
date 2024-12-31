import React, { useState } from 'react';
import '../Static/Styles.css';

const TvManagement = () => {
  const [tvs, setTvs] = useState([]);
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
      const updatedTvs = tvs.map((tv, index) =>
        index === editIndex ? formData : tv
      );
      setTvs(updatedTvs);
      setEditIndex(null);
    } else {
      // Add new phone
      setTvs([...tvs, formData]);
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
    const updatedTvs = tvs.filter((_, i) => i !== index);
    setTvs(updatedTvs);
  };

  // Handle edit button
  const handleEdit = (index) => {
    setFormData(tvs[index]);
    setEditIndex(index);
  };

  return (
    <div className="admin-phone-management">
      <h3>Laptops List</h3>
      <div className="phone-list">
        {tvs.map((tv, index) => (
          <div key={index} className="phone-item">
            {tv.image && <img src={tv.image} alt={tv.brand} width="100" />}
            <div>
              <h4>{tv.brand}</h4>
              <p><strong>Specs:</strong> {tv.specs}</p>
              <p><strong>Price:</strong> KSH{tv.price}</p>
              <p><strong>Description:</strong> {tv.description}</p>
              <p><strong>Status:</strong> {tv.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
  
      <h2>{editIndex !== null ? 'Edit Tv' : 'Add New Tv'}</h2>
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
  
        <button type="submit">{editIndex !== null ? 'Update Tv' : 'Add Tv'}</button>
      </form>
    </div>
  );
};

export default TvManagement;
