import React from 'react';
import { Box, Typography, Link as MUILink, IconButton } from '@mui/material';
import { Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <Box className="footer" sx={{ backgroundColor: 'black', color: 'goldenrod', p: 3, mt: 'auto', textAlign: 'center', width: '100%',  }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
                &copy; 2024 Pizza. All Rights Reserved.
            </Typography>
            <Box sx={{ mb: 2 }}>
                <MUILink href="/" color="inherit" className="footer-link" sx={{ mx: 1, textDecoration: 'none' }}>Home</MUILink>
                <MUILink href="/about" color="inherit" className="footer-link" sx={{ mx: 1, textDecoration: 'none' }}>About</MUILink>
                <MUILink href="/contact" color="inherit" className="footer-link" sx={{ mx: 1, textDecoration: 'none' }}>Contact</MUILink>
                <MUILink href="/menu" color="inherit" className="footer-link" sx={{ mx: 1, textDecoration: 'none' }}>Menu</MUILink>
            </Box>
            <Box>
                <IconButton href="tel:+123456789" color="inherit" sx={{ mx: 0.5 }}>
                    <Phone />
                </IconButton>
                <IconButton href="https://facebook.com" target="_blank" rel="noopener" color="inherit" sx={{ mx: 0.5 }}>
                    <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" rel="noopener" color="inherit" sx={{ mx: 0.5 }}>
                    <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" rel="noopener" color="inherit" sx={{ mx: 0.5 }}>
                    <Instagram />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;

