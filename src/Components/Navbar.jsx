import React from 'react';
import './Navbar.css';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2 className="header-navbar">My Portfolio</h2>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-icons">
        <div className="navbar-toggle">
          <label className="toggle-switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
        <a href="https://www.facebook.com/passamant.thonguthai" target="_blank" rel="noopener noreferrer" title="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://github.com/Tomahawk-shot" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;