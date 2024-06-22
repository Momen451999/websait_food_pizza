import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, TextField } from '@mui/material';
import Data from '../data/MenuData';
import '../styles/Menu.css';

function Menu({ addToCart }) {
    const [nameSearch, setNameSearch] = useState('');
    const [timeSearch, setTimeSearch] = useState('');
    const [priceSearch, setPriceSearch] = useState('');

    // Function to handle name search change, allowing only letters
    const handleNameSearchChange = (e) => {
        // Regular expression to allow only letters and spaces
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(e.target.value) || e.target.value === '') {
            setNameSearch(e.target.value.toLowerCase());
        }
    };

    // Function to handle time search change, allowing only numbers
    const handleTimeSearchChange = (e) => {
        // Regular expression to allow only numeric input
        const regex = /^[0-9]*$/;
        if (regex.test(e.target.value) || e.target.value === '') {
            setTimeSearch(e.target.value.toLowerCase());
        }
    };

    // Function to handle price search change, allowing only numbers
    const handlePriceSearchChange = (e) => {
        // Regular expression to allow only numeric input
        const regex = /^[0-9]*$/;
        if (regex.test(e.target.value) || e.target.value === '') {
            setPriceSearch(e.target.value.toLowerCase());
        }
    };

    // Filter function to match item based on title, price, and time
    const filterData = (item) => {
        const nameMatch = item.title.toLowerCase().includes(nameSearch);
        const timeMatch = item.time.toLowerCase().includes(timeSearch);
        const priceMatch = item.price.toLowerCase().includes(priceSearch);
        return nameMatch && timeMatch && priceMatch;
    };

    return (
        <Box className="menu-container">
            {/* Search fields */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Search by Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={nameSearch}
                        onChange={handleNameSearchChange}
                        inputProps={{ pattern: '[A-Za-z ]*', title: 'Only letters and spaces are allowed' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Search by Time"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={timeSearch}
                        onChange={handleTimeSearchChange}
                        inputProps={{ inputMode: 'numeric' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Search by Price"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={priceSearch}
                        onChange={handlePriceSearchChange}
                        inputProps={{ inputMode: 'numeric' }}
                    />
                </Grid>
            </Grid>

            {/* Menu items */}
            <Grid container spacing={3}>
                {Data.filter(filterData).map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="menu-card">
                            <CardMedia
                                component="img"
                                alt={item.title}
                                height="140"
                                image={item.img}
                            />
                            <CardContent className="menu-card-content">
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.time}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(item)}
                                    className="order-button-menu"
                                >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Menu;
