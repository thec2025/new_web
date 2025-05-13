import './App.css';
import TextSec1 from './components/textsec1';
import TextSec2 from './components/textsec2';
import conferencedata from "./data/conferenceData.json";
import DatesTable from './components/dates_table';
import Committees from './components/committes';
import HeroSection from './components/Landing';
import Slide1692 from './components/navbar';
import Slide1693 from './components/bottomblack';
function App() {


  return (
    <>
      <Slide1692 data={conferencedata.navLinks} />
      <HeroSection />
      <Slide1693/>
      <TextSec1 data={conferencedata.about} />
      <TextSec2 data={conferencedata.tiet} />
      <DatesTable data={conferencedata.importantDates} />
      <Committees data={conferencedata.committees} />
    </>
  );
}

export default App;
