import React, { useState } from "react";
import logo from "../logo.png"

function Navbar({ navItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="main-nav-section">
      <div className="navbar" role="banner" id="top">
        <div className="container main-nav">
          <div className="tieL">
            <a href="https://www.thapar.edu/" className="brand">
              <img src= {logo} alt="TIET Logo" className="logoimage" />
            </a>
          </div>

          <div 
            id="hamburger" 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            &#9776;
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="main-nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="nav-register-wrapper">
              <a href="register.html" className="register-link">Register</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;