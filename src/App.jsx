import './App.css';
import Navbar from './components/navbar';
import AboutConference from './components/AboutConference';



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
      <AboutConference />
    </>
  );
}

export default App;
