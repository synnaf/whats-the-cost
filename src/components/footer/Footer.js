import React from 'react';
import './Footer.scss'; 

//lägg in classNames här, så att den hämtar in dem automatiskt? 

const Footer = () => {
  return (
      <>
        <footer className="footer-section">
          {/* <div className="footer-logo">
                LOGO
          </div> */}
          <div className="footer-contact-info">
            <h6>Questions?</h6>
            <p>Fanny Värnbrink Forsman</p>
            <adress>
              <a href="mailto:f.vforsman@gmail.com">Mail</a>
            </adress>
          </div>
            <div className="copyright">
              <h6>2021</h6>
              <a href="www.consupedia.se" target="_blank">www.consupedia.se</a>
            </div>
        </footer>
      </>

  );
}

export default Footer;