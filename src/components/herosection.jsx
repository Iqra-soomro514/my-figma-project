import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import HeroImg from '../assets/Illustration.png'
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        minHeight: '80vh',
        padding:'0px 360px'
      }}
    >
      {/* Text Section */}
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#333', margin:'20px 0px' }}>
          Lessons and insights
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 'bold', color: '#28a745', marginBottom: '16px' }}
        >
          from 8 years
        </Typography>
        <Typography
  variant="body1"
  sx={{
    marginTop: '16px',
    marginBottom: '16px',
  }}
>
  Where to grow your business as a photographer: site or social media?
</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 30px',
            '&:hover': {
              backgroundColor: '#717171',
            },
          }}
        >
          Register
        </Button>
      </Box>

      {/* Image Section */}
      <Box>
        <img
          src={HeroImg}
          alt="Programmer working"
          style={{ width: '400px' }}
        />
      </Box>
    </Box>
  );
};
export default HeroSection;
