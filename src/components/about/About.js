import React, { useState } from 'react';
import Header from '../header/Header'; 
import './About.scss'; 


const About = (props) => {    
   
    console.log(props); //props is 'test', same as value in page
    const [showNotes, setShowNotes] = useState(false); 
    
    function showInfo() {
        //set timeout 
        //
        let menuInfo = document.getElementById('submenu__info'); 
        setShowNotes(!showNotes);

        if(showNotes == true) {
            console.log(menuInfo); 
            menuInfo.classList.add('--show'); 
        } else {
            menuInfo.classList.remove('--show');
        }
    }

  return (
      <>
        <section className="page">
            <Header props='About' /> 
            <section className="page__about">
            <div className="submenu">
                {/* add accordion for submenu */}
                <ul className="accordion">
                    <li className="accordion__item">
                        <a className="accordion__link" href="#" onClick={showInfo}>About</a>
                    </li>
                    <li className="accordion__item">
                        <a href="#" className="accordion__link">Our values</a>
                    </li>
                    <li className="accordion__item">
                        <a href="#" className="accordion__link">Contact</a>
                    </li>
                </ul>
                <button type="button" className={`btn ${props}`}>
                    Click
                </button>
            </div>

            {/* TODO: how should this be displayed? all at once? */}
            
                <div id="submenu__info">
                {/* add accordion for submenu */}
                    <span>Some info text</span>
                </div>

            </section>
        </section>
      </>
  );
}

export default About;