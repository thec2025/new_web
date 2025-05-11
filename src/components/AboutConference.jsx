import React from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';

const AboutConference = () => {
  
  return (
    <Box component="section" id="about" sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container>
        
        <Box sx={{ p: 2 }}>
          <br/>
        <Typography variant="h4" component="h2" align="left" fontWeight="bold" gutterBottom color="primary.main">
          ABOUT CONFERENCE
        </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'justify', fontSize: '1rem', lineHeight: 1.6, mb: 4 }}
          >
            TIET in collaboration with NITTTR Chandigarh is organizing a conference on Transforming Higher Education for Future: Education 4.0.<br />
            This conference focuses on the evolving landscape of higher education in the era of digitization and Education 4.0. It explores the integration of emerging technologies such as Artificial Intelligence, automation, and advanced engineering to transform the learning environment, curricula, and pedagogy. Bringing together the educators, policymakers, researchers, and innovators, the conference aims to inspire strategic approaches for embedding technology into academia and industry. The goal is to enhance the quality of education and address the dynamic needs of a globalized world.
            With a strong emphasis on implementing Education 4.0 standards and the Outcome-Based Education (OBE) framework, now a cornerstone for higher education institutions, this conference invites original research papers on diverse topics which are mentioned in <a href="#Conference_Tracks" style={{ color: '#004080', textDecoration: 'underline', fontWeight: 500 }}>Conference Tracks</a>.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" className="btns">
            <Button
              component="a"
              href="images/Objectives.pdf"
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
                minWidth: '200px'
              }}
            >
              Conference Objectives
            </Button>
            <Button
              component="a"
              href="images/outcome.pdf"
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
                minWidth: '200px'
              }}
            >
              Expected Outcomes
            </Button>
            <Button
              component="a"
              href="images/THEFE 4.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: '20px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: 2,
                minWidth: '200px'
              }}
            >
              Call for Papers
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutConference; 