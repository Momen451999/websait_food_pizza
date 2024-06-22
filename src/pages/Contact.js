import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';
import React from 'react';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
    return (
        <Box sx={{ marginTop: '80px', marginBottom: '64px', marginLeft: "16px", marginRight: "16px" }}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Contact My Restaurant</Typography>
            <p>
                A daring pizza heist. A group of mischievous teenagers, fueled by hunger and adventure, snuck into a famous pizzeria after hours. They made off with piping hot pizzas straight from the oven, leaving behind only a trail of laughter and tomato sauce.

                The Pizza Diplomacy: During a time of great tension between two neighboring kingdoms, there emerged a wise pizzeria owner who proposed a pizza summit. Leaders from both sides gathered around a table laden with pizzas adorned with toppings representing each kingdom. As they savored the delicious pies, tensions melted away, and peace flourished once more.

                Each of these stories captures the magic and allure of a pizza restaurant, where food transcends mere sustenance to become a source of legend and wonder.
            </p>

            <Box>
                <TableContainer component={Paper}>
                    <Table aria-label='contact table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 0452507564
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <IconButton href="mailto:info@restaurant.com" color="inherit">
                                        <EmailIcon />
                                    </IconButton>
                                    <IconButton href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
                                        <InstagramIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default Contact;
