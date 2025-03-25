import React, { useState } from 'react';
import './DinnerPage.css';

const DinnerPage = () => {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item]: (prevCart[item] || 0) + 1,
    }));
  };

  const handleIncrease = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item]: prevCart[item] + 1,
    }));
  };

  const handleDecrease = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item] > 1) {
        newCart[item] -= 1;
      } else {
        delete newCart[item];
      }
      return newCart;
    });
  };

  const items = [
    { name: 'Steak', price: 200, img: '/images/steak.png', description: 'Juicy steak cooked to perfection.' },
    { name: 'Salmon', price: 180, img: '/images/salmon.png', description: 'Grilled salmon with a side of vegetables.' },
    { name: 'Chicken', price: 150, img: '/images/chicken.png', description: 'Roasted chicken with herbs.' },
    { name: 'Rice', price: 100, img: '/images/rice.png', description: 'Steamed rice with a side of curry.' },
    { name: 'Vegetables', price: 80, img: '/images/vegetables.png', description: 'Mixed vegetables stir-fried.' },
    { name: 'Soup', price: 70, img: '/images/soup.png', description: 'Warm and comforting soup.' },
    { name: 'Bread', price: 50, img: '/images/bread.png', description: 'Freshly baked bread.' },
    { name: 'Dessert', price: 90, img: '/images/dessert.png', description: 'Delicious dessert to end your meal.' },
  ];

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, item) => {
      const itemDetails = items.find(i => i.name === item);
      return total + (itemDetails.price * cart[item]);
    }, 0);
  };

  return (
    <div className="dinner-container">
      <header className="header">
        <h1 className="logo">DINE EASE</h1>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>Cart</button>
      </header>
      <div className="dinner-gallery">
        {items.map((item) => (
          <div className="dinner-item" key={item.name}>
            <img src={item.img} alt={item.name} />
            <div className="caption">{item.name}</div>
            <div className="details">
              <p>{item.description}</p>
              <p>&#8377; {item.price}</p>
              {cart[item.name] ? (
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item.name)}>-</button>
                  <span>{cart[item.name]}</span>
                  <button onClick={() => handleIncrease(item.name)}>+</button>
                </div>
              ) : (
                <button className="add-to-cart" onClick={() => handleAddToCart(item.name)}>Add To Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
      {showCart && (
        <div className="cart-popup">
          <h2>Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cart).map((item) => {
                const itemDetails = items.find(i => i.name === item);
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{cart[item]}</td>
                    <td>&#8377; {cart[item] * itemDetails.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>Total: &#8377; {calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default DinnerPage;