import React from 'react';
import './LunchPage.css';
import { useNavigate } from 'react-router-dom';

const LunchPage = ({ cart, onAddToCart, onIncrease, onDecrease }) => {
    const navigate = useNavigate();

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

    return (
        <div className="lunch-container">
            <header className="header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
                <h1 className="logo">DINE EASE</h1>
                <button className="cart-button" onClick={() => navigate('/cart')}>
                    View Cart ({Object.keys(cart).length})
                </button>
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

export default LunchPage;