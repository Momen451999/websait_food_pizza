// Cart.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import '../styles/Cart.css'; // استيراد ملف CSS

function Cart({ cartItems, removeFromCart, addToCart }) {
    const handleRemove = (item) => {
        removeFromCart(item);
    };

    const handleAdd = (item) => {
        addToCart(item);
    };

    return (
        <Box className="cart-container">
            <Typography variant="h4" className="cart-title">
                Your Cart
            </Typography>
            {cartItems.length > 0 ? (
                <List>
                    {cartItems.map((item, index) => (
                        <ListItem key={index} className="cart-item">
                            <ListItemText
                                primary={item.title}
                                secondary={`Price: ${item.price}`}
                                classes={{
                                    primary: 'cart-item-title',
                                    secondary: 'cart-item-price'
                                }}
                            />
                            <IconButton onClick={() => handleRemove(item)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={() => handleAdd(item)}>
                                <AddIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1" className="empty-cart-message">
                    Your cart is empty.
                </Typography>
            )}
        </Box>
    );
}

export default Cart;
