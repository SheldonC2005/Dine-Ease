import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import BreakfastPage from './Components/BreakfastPage';
import LunchPage from './Components/LunchPage';
import DinnerPage from './Components/DinnerPage';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Final from './Components/Final'; // Import the Final component

const Main = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cart, setCart] = useState({});

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

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

    const calculateTotal = () => {
        const allItems = [...breakfastItems, ...lunchItems, ...dinnerItems];
        return Object.keys(cart).reduce((total, itemName) => {
            const item = allItems.find((i) => i.name === itemName);
            return total + (item?.price || 0) * cart[itemName];
        }, 0);
    };

    const breakfastItems = [
        { name: 'Idly', price: 40, img: '/images/idly.png', description: 'Soft, delicate Idly served with coconut chutney and sambar!' },
        { name: 'Dosa', price: 50, img: '/images/dosa.png', description: 'Crispy Dosa served with coconut chutney and sambar!' },
        { name: 'Puri', price: 45, img: '/images/puri.png', description: 'Fluffy Puri served with potato curry!' },
        { name: 'Pongal', price: 50, img: '/images/pongal.png', description: 'Delicious Pongal served with coconut chutney and sambar!' },
        { name: 'Idiyapam', price: 60, img: '/images/idiyapam.png', description: 'Soft Idiyapam with coconut milk or spicy curry!' },
        { name: 'Aloo Paratha', price: 70, img: '/images/aloo_paratha.png', description: 'Aloo Paratha with curd and pickle!' },
        { name: 'Green Tea', price: 30, img: '/images/green_tea.png', description: 'Healthy Green Tea!' },
        { name: 'Coffee', price: 25, img: '/images/coffee.png', description: 'Strong Coffee!' },
    ];

    const lunchItems = [
        { name: 'Burger', price: 100, img: '/images/burger.png', description: 'Juicy burger with fresh lettuce, tomato, and cheese.' },
        { name: 'Pizza', price: 150, img: '/images/pizza.png', description: 'Delicious pizza with a variety of toppings.' },
        { name: 'Pasta', price: 120, img: '/images/pasta.png', description: 'Creamy pasta with a rich sauce.' },
        { name: 'Salad', price: 80, img: '/images/salad.png', description: 'Fresh salad with a mix of vegetables.' },
        { name: 'Sandwich', price: 90, img: '/images/sandwich.png', description: 'Tasty sandwich with ham, cheese, and veggies.' },
        { name: 'Fries', price: 50, img: '/images/fries.png', description: 'Crispy fries with a side of ketchup.' },
        { name: 'Juice', price: 60, img: '/images/juice.png', description: 'Freshly squeezed juice.' },
        { name: 'Coffee', price: 25, img: '/images/coffee.png', description: 'Strong Coffee to complement your lunch!' },
    ];

    const dinnerItems = [
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
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />
                    }
                />
                <Route
                    path="/"
                    element={
                        isAuthenticated ? <Home1 /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/home-2"
                    element={
                        isAuthenticated ? <Home2 /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/breakfast"
                    element={
                        isAuthenticated ? (
                            <BreakfastPage
                                cart={cart}
                                onAddToCart={handleAddToCart}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/lunch"
                    element={
                        isAuthenticated ? (
                            <LunchPage
                                cart={cart}
                                onAddToCart={handleAddToCart}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/dinner"
                    element={
                        isAuthenticated ? (
                            <DinnerPage
                                cart={cart}
                                onAddToCart={handleAddToCart}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/cart"
                    element={
                        isAuthenticated ? (
                            <Cart
                                cart={cart}
                                breakfastItems={breakfastItems}
                                lunchItems={lunchItems}
                                dinnerItems={dinnerItems}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                                calculateTotal={calculateTotal}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/payment"
                    element={
                        isAuthenticated ? (
                            <Payment total={calculateTotal()} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/final"
                    element={<Final />}
                />
            </Routes>
        </Router>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Main />
    </StrictMode>
);