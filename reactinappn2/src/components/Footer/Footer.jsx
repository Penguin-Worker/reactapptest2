import React from 'react';
import './Footer.css';
import { Box, Typography } from '@mui/material';
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
      <Typography variant="body1" title="Напишите нам на No@sabra.com">
        Контакты
      </Typography>
      <Typography variant="body1" title="Узнайте больше о нашей команде">
        О нас
      </Typography>
    </Box>
  );
};


export default Footer;