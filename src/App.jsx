import './App.css';
import Navbar from './components/navbar';
import AboutSection from './components/AboutSection';
import conferenceData from './data/conference.json';


function App() {
  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#Organizers", label: "Our Team" },
    { href: "#Conference_Tracks", label: "Conference Tracks" },
    { href: "#contact", label: "Contact Us" },
    { href: "abstract.html", label: "Abstract / Submissions" },
    { href: "", label: "Schedule" }
  ];

  return (
    <>
      <Navbar navItems={navigationItems} />
      <AboutSection data={conferenceData} />
    </>
  );
}

export default App;
