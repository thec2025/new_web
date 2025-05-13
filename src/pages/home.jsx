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
import ContactUs from '../components/contactUs';

function Home() {

  return (
    <>
      <Navbar data={conferencedata.navLinks} />
      <HeroSection />
      <Bottombar/>
      <TextSec1 data={conferencedata.about} />
      <TextSec2 data={conferencedata.tiet} />
      <DatesTable data={conferencedata.importantDates} />
      <ConferenceTracks tracks={conferencedata.tracks} />
      <Box sx={{py:4}}>
        <Container maxWidth = "lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Guest of Honor
          </Typography>
          <CommitteeSection
            members = {goh} />
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Guest Speaker
          </Typography>
          <CommitteeSection
            members = {gs} />
        </Container>
      </Box>
      <Box id="Organizers" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            ORGANIZERS
          </Typography>
          <CommitteeSection 
            title="Conveners"
            members={convener}
          />
          <CommitteeSection 
            title="Organizing Secratary"
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
          <ContactUs data={conferencedata.footer} />
    </>

  );
}

export default Home;
