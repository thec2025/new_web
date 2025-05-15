import './App.css';
import Navbar from '../components/navbar';
import TextSec1 from '../components/textsec1';
import TextSec2 from '../components/textsec2';
import conferencedata from "../data/conferenceData.json";
import DatesTable from '../components/dates_table';
import CommitteeSection from '../components/CommitteeSection';
import Committees from '../components/committes';
import { thaparLearnFellows, uqFellows,goh,gs,convener,os } from '../data/committeeData';
import HeroSection from '../components/Landing';
import { Box, Container, Typography } from '@mui/material';
import ConferenceTracks from '../components/ConferenceTracks';
import Bottombar from '../components/bottomblack';
import Slideshow from '../components/glimpses'; 
import ContactUs from '../components/contactUs';
import Chief from '../components/pcp';

function Home() {

  return (
    <>
      <Navbar data={conferencedata.navLinks} />
      <HeroSection />
      <Bottombar/>
      <Box id = "about">
        <TextSec1 data={conferencedata.about} />
      </Box>
      <TextSec2 data={conferencedata.tiet} />
      <DatesTable data={conferencedata.importantDates} />
      <ConferenceTracks tracks={conferencedata.tracks} />
      <Box sx={{py:4}}>
        <Container maxWidth = "lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Guest Speakers
          </Typography>
          <CommitteeSection
            members = {gs} />
        </Container>
      </Box >
      <Box id="Organizers">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
              ORGANIZERS
        </Typography>
      </Box>
      < Chief/>
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <CommitteeSection 
            title="Conveners"
            members={convener}
          />
          <CommitteeSection 
            title="Organizing secretary"
            members={os}
          />
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
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
      <Committees data={conferencedata.committees} />
      <Box sx={{ mt: 8 }}>
  <Slideshow data={conferencedata.glimpse} />
</Box>

          <ContactUs data={conferencedata.footer} />
    </>

  );
}

export default Home;
