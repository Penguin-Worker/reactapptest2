
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css'; // Импорт стилей
import './Header.css'; 
import { Button, Box } from '@mui/material';
const Navigation = () => {
  return (
    <Box sx={{ display:'flex', gap:2}}>
      <Button  color ="white" href="/" sx={{'&:hover':{color:'#ffa500',},}}>Home</Button>
      <Button color ="white" href="/about"sx={{'&:hover':{color:'#ffa500',},}}>About</Button>
      <Button color ="white" href="/items"sx={{'&:hover':{color:'#ffa500',},}}>Items</Button>
    </Box>
  );
};

export default Navigation;  
