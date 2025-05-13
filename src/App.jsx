import './App.css';
import Navbar from './components/navbar';
import TextSec1 from './components/textsec1';
import TextSec2 from './components/textsec2';
import conferencedata from "./data/conferenceData.json";
import DatesTable from './components/dates_table';
import Committees from './components/committes';
import HeroSection from './components/Landing';

function App() {
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
      <HeroSection />
      <Navbar navItems={navigationItems} />
      <TextSec1 data={conferencedata.about} />
      <TextSec2 data={conferencedata.tiet} />
      <DatesTable data={conferencedata.importantDates} />
      <Committees data={conferencedata.committees} />
    </>
  );
}

export default App;
