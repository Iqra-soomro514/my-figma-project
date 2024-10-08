import React from 'react';
import { Box, Button, Link } from '@mui/material';
import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="Logo" style={{ marginRight: '10px' }} />
      </Box>

      {/* Links Section */}
      <Box sx={{ display: 'flex', gap: '80px' }}>
        <Link href="#" underline="none" sx={{ color: '#333', fontWeight: '500' }}>
          Home
        </Link>
        <Link href="#" underline="none" sx={{ color: '#333', fontWeight: '500' }}>
          Service
        </Link>
        <Link href="#" underline="none" sx={{ color: '#333', fontWeight: '500' }}>
          Feature
        </Link>
        <Link href="#" underline="none" sx={{ color: '#333', fontWeight: '500' }}>
          Product
        </Link>
        <Link href="#" underline="none" sx={{ color: '#333', fontWeight: '500' }}>
          Testimonial
        </Link>
        <Link href="#" underline="none" sx={{ color: '#333', fontWeight: '500' }}>
          FAQ
        </Link>
      </Box>

      {/* Buttons Section */}
      <Box sx={{ display: 'flex', gap: '16px', alignItems:"center" }}>
        <Link href="#" underline="none" sx={{ color: '#28a745', fontWeight: '600' }}>
          Login
        </Link>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#28a745',
            color: 'white',
            fontWeight: '600',
            '&:hover': {
              backgroundColor: '#218838',
            },
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
export default Navbar;
