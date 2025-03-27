import React from 'react';
import './DinnerPage.css';
import { useNavigate } from 'react-router-dom';

const DinnerPage = ({ cart, onAddToCart, onIncrease, onDecrease }) => {
    const navigate = useNavigate();

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

    return (
        <div className="dinner-container">
            <header className="header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
                <h1 className="logo">DINE EASE</h1>
                <button className="cart-button" onClick={() => navigate('/cart')}>
                    View Cart ({Object.keys(cart).length})
                </button>
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
                                    <button onClick={() => onDecrease(item.name)}>-</button>
                                    <span>{cart[item.name]}</span>
                                    <button onClick={() => onIncrease(item.name)}>+</button>
                                </div>
                            ) : (
                                <button className="add-to-cart" onClick={() => onAddToCart(item.name)}>Add To Cart</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DinnerPage;