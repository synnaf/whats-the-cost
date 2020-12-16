import React from 'react';
import './About.scss'; 


const About = () => {
  return (
    <section className="about-container">
        <h2 className="subpage-title">About</h2>
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
            <button type="button">
                Click
            </button>
        </div>
        <div className="placeholder">
            Placeholder img
        </div>
        </section>
        <div className="text-placeholder">
            <p>
                Here is some text 
            </p>
        </div>
    </section>
  );
}

export default About;