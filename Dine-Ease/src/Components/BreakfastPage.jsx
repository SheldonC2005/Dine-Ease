import React, { useState } from 'react';
import './BreakfastPage.css';

const BreakfastPage = () => {
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
    { name: 'Idly', price: 40, img: '/images/idly.png', description: 'Soft, delicate Idly served with coconut chutney and sambar for a perfect traditional treat!' },
    { name: 'Dosa', price: 50, img: '/images/dosa.png', description: 'Crispy Dosa served with coconut chutney and sambar for a perfect traditional treat!' },
    { name: 'Puri', price: 45, img: '/images/puri.png', description: 'Fluffy Puri served with potato curry for a perfect traditional treat!' },
    { name: 'Pongal', price: 50, img: '/images/pongal.png', description: 'Delicious Pongal served with coconut chutney and sambar for a perfect traditional treat!' },
    { name: 'Idiyapam', price: 60, img: '/images/idiyapam.png', description: 'Soft, delicate Idiyapam served with coconut milk or spicy curry for a perfect traditional treat!' },
    { name: 'Aloo Paratha', price: 70, img: '/images/aloo_paratha.png', description: 'Delicious Aloo Paratha served with curd and pickle for a perfect traditional treat!' },
    { name: 'Green Tea', price: 30, img: '/images/green_tea.png', description: 'Healthy Green Tea to complement your breakfast!' },
    { name: 'Coffee', price: 25, img: '/images/coffee.png', description: 'Strong Coffee to complement your breakfast!' },
  ];

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, item) => {
      const itemDetails = items.find(i => i.name === item);
      return total + (itemDetails.price * cart[item]);
    }, 0);
  };

  return (
    <div className="breakfast-container">
      <header className="header">
        <h1 className="logo">DINE EASE</h1>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>Cart</button>
      </header>
      <div className="breakfast-gallery">
        {items.map((item) => (
          <div className="breakfast-item" key={item.name}>
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

export default BreakfastPage;