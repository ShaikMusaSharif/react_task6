import React from 'react';
import backgroundImg from './p4.jpg';

function Footer() {
  const footerStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '20px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Align content to the center vertically
    alignItems: 'flex-start', // Align content to the left
  };

  const contactStyle = {
    fontSize: '2.5rem', // Increased font size
  };

  const contactLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '10px',
  };

  const socialLinksStyle = {
    marginTop: '20px',
  };

  const socialLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 20px',
    fontSize: '2rem',
  };

  return (
    <footer style={footerStyle}>
      <div className="contact-details">
        <h2 style={contactStyle}>Contact Details</h2>
        <ul>
          <li>
            <strong>Email:</strong>
            <a href="mailto:shaikmusa7890@gmail.com" style={contactLinkStyle}>shaikmusa7890@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong>
            <a href="tel:+918639070246" style={contactLinkStyle}>+91 8639070246</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/mohammad-musa-sharif-shaik-0a92a6284/" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>LinkedIn Profile</a>
          </li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/ShaikMusaSharif" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>GitHub Profile</a>
          </li>
        </ul>
      </div>
      <div className="social-links" style={socialLinksStyle}>
        <h2 style={contactStyle}>Follow Me</h2>
        <ul>
          <li><a href="https://www.facebook.com/profile.php?id=100030810543490" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Facebook</a></li>
          <li><a href="https://instagram.com/musa_shaik_45?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
