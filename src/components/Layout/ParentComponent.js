import React, { useState } from 'react';
import Cart from '../../pages/Cart'; 

function ParentComponent() {
    const [cartItems, setCartItems] = useState([]); 


    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item !== itemToRemove);
        setCartItems(updatedCart);
    };

    
    const addToCart = (itemToAdd) => {
        const updatedCart = [...cartItems, itemToAdd];
        setCartItems(updatedCart);
    };

    return (
        <div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />
            
        </div>
    );
}

export default ParentComponent;
