// src/pages/About.js
import { Box, Typography } from '@mui/material';
import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <Box className="about-container" sx={{ marginTop: '64px' }}>
            <Typography variant="h4">
                Welcome to my Restaurant
            </Typography>
            <Typography variant="body1">
                Once upon a time, in a quaint Italian village, there was a humble pizzeria. The owner,
                Nonna Maria, was known far and wide for her secret pizza dough recipe passed down through generations.
                It was said that those who tasted her pizzas would experience a burst of flavors that transported them to the sun-kissed hills of Tuscany.
            </Typography>
            <br />
            <Typography variant="body1" className="legendary-recipe">
                The Legendary Recipe: Legends told of a colossal pizza, so large that only the bravest could attempt to finish it. Many tried, but only a few succeeded.
                Those who conquered the challenge were immortalized on the pizzeria's Wall of Fame, forever celebrated for their gastronomic prowess.
            </Typography>
            <br />
            <Typography variant="body1" className="ghostly-pizzeria">
                The Ghostly Pizzeria: Deep in the heart of a foggy coastal town, there was a mysterious pizzeria that appeared and disappeared at will.
                Locals whispered that it was haunted by the ghost of a passionate pizza chef who still sought perfection even in the afterlife.
                Patrons who visited during the full moon swore they could taste his ethereal creations.
            </Typography>
        </Box>
    );
}

export default About;
