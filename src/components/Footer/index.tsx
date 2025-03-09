import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sukhmanpreet Singh Aulakh. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/SukhmanAulakh18" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sukhmanpreetsinghaulakh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;