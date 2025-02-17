import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook for Cart
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add to Cart (Prevent duplicates)
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevItems; // Item already in cart, prevent duplicate
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Remove from Cart (Decrease quantity, remove if 0)
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0) // Remove only if quantity reaches 0
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
