import React, { useState } from 'react';
import { AppBar as MUIAppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/logo.png';
import '../../styles/AppBar.css'; 

function AppBar({ cartItems }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const list = (
        <Box
            className="drawer-list"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component={Link} to="/menu">
                    <ListItemText primary="Menu" />
                </ListItem>
                <ListItem button component={Link} to="/cart">
                    <ShoppingCartIcon />
                    <ListItemText primary={`Cart (${cartItems.length})`} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <MUIAppBar className="app-bar">
                <Toolbar>
                    <Typography
                        variant="h6"
                        className="app-bar-title"
                        component="div"
                    >
                        <img src={logo} alt="Logo" className="app-bar-logo" />
                        Pizza
                    </Typography>
                    <Box className="app-bar-buttons">
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/menu">Menu</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <Button color="inherit" component={Link} to="/contact">Contact</Button>
                        <IconButton color="inherit" component={Link} to="/cart">
                            <ShoppingCartIcon />
                            <span>{cartItems.length}</span>
                        </IconButton>
                    </Box>
                    <Box className="app-bar-menu-icon">
                        <IconButton color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </MUIAppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {list}
            </Drawer>
        </>
    );
}

export default AppBar;
