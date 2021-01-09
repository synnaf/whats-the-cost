import React, { useState, useReducer } from 'react';
import Header from '../header/Header'; 
import './About.scss'; 

const About = (props) => {    
    console.log(props); //props is 'test', same as value in page
    let defaultValue =''; 
    const [showNotes, setShowNotes] = useState(false); 
    const [info, setInfo] = useReducer( 
        (state, newState) => ({ ...state, ...newState}), 
        defaultValue //startvärdet på vårt state   
    );  

    function update(e) { 
        //detta item måste vara accordion__link med rätt html-value, annars funkar det inte 
        let clickedItem = e.target.innerHTML; 
        console.log('clicke ditem', clickedItem); 

        setInfo({['t']: e.target.innerHTML }); //this should be toggled??

        
        animateArrow(e.target);
    }; 

    function animateArrow(el) {
        console.log('recieve', el); 
        el.classList.toggle('--active'); 
    }; 

    return (
        <>
            <section className="page">
                <Header props='About' /> 
                <section className="page__about">
                    <div className="submenu">
                        <ul className="accordion">
                            <li className="accordion__item" id="test">
                                <button className="accordion__link" onClick={update}>
                                    About

                                </button>
                                <div className="icon">
                                        <div className="arrow"></div>
                                </div>
                                {
                                    info.t == 'About' ?
                                        <div id="submenuInfo" className="submenu__info">
                                            <span>Some info text 1. 
                                                And some more info text. And some more info text.
                                                And some more info text
                                            </span>
                                        </div>
                                    : null
                                }

                            </li>
                            <li className="accordion__item">
                                <a className="accordion__link" onClick={update}>Our values
                                    <div className="icon">
                                        <div className="arrow"></div>
                                    </div>
                                </a>
                                {
                                    info.t == 'Our values' ?
                                        <div id="submenuInfo" className="submenu__info">
                                            <span>Some info text 2</span>
                                        </div>
                                    : null
                                }
                            </li>
                            <li className="accordion__item">
                                <a className="accordion__link" onClick={update}>Contact
                                <div className="icon">
                                    <div className="arrow"></div>
                                </div>
                                </a>
                                {
                                    info.t == 'Contact' ? 
                                        <div id="submenuInfo" className="submenu__info">
                                            <span>Some info text 3</span>
                                        </div>
                                    : null
                                }
                            </li>
                        </ul>
                        {/* <button type="button" className={`btn ${props}`}>
                            Click
                        </button> */}
                    </div>
                </section>
            </section>
        </>
    );
}

export default About;