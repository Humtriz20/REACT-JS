import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>Email: your.email@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Connect With Me</h3>
          {/* <div className="social-icons">
            <a href="https://twitter.com/yourtwitterhandle"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/yourinstagramhandle/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/yourusername"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/yourprofile"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:your.email@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

