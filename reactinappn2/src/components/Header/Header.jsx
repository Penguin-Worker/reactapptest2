
import React from 'react';
import Navigation from './Navigation';
import ProfileMenu from './ProfileMenu';
import './Header.css'; 
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Test Application
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Navigation />
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
