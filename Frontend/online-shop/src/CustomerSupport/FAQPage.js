import React from 'react';
import '../Static/Styles.css';


const FAQ = () => {
    return (
        <div className="faq-container">
          <h1>Frequently Asked Questions (FAQs)</h1>
    
          <div className="faq-item">
            <h3>1. What products do you sell?</h3>
            <p>We offer a wide range of electronic products, including mobile phones, laptops, televisions, audio equipment, home appliances, and accessories. Visit our product categories for more details.</p>
          </div>
    
          <div className="faq-item">
            <h3>2. How can I place an order?</h3>
            <p>Simply browse our product categories, select the items you wish to purchase, and click the "Add to Cart" button. Once you're ready to checkout, follow the instructions to complete your order.</p>
          </div>
    
          <div className="faq-item">
            <h3>3. Do you offer free shipping?</h3>
            <p>Yes, we offer free shipping on orders over a certain amount. Please check the shipping section for more details on our free shipping offers.</p>
          </div>
    
          <div className="faq-item">
            <h3>4. Can I return an item?</h3>
            <p>We accept returns within 30 days of purchase. Please ensure the product is in its original packaging and in unused condition. Refer to our return policy for more information.</p>
          </div>
    
          <div className="faq-item">
            <h3>5. What payment methods do you accept?</h3>
            <p>We accept a variety of payment methods, including credit and debit cards, PayPal, and bank transfers. During checkout, you can select your preferred payment option.</p>
          </div>
    
          <div className="faq-item">
            <h3>6. How do I contact customer support?</h3>
            <p>If you need help, you can contact our customer support team by email, phone, or through our contact page. Visit the "Contact Us" page for more details.</p>
          </div>
    
          <div className="faq-item">
            <h3>7. Do you offer warranties on your products?</h3>
            <p>Yes, we offer warranties on most of the products we sell. The warranty period and conditions vary by product, so please check the product description for warranty details.</p>
          </div>
    
          <div className="faq-item">
            <h3>8. Can I track my order?</h3>
            <p>Yes, once your order is shipped, you will receive a tracking number to track your order. You can also check your order status on our website by logging into your account.</p>
          </div>
        </div>
      );
}

export default FAQ;