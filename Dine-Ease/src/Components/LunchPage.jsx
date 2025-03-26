import React, { useState } from 'react';
import './LunchPage.css';

const LunchPage = () => {
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
    { name: 'Burger', price: 100, img: '/images/burger.png', description: 'Juicy burger with fresh lettuce, tomato, and cheese.' },
    { name: 'Pizza', price: 150, img: '/images/pizza.png', description: 'Delicious pizza with a variety of toppings.' },
    { name: 'Pasta', price: 120, img: '/images/pasta.png', description: 'Creamy pasta with a rich sauce.' },
    { name: 'Salad', price: 80, img: '/images/salad.png', description: 'Fresh salad with a mix of vegetables.' },
    { name: 'Sandwich', price: 90, img: '/images/sandwich.png', description: 'Tasty sandwich with ham, cheese, and veggies.' },
    { name: 'Fries', price: 50, img: '/images/fries.png', description: 'Crispy fries with a side of ketchup.' },
    { name: 'Juice', price: 60, img: '/images/juice.png', description: 'Freshly squeezed juice.' },
    { name: 'Coffee', price: 25, img: '/images/coffee.png', description: 'Strong Coffee to complement your lunch!' },
  ];

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, item) => {
      const itemDetails = items.find(i => i.name === item);
      return total + (itemDetails.price * cart[item]);
    }, 0);
  };

  return (
    <div className="lunch-container">
      <header className="header">
        <h1 className="logo">DINE EASE</h1>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>Cart</button>
      </header>
      <div className="lunch-gallery">
        {items.map((item) => (
          <div className="lunch-item" key={item.name}>
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

export default LunchPage;