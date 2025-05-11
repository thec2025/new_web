import './App.css';
import Navbar from './components/navbar';
import TextSec1 from './components/textsec1';
import conferencedata from "./data/conferenceData.json"



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
      <Navbar navItems={navigationItems} />
      <TextSec1 data={conferencedata.about} />
    </>
  );
}

export default App;
