import React from 'react';
import './Home1.css';
import { Link } from 'react-router-dom';

const Home1 = () => {
  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
    '/images/image8.png',
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          DINE EASE
        </div>
      </header>
      <div className="image-gallery">
        <div className="image-track">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate images for seamless looping */}
          {images.map((image, index) => (
            <div className="image-item" key={`duplicate-${index}`}>
              <img src={image} alt={`Duplicate Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Link to="/home-2">
        <button className="order-button">Order</button>
      </Link>
    </div>
  );
};

export default Home1;