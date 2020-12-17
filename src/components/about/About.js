import React from 'react';
import Header from '../header/Header'; 
import './About.scss'; 


const About = (props) => {    
   
    console.log(props); 

  return (
      <>
        <Header props='About' />
        <section className="page-container">
            <section className="about-info">
            <div className="submenu">
                {/* add accordion for submenu */}
                <ul className="accordion">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Our values</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button type="button" className={`btn ${props}`}>
                    Click
                </button>
            </div>
            <div className="placeholder">
                Placeholder img
            </div>
            </section>
            <div className="yellow-section">
                <p>
                    Here is some text 
                </p>
            </div>
        </section>
      </>
  );
}

export default About;