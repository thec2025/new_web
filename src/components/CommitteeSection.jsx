import React from 'react';
import { Box, Typography } from '@mui/material';
import CommitteeMemberCard from './CommitteeMemberCard';
import styled from '@emotion/styled';

const SectionContainer = styled(Box)({
  marginBottom: '40px'
});

const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '20px'
});

const MembersContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'space-between'
});

const CommitteeSection = ({ title, members }) => {
  return (
    <SectionContainer>
      <SectionTitle variant="h6" component="h3">
        {title}
      </SectionTitle>
      <MembersContainer>
        {members.map((member, index) => (
          <CommitteeMemberCard
              key={index}
              member={member}
              forceTwoPerRow={members.length === 4}
            />
          ))}

      </MembersContainer>
    </SectionContainer>
  );
};

export default CommitteeSection; 