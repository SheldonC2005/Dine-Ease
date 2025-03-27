import React from 'react';
import './BreakfastPage.css';
import { useNavigate } from 'react-router-dom';

const BreakfastPage = ({ cart, onAddToCart, onIncrease, onDecrease }) => {
    const navigate = useNavigate();

    const items = [
        { name: 'Idly', price: 40, img: '/images/idly.png', description: 'Soft, delicate Idly served with coconut chutney and sambar!' },
        { name: 'Dosa', price: 50, img: '/images/dosa.png', description: 'Crispy Dosa served with coconut chutney and sambar!' },
        { name: 'Puri', price: 45, img: '/images/puri.png', description: 'Fluffy Puri served with potato curry!' },
        { name: 'Pongal', price: 50, img: '/images/pongal.png', description: 'Delicious Pongal served with coconut chutney and sambar!' },
        { name: 'Idiyapam', price: 60, img: '/images/idiyapam.png', description: 'Soft Idiyapam with coconut milk or spicy curry!' },
        { name: 'Aloo Paratha', price: 70, img: '/images/aloo_paratha.png', description: 'Aloo Paratha with curd and pickle!' },
        { name: 'Green Tea', price: 30, img: '/images/green_tea.png', description: 'Healthy Green Tea!' },
        { name: 'Coffee', price: 25, img: '/images/coffee.png', description: 'Strong Coffee!' },
    ];

    return (
        <div className="breakfast-container">
            <header className="header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
                <h1 className="logo">DINE EASE</h1>
                <button className="cart-button" onClick={() => navigate('/cart')}>
                    View Cart ({Object.keys(cart).length})
                </button>
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

export default BreakfastPage;