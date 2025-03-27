import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, breakfastItems, lunchItems, dinnerItems, onIncrease, onDecrease }) => {
    const navigate = useNavigate();

    const allItems = [...breakfastItems, ...lunchItems, ...dinnerItems];

    const calculateTotal = () => {
        return Object.keys(cart).reduce((total, itemName) => {
            const item = allItems.find((i) => i.name === itemName);
            return total + (item?.price || 0) * cart[itemName];
        }, 0);
    };

    const handleCheckout = () => {
        const total = calculateTotal();
        navigate('/payment', { state: { total } });
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {Object.keys(cart).length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <div className="cart-table-container">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cart).map((itemName) => {
                                const item = allItems.find((i) => i.name === itemName);
                                return (
                                    <tr key={itemName}>
                                        <td>{itemName}</td>
                                        <td>&#8377; {item?.price}</td>
                                        <td>{cart[itemName]}</td>
                                        <td>
                                            <button onClick={() => onDecrease(itemName)}>-</button>
                                            <button onClick={() => onIncrease(itemName)}>+</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h2>Total: &#8377; {calculateTotal()}</h2>
                        <button className="checkout-button" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                </div>
            )}
            <button className="back-button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
};

export default Cart;