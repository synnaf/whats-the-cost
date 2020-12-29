import React, { useState } from 'react';
import Header from '../header/Header'; 
import './About.scss'; 


const About = (props) => {    
   
    console.log(props); //props is 'test', same as value in page
    const [showNotes, setShowNotes] = useState(false); 
    
    // function showInfo() {
    //     setShowNotes(true);
    // }

  return (
      <>
      {/* ta emot props för vad man klickat på??? */}
        <Header props='About' /> 
        <section className="page">
            <section className="page__about">
            <div className="submenu">
                {/* add accordion for submenu */}
                <ul className="accordion">
                    <li className="accordion__item">
                        <a className="accordion__link" href="#" onClick={()=> {
                            setShowNotes(!showNotes);
                        }}>About</a>
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
            { showNotes ? 
                <div className="submenu--info">
                {/* add accordion for submenu */}
                    <span>Some info text</span>
                </div>
                : null
            }
            </section>
        </section>
      </>
  );
}

export default About;