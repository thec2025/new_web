import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Typography, IconButton, Link } from '@mui/material';

const ContactUs = ({ data }) => {
  if (!data) return null;

  return (
    <Box  id="contact"
      sx={{
        width: '100%',
        background: '#b56e4a',
        color: '#fff',
        px: 3,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      {/* Map + Contact Info */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Map */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
  <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6885.614726205045!2d76.35568897770997!3d30.3564242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1695391337140!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', height: '220px', borderRadius: '0.5rem', maxWidth: 400 }}
          title="Thapar Location"
        ></iframe>
        </Box>

        {/* Contact Info */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700 }}>
            {data.title}
          </Typography>
          <Typography>{data.address}</Typography>
          <Typography>
            <b>Email:</b>{' '}
            <Link href={`mailto:${data.email}`} underline="hover" sx={{ color: '#fff' }}>
              {data.email}
            </Link>
          </Typography>
          <Typography><b>Phone:</b></Typography>
          <Typography onClick={() => navigator.clipboard.writeText(data.phone1)} sx={{ cursor: 'pointer' }}>
            Dr. Gagandeep Kaur: <u>{data.phone1}</u>
          </Typography>
          <Typography onClick={() => navigator.clipboard.writeText(data.phone2)} sx={{ cursor: 'pointer' }}>
            Dr. Amanpreet Kaur: <u>{data.phone2}</u>
          </Typography>
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <IconButton component="a" href="https://www.facebook.com/officialTIET/" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton component="a" href="https://x.com/tietofficial" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton component="a" href="https://www.instagram.com/tietofficial/" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com/school/tietofficial/posts/?feedView=all" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactUs;
