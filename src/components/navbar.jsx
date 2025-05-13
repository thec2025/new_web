import React, { useState } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Slide1692 = ({ data }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!data) return null;

  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(90deg, #ff5576, #ff9a66)',
        color: '#fff',
        px: 3,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap', // Prevent wrap
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/Asset 3 1.svg"
        alt="Logo"
        sx={{ height: 40, width: 'auto' }}
      />

      {/* Nav Links (hidden on small screens) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 3,
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        {data.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            underline="none"
            sx={{
              color: '#fff',
              fontSize: '1rem',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Box>

      {/* Register Button (hidden on small screens) */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Button
          variant="contained"
          href="#register"
          sx={{
            backgroundColor: '#ff0000',
            borderRadius: '33px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#cc0000' },
          }}
        >
          Register Now
        </Button>
      </Box>

      {/* Hamburger Menu (only on small screens) */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box
          sx={{ width: 250, backgroundColor: '#ff9a66', height: '100%', p: 2 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          <List>
            {data.map((link) => (
              <ListItem button key={link.label} component="a" href={link.href}>
                <ListItemText
                  primary={link.label}
                  sx={{ color: '#fff', fontWeight: 'bold' }}
                />
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant="contained"
                href="#register"
                sx={{
                  backgroundColor: '#ff0000',
                  borderRadius: '33px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#cc0000' },
                }}
              >
                Register Now
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Slide1692;
