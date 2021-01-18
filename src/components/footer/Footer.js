import React from 'react';
import './Footer.scss'; 
import { Instagram, Github} from '../../assets/svg/Icons'; 

const Footer = () => {
  return (
      <>
        <footer className="footer-section">
          <div className="footer-contact-info">
            <h6>Questions?</h6>
            <a href="www.consupedia.se" target="_blank">www.consupedia.se</a>
            <p>
              <a href="mailto:f.vforsman@gmail.com">Mail</a>
            </p>
          </div>
            <div className="copyright">
              <h6>Fanny Värnbrink Forsman</h6>
              <a
                href="https://www.instagram.com/synnaf"
                title="Instagram"
                target="_blank"
                rel="norefferer"
                className="social--icon"
              >
                <Instagram />
              </a>
              <a
                href="https://www.github.com/synnaf"
                title="Github"
                target="_blank"
                rel="norefferer"
                className="social--icon"
              >
                <Github />
              </a>
  
            </div>

          
   
        </footer>
      </>

  );
}

export default Footer;