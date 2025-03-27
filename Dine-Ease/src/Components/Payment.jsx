import React from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = ({ total }) => {
    const navigate = useNavigate();

    const handlePaymentOptionClick = () => {
        navigate('/final'); // Navigate to the Final page
    };

    return (
        <div className="payment-container">
            <div className="payment-header">
                <h1 className="payment-title">Payment Options</h1>
                <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="payment-summary">
                <h2>Order Total: &#8377; {total}</h2>
            </div>
            <div className="payment-options">
                <div className="payment-option" onClick={handlePaymentOptionClick}>
                    <h3>UPI</h3>
                    <div className="upi-qr">
                        <img src="/images/qr.png" alt="UPI QR Code" />
                        <p>Scan the QR using any UPI App</p>
                    </div>
                </div>
                <div className="payment-option" onClick={handlePaymentOptionClick}>
                    <h3>Cards</h3>
                    <div className="card-qr">
                        <img src="/images/card.png" alt="Card Image" />
                        <p>Pay using Credit/Debit Cards</p>
                    </div>
                </div>
                <div className="payment-option" onClick={handlePaymentOptionClick}>
                    <h3>Netbanking</h3>
                    <div className="netbanking-qr">
                        <img src="/images/netbanking.png" alt="Netbanking Image" />
                        <p>Pay using Netbanking</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;