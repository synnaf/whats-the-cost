import React from 'react';
import './Footer.scss'; 

//lägg in classNames här, så att den hämtar in dem automatiskt? 

const Footer = () => {
  return (
      <>
        <footer className="footer-section">
        <div className="footer-logo">
              LOGO
            </div>
            <div className="footer-contact-info">
              <h6>Contact</h6>
              <ul>
                <li>
                  Name
                </li>
                <li>
                  Adress
                </li>
                <li>
                  Mail or so
                </li>
              </ul>
            </div>
            <div className="copyright">
              Copyright blablabla 
            </div>
        </footer>
      </>

  );
}

export default Footer;