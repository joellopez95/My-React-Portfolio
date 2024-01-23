import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 fixed-bottom">
      <div className="container">
        {/* Icons linked to GitHub, LinkedIn */}
        <a href="https://github.com/joellopez95" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Adjust the size using "2x" or other values */}
        </a>
        <a href="https://www.linkedin.com/in/jlopezsa95/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        {/* Replace this line with your own copyright information */}
        <p className="mb-0">© 2024 Joel Lopez</p>
      </div>
    </footer>
  );
};

export default Footer;
