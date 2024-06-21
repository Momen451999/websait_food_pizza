import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Data from '../data/MenuData';
import '../styles/Menu.css';

function Menu({ addToCart }) {
    return (
        <Box className="menu-container">
            <Grid container spacing={3}>
                {Data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="menu-card">
                            <CardMedia
                                component="img"
                                alt={item.title}
                                height="140"
                                image={item.img}
                            />
                            <CardContent>
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
                                    className="order-button"
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
