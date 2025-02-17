import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Static/Styles.css';
const ShippingOption = ({ item_id, productName, onClose, onProceedToPayment }) => {
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [totalPrice, setTotalPrice] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const navigate = useNavigate();

  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/calculate_price/', {
        item_id,
        quantity,
        delivery_option: deliveryOption,
      });
      
      const data = response.data;
      setTotalPrice(data.total_price);
      setDeliveryFee(data.delivery_fee);
      setFinalPrice(data.final_price);
    } catch (error) {
      console.error('Error calculating price:', error);
    }
  };

  const handleProceed = () => {
    // Pass the final price to the parent component
    onProceedToPayment(finalPrice);
    navigate(`/mpesapayment/${item_id}`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Choose Delivery Option for {productName}</h1>
        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <div>
          <label>
            <input
              type="radio"
              name="deliveryOption"
              value="pickup"
              checked={deliveryOption === 'pickup'}
              onChange={() => setDeliveryOption('pickup')}
            />
            Pickup (No delivery fee)
          </label>
          <label>
            <input
              type="radio"
              name="deliveryOption"
              value="delivery"
              checked={deliveryOption === 'delivery'}
              onChange={() => setDeliveryOption('delivery')}
            />
            Delivery (Ksh 100 fee)
          </label>
        </div>
        <button onClick={handleCalculate}>Calculate Total</button>

        {totalPrice !== null && (
          <div>
            <h3>Order Summary:</h3>
            <p>Total Price: Ksh {totalPrice}</p>
            <p>Delivery Fee: Ksh {deliveryFee}</p>
            <p>Final Price: Ksh {finalPrice}</p>
            
            
            <button onClick={handleProceed}>Proceed to Payment</button>
           
          </div>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ShippingOption;
