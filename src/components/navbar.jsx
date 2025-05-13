import React from 'react';
import { Box, Button, Stack, Typography, Link } from '@mui/material';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Conference Tracks', href: '#tracks' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Abstract/Submissions', href: '#submissions' },
  { label: 'Schedule', href: '#schedule' },
];

const Slide1692 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(90deg, #ff5576, #ff9a66)',
        height: { xs: 'auto', md: '5.5rem' },
        color: '#fff',
        fontFamily: 'Barlow',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 2, md: 0 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/Asset 3 1.svg"
        alt="Logo"
        sx={{
          height: { xs: 40, sm: 50 },
          width: 'auto',
          objectFit: 'contain',
        }}
      />

      {/* Nav links */}
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          flexWrap: 'wrap',
          mt: { xs: 2, md: 0 },
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            underline="none"
            sx={{
              color: '#fff',
              fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>

      {/* Register Now button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ff0000',
          borderRadius: '33px',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: { xs: '0.75rem', sm: '0.9rem' },
          px: 3,
          height: '2.5rem',
          mt: { xs: 2, md: 0 },
          '&:hover': {
            backgroundColor: '#cc0000',
          },
        }}
        href="#register"
      >
        Register Now
      </Button>
    </Box>
  );
};

export default Slide1692;
