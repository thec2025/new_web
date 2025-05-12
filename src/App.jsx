import './App.css';
import Navbar from './components/navbar';
import TextSec1 from './components/textsec1';
import TextSec2 from './components/textsec2';
import conferencedata from "./data/conferenceData.json";
import DatesTable from './components/dates_table';
import Committees from './components/committes';
import ConferenceTracks from './components/ConferenceTracks';

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

  const conferenceTracks = [
    {
      title: "Experiential Learning",
      details: [
        "Impact of Experiential Learning on Student's Education",
        "Implementing Best Practices in Experiential Learning",
        "Successful Experiential Learning Case Studies",
        "Creating Experiential Learning Opportunities",
        "Evaluating Experiential Learning Effectiveness",
        "Innovations in Education Enhancing Scientific Literacy"
      ]
    },
    {
      title: "Research & Innovation",
      details: [
        "Emerging Technologies in Education",
        "Innovative Teaching Methodologies",
        "Research in STEM Education",
        "Digital Learning Innovations",
        "Educational Technology Trends",
        "Future of Learning Systems"
      ]
    }
  ];

  return (
    <>
      <Navbar navItems={navigationItems} />
      <TextSec1 data={conferencedata.about} />
      <TextSec2 data={conferencedata.tiet} />
      <DatesTable data={conferencedata.importantDates} />
      <ConferenceTracks data={conferenceTracks} />
      <Committees data={conferencedata.committees} />
    </>
  );
}

export default App;
