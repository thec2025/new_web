import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

interface CommitteeMemberCardProps {
  name: string;
}

const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({ name }) => {
  return (
    <StyledCard elevation={2}>
      <CardContent>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: 'text.secondary' }}
        >
          {name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CommitteeMemberCard; 