import React from 'react';
import { Typography, Box } from '@mui/joy';
import '../../assets/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <Box className="footer" sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography>
        Brought to you by a Fabulous team | 2024
      </Typography>
    </Box>
  );
};

export default Footer;