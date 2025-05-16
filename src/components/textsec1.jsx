import React from 'react';
import { Box, Container, Typography, Stack, Button, Grid } from '@mui/material';

const TextSec1 = ({ data }) => {
  if (!data) return null;

  return (
    <Box component="section" sx={{  pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          
          {/* Conditional Image on the Left */}
          {data.image && (
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={data.image}
                alt={data.title || 'Section Image'}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          )}

          {/* Text on the Right */}
          <Grid item xs={12} md={data.image ? 6 : 12}>
            <Typography
              variant="h4"
              component="h2"
              align="left"
              fontWeight="bold"
              gutterBottom
              color="primary.main"
            >
              {data.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: 'justify', fontSize: '1rem', lineHeight: 1.6, mb: 4 }}
            >
              {data.description}
            </Typography>

            {data.buttons && Object.keys(data.buttons).length > 0 && (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextSec1;
