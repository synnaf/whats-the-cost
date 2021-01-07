import React, { useState } from 'react';
import Header from '../header/Header'; 
import './About.scss'; 

const About = (props) => {    
    console.log(props); //props is 'test', same as value in page
    const [showNotes, setShowNotes] = useState(false); 
    
    function showInfo() {
        //set timeout 
        let menuInfo = document.getElementById('test'); 
        setShowNotes(!showNotes);

        if(showNotes == true) {
            menuInfo.classList.add('test'); 
            // menu.classList.add('--show');
            test();  
        } else {
            menuInfo.classList.remove('test');
            // menu.classList.remove('--show'); 
        }
    }; 

    // const icon = document.querySelector('.icon');
    const arrow = document.querySelector('.arrow');

    const test = () => {
        console.log('test animation'); 
        arrow.animate([
            {width: '100%'},
            {width: '50%'},
            {width: '0%'}
        ],
        {
            duration: 700,
            iterations: Infinity
        });
    };

    return (
        <>
            <section className="page">
                <Header props='About' /> 
                <section className="page__about">
                    <div className="submenu">
                        {/* add accordion for submenu */}
                        <ul className="accordion">
                            <li className="accordion__item" id="test">
                                <a className="accordion__link" href="#" onClick={showInfo}>About</a>
                                <div class="icon" onClick={showInfo}>
                                    <div class="arrow"></div>
                                </div>
                            </li>
                            <li className="accordion__item">
                                <a href="#" className="accordion__link" onClick={showInfo}>Our values</a>
                                <div class="icon" onClick={showInfo}>
                                    <div class="arrow"></div>
                                </div>
                            </li>
                            <li className="accordion__item">
                                <a href="#" className="accordion__link" onClick={showInfo}>Contact</a>
                                <div class="icon" onClick={showInfo}>
                                    <div class="arrow"></div>
                                </div>
                            </li>
                        </ul>
                        <button type="button" className={`btn ${props}`}>
                            Click
                        </button>
                    </div>
                    {/* TODO: how should this be displayed? all at once? */}
                    {
                        showNotes ? 
                        <div id="submenuInfo" className="submenu__info">
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