import './App.css';
import Slide1692 from '../components/navbar';
import TextSec1 from '../components/textsec1';
import TextSec2 from '../components/textsec2';
import conferencedata from "../data/conferenceData.json";
import DatesTable from '../components/dates_table';
import CommitteeSection from '../components/CommitteeSection';
import Committees from '../components/committes';
import { thaparLearnFellows, uqFellows } from '../data/committeeData';
import HeroSection from '../components/Landing';
import { Box, Container, Typography } from '@mui/material';
import ConferenceTracks from '../components/ConferenceTracks';
import Slide1693 from '../components/bottomblack';

function Home() {
  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#ABOUT CONFERENCE", label: "About" },
    { href: "#Organizers", label: "Our Team" },
    { href: "#Conference_Tracks", label: "Conference Tracks" },
    { href: "#contact", label: "Contact Us" },
    { href: "abstract.html", label: "Abstract / Submissions" },
    { href: "", label: "Schedule" }
  ];

  return (
    <>
     <Slide1692 data={conferencedata.navLinks} />
      <HeroSection />
     <Slide1693/>
      <TextSec1 data={conferencedata.about} />
      <TextSec2 data={conferencedata.tiet} />
      <DatesTable data={conferencedata.importantDates} />
      <ConferenceTracks tracks={conferencedata.tracks} />
      <Box id="Organizers" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            ORGANIZING COMMITTEE
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
    </>
  );
}

export default Home;
