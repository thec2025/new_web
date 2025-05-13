import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

interface AboutSectionProps {
  title: string;
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content }) => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 6,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>

        <Grid container spacing={4}>
          <Grid sx={{ width: { xs: '100%', md: '50%' } }}>
            <StyledPaper elevation={2}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                {content}
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection; 