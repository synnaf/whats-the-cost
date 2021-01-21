import React, { useState } from 'react';
import Header from '../header/Header'; 
import Info from './Info'; 
import './About.scss'; 

const About = (props) => {    
    const [info, setInfo] = useState('');  

    function displayInfo(e) { 
        setInfo(e.target.innerHTML); 
        let element = document.getElementById('submenu');
        element.classList.remove('hide'); 
    }; 

    return (
        <>
            <section className="page">
                <Header props='About' /> 
                <section className="page__about">
                    <div className="submenu">
                        <ul className="accordion">
                            <li className="accordion__item">
                                <button className="accordion__link" 
                                    onClick={(e) => displayInfo(e)}
                                >
                                    About
                                </button>
                            </li>
                            <li className="accordion__item">
                                <button className="accordion__link" 
                                    onClick={(e) => displayInfo(e)}
                                >
                                    The ConsuValue
                                </button>
                            </li>
                            <li className="accordion__item">
                                <button className="accordion__link" 
                                    onClick={(e) => displayInfo(e)}
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="submenu--active hide" id="submenu">
                        <Info info={info} />
                    </div>
                </section>
            </section>
        </>
    );
}

export default About;