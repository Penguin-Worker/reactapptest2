import React from 'react';
import './Footer.css';
import { Box, Typography, Link } from '@mui/material';
const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        p: 2,
        backgroundColor: '#3f51b5',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Typography variant="body1" >
        <Link href="/" color="inherit" sx={{'&:hover':{color:'#ffa500',},}} title="Напишите нам на No@sabra.com"> 
        Контакты
        </Link>{' '}
       |{' '}      
      <Link href="/" color="inherit"sx={{'&:hover':{color:'#ffa500',},}} title="Узнайте больше о нашей команде">
        О нас
      </Link>
      </Typography> 
    </Box>
  );
};


export default Footer;