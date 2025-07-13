import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
    <nav className="navbar">
      <h1 className="logo">Hari's Portfolio</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;