import React from 'react';
import { Box } from '@mui/material';
import heroImage from "../data/home.webp"

export default function HeroSection() {
  return (
    <Box
      component="section"
      id='home'
      sx={{
        width: "100%",
        height: { xs: '60vh',sm: "75vh", md: '100vh' },
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={heroImage}
        alt="Hero"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: { xs: 'contain', lg: 'cover' },
          objectPosition: 'center',
        }}
      />
    </Box>
  );
}