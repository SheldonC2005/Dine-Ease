import React from 'react';
import './Final.css';
import { useNavigate } from 'react-router-dom';

const Final = () => {
    const navigate = useNavigate();

    return (
        <div className="final-container">
            <div className="animation-container">
                <div className="tick-animation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tick-icon"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
                <h1 className="success-message">Order Placed Successfully!</h1>
                <button className="home-button" onClick={() => navigate('/')}>
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Final;