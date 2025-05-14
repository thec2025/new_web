import React, { useState } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = ({ data }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  if (!data) return null;

  const handleNavigation = (path) => {
    if (path.includes('#')) {
      const [base, hash] = path.split('#');
      navigate(base || '/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);
    } else {
      navigate(path);
    }
  };

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
        flexWrap: 'nowrap',
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
            underline="none"
            onClick={() => handleNavigation(link.path)}
            sx={{
              color: '#fff',
              fontSize: '1rem',
              cursor: 'pointer',
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
          onClick={() => navigate('/register')}
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
              <ListItem button key={link.label} onClick={() => handleNavigation(link.path)}>
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
                onClick={() => navigate('/register')}
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

export default Navbar;