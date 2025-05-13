import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CommitteeSection from '../components/CommitteeSection';
import { thaparLearnFellows, uqFellows } from '../data/committeeData';

const Committee = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Organizing Committee
        </Typography>
        
        <CommitteeSection 
          title="Thapar Learn Fellows (TLFs)"
          members={thaparLearnFellows}
        />
        
        <CommitteeSection 
          title="University of Queensland Fellows"
          members={uqFellows}
        />
      </Container>
    </Box>
  );
};

export default Committee; 