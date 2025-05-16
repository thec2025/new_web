import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';

const TextSec2 = ({ data }) => {
  if (!data) return null;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, background: '#ffffff' }}>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }} // column on mobile, row on desktop
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Image */}
          {data.image && (
            <Box
              component="img"
              src={data.image}
              alt={data.title || 'Section Image'}
              sx={{
                width: { xs: '100%', md: '50%' },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          )}

          {/* Text */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
              color="primary.main"
            >
              {data.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                fontSize: '1rem',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              {data.description}
            </Typography>

            {data.buttons && Object.keys(data.buttons).length > 0 && (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {Object.entries(data.buttons).map(([key, doc]) => (
                  <Button
                    key={key}
                    component="a"
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: '20px',
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      boxShadow: 2,
                      minWidth: '200px',
                    }}
                  >
                    {doc.title}
                  </Button>
                ))}
              </Stack>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TextSec2;
