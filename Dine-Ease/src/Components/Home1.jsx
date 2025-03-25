import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home1.css';

const Home1 = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/home-2');
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">DINE EASE</h1>
      </header>
      <div className="image-gallery">
        <img src="/images/image1.png" alt="Food 1" />
        <img src="/images/image2.png" alt="Food 2" />
        <img src="/images/image3.png" alt="Food 3" />
        <img src="/images/image4.png" alt="Food 4" />
      </div>
      <button className="order-button" onClick={handleOrderClick}>Order</button>
    </div>
  );
};

export default Home1;