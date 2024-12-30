import React from 'react';
import '../Static/Styles.css';
import andriodphones from '../Images/andriodphones.png';
import andriodtablet from '../Images/andriodtablet.png';
import ipads from '../Images/ipads.png';
import laptops from '../Images/laptops.png';
import foldphones from '../Images/foldphones.png';
import iPhones from '../Images/iPhones.png';
const ProductListing = () => {
     return (
      <div class="product">
         <div className="product-header">
        </div>
        <img src={andriodphones} alt="image1"></img>
        <img src={ipads} alt="image1"></img>
        <img src={andriodtablet} alt="image1"></img>
        <img src={laptops} alt="image1"></img>
        <img src={foldphones} alt="image1"></img>
        <img src={iPhones} alt="image1"></img>
       
      </div>
     )
};
export default ProductListing;