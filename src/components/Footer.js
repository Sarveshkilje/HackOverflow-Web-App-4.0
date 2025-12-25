import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';

// CDN url for logo
// const logo = "https://hackoverflow3.blr1.cdn.digitaloceanspaces.com/assets/logos/3.0%20logo%202025.png";

// Local url for logo
// import logo from "../assets/img/3.0 logo 2025.png";
import logo from "../assets/img/HO 4.0/HO 4.0 assets/HO 4.0 Logo.png";

const Footer = () => {
  console.log("FOOTER LOADED V2");

  const socialLinks = [
    // {
    //   name: 'GitHub',
    //   icon: <FaGithub />,
    //   url: 'https://github.com/HackOverflow-1-0'
    // },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/hackoverflow3.0/'
    },
    {
      name: 'Youtube',
      icon: <FaYoutube />,
      url: 'https://google.com'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/hackoverflow3-0/'
    },
    {
      name: 'Discord',
      icon: <FaDiscord />,
      url: 'https://discord.gg/your-discord'
    }
  ];

  const quickLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Schedule', url: '/#schedule' },
    { name: 'Themes', url: '/#themes' },
    { name: 'Sponsors', url: '/#sponsors' },
    { name: 'Gallery', url: '/gallery' }
  ];

  return (
    <footer className="footer v2-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="HackOverflow Logo" />
          </div>
          <h3>HackOverflow 4.0</h3>
          <p>
            HackOverflow 4.0 is a premier 3 day national level hackathon organized by PHCET. 
            It's a celebration of innovation, collaboration, and technology.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Navigation Links</h4>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="quick-links">
            <li><a href="/docs/publicityBrochure.pdf" download="HO_4.0_Brochure.pdf">Publicity Brochure</a></li>
            <li><a href="/docs/SponsorshipBrochure.pdf" download="HO_4.0_Sponsorship_Brochure.pdf">Sponsorship Brochure</a></li>
            <li><a href="../docs/COC.pdf" download="Code_of_Conduct.pdf">Code of Conduct</a></li>
          </ul>
          <h4 style={{ marginTop: '1.5rem' }}>Venue</h4>
          <p>
            Pillai HOC College of Engineering and Technology, Rasayani, Maharashtra - 410207
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email: <a href="mailto:admin@hackoverflow.tech" style={{ color: 'inherit', textDecoration: 'none' }}>admin@hackoverflow.tech</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2026 HackOverflow 4.0 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
