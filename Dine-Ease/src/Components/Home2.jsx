import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home2.css';

const Home2 = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleBreakfastClick = () => {
    navigate('/breakfast');
  };

  const handleLunchClick = () => {
    navigate('/lunch');
  };

  const handleDinnerClick = () => {
    navigate('/dinner');
  };

  const handleAddToCartFromHome2 = (item) => {
    onAddToCart(item);
  };

  return (
    <div className="home2-container">
      <header className="header">
        <div className="logo">DINE EASE</div>
        <div className="tagline">A Taste of luxury in every bite, crafted with passion and perfection</div>
      </header>
      <div className="image-gallery">
        <div className="image-item" onClick={handleBreakfastClick}>
          <img src="/images/breakfast.png" alt="Breakfast" />
          <div className="caption">Break Fast</div>
        </div>
        <div className="image-item" onClick={handleLunchClick}>
          <img src="/images/lunch.png" alt="Lunch" />
          <div className="caption">Lunch</div>
        </div>
        <div className="image-item" onClick={handleDinnerClick}>
          <img src="/images/dinner.png" alt="Dinner" />
          <div className="caption">Dinner</div>
        </div>
      </div>
    </div>
  );
};

export default Home2;