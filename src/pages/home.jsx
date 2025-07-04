import './App.css';
import Navbar from '../components/navbar';
import TextSec1 from '../components/textsec1';
import TextSec2 from '../components/textsec2';
import TextSec3 from '../components/textsec3';
import conferencedata from "../data/conferenceData.json";
import DatesTable from '../components/dates_table';
import CommitteeSection from '../components/CommitteeSection';
import Committees from '../components/committes';
import { thaparLearnFellows, uqFellows,gs,convener,os,nit } from '../data/committeeData';
import HeroSection from '../components/Landing';
import { Box, Container, Typography } from '@mui/material';
import ConferenceTracks from '../components/ConferenceTracks';
import Bottombar from '../components/bottomblack';
import Slideshow from '../components/glimpses'; 
import ContactUs from '../components/contactUs';
import Chief from '../components/pcp';
import Marquee from '../components/Marquee';




function Home() {

  return (
    <>
      <Navbar data={conferencedata.navLinks} />
      <HeroSection />
      <Bottombar/>
<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, my: 4 }}>
  {/* Left-aligned logos */}
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Box
      component="img"
      src="/Springer_Nature.png"
      alt="Springer Nature"
      sx={{ width: 100, height: 'auto', borderRadius: 2 }}
    />
    <Box
      component="img"
      src="/springer-2.svg"
      alt="Springer 2"
      sx={{ width: 150, height: 'auto', borderRadius: 2 }}
    />
  </Box>

  {/* Right-aligned logos */}
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Box
      component="img"
      src="/tiet.png"
      alt="TIET"
      sx={{ width: 120, height: 'auto', borderRadius: 2 }}
    />
    <Box
      component="img"
      src="/nitttr.jpeg"
      alt="NITTTR"
      sx={{ width: 100, height: 'auto', borderRadius: 2 }}
    />
  </Box>
</Box>
<Marquee data={conferencedata.marqueeText}/>



      <Box id = "about">
        <TextSec1 data={conferencedata.about} />

      </Box>
      <TextSec2 data={conferencedata.tiet} />
      <TextSec3 data={conferencedata.nitttr} />
      <DatesTable data={conferencedata.importantDates} />
      <ConferenceTracks tracks={conferencedata.tracks} />

    <Box sx={{ background: '#ffffff' }}>
            <br/>
            <Container>
      <Typography> Abstract/Paper Submission link <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTHEC2025">Click Here</a> </Typography>

            </Container>
            </Box>
      
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
              Patrons
        </Typography>
      </Box>
      < Chief/>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Organizers
        </Typography>
        <Container maxWidth="lg">
          <CommitteeSection 
            title="Conveners"
            members={convener}
          />
          <CommitteeSection 
            title="Organizing Secretary"
            members={os}
          />
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
            Organizing Committee
          </Typography>
          <CommitteeSection 
          
            members={nit}
          />
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
