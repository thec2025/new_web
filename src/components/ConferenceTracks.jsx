import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ConferenceTracks = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ 
      p: 3, 
      maxWidth: '1200px', 
      mx: 'auto',
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 2, 
          fontFamily: 'Playfair Display', 
          textAlign: 'center',
          color: '#1a237e',
          fontWeight: 600
        }}
      >
        CONFERENCE TRACKS
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          textAlign: 'justify',
          color: '#424242',
          maxWidth: '800px',
          mx: 'auto'
        }}
      >
        This conference invites original research papers on diverse topics as mentioned below-
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {data.map((track, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Accordion 
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ 
                height: '100%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: 0,
                },
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#1a237e' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: '#e8eaf6',
                  '&:hover': {
                    backgroundColor: '#c5cae9',
                  },
                  '&.Mui-expanded': {
                    backgroundColor: '#c5cae9',
                  }
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#1a237e'
                  }}
                >
                  {track.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
                <List sx={{ py: 0 }}>
                  {track.details.map((detail, idx) => (
                    <ListItem 
                      key={idx}
                      sx={{
                        borderBottom: idx !== track.details.length - 1 ? '1px solid #e0e0e0' : 'none',
                        '&:hover': {
                          backgroundColor: '#eeeeee'
                        }
                      }}
                    >
                      <ListItemText 
                        primary={detail}
                        sx={{
                          '& .MuiListItemText-primary': {
                            textAlign: 'justify',
                            color: '#424242',
                            fontSize: '0.95rem',
                            lineHeight: 1.5
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConferenceTracks; 