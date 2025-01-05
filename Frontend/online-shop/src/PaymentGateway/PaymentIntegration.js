import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import Cookies from 'js-cookie';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import '../Static/Styles.css';

const PaymentPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMessage, setPaymentMessage] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('M-Pesa');
    const [showModal, setShowModal] = useState(false);
   

    const { item_id } = useParams();
    
   

    // Handle payment initiation
    const handlePayment = async () => {
        if (!phoneNumber || !amount) {
            alert('Phone number and amount are required');
            return;
        }

        const phoneNumberPattern = /^(2547\d{8}|07\d{8}|01\d{8})$/;
        if (!phoneNumberPattern.test(phoneNumber)) {
            alert('Invalid phone number');
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            alert('Invalid amount');
            return;
        }

        try {
            // Make POST request to initiate payment
            const response = await axios.post(
                `http://127.0.0.1:8000/mpesapayment/${item_id}/`,
                { phone_number: phoneNumber, amount },
                {
                    headers: {
                        'Content-Type': 'application/json'  // Ensure correct content type
                    }
                }
            );

            const message = response.data.ResponseDescription || 'Payment initiated. Check your phone.';
            setPaymentMessage(message);
            setShowModal(true);
        } catch (error) {
            console.error('Payment error:', error);
            setPaymentMessage('Failed to initiate payment. Please try again.');
            setShowModal(true);
        }
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false);
    };

   
    return (
        <div>
            <LandingPage />
            <div>
                <h1>Payment Options</h1>
                <div className="payment-option">
                    <input
                        type="radio"
                        id="mpesa"
                        name="payment"
                        value="M-Pesa"
                        checked={paymentMethod === 'M-Pesa'}
                        onChange={() => setPaymentMethod('M-Pesa')}
                    />
                    <label htmlFor="mpesa">
                        <strong>M-Pesa</strong>
                        <p>Pay securely using your mobile money.</p>
                    </label>
                    <div className="mpesa-details">
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <button onClick={handlePayment}>
                            Pay with M-Pesa
                        </button>
                    </div>
                </div>
                {showModal && (
                    <div className="modal-backdrop">
                        <div className="modal-content">
                            <p>{paymentMessage}</p>
                            <button onClick={closeModal}>OK</button>
                        </div>
                    </div>
                )}
            </div>
            <FooterPage />
        </div>
    );
};

export default PaymentPage;
