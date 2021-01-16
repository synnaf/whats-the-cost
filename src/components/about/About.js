import React, { useState } from 'react';
import Header from '../header/Header'; 
import Info from './Info'; 
import './About.scss'; 

const About = (props) => {    
    const [info, setInfo] = useState('');  

    function displayInfo(e) { 
        setInfo(e.target.innerHTML); 
        let element = document.getElementById('submenu');
        console.log(element); 
        element.classList.remove('hide'); 
        //toggle class instead? or do an if/else 
    }; 

    return (
        <>
            <section className="page">
                <Header props='About' /> 
                <section className="page__about">
                    <div className="submenu">
                        <ul className="accordion">
                            <li className="accordion__item">
                                <a className="accordion__link" 
                                    onClick={(e) => displayInfo(e)}
                                >
                                    About
                                </a>
                            </li>
                            <li className="accordion__item">
                                <a className="accordion__link" 
                                    onClick={(e) => displayInfo(e)}
                                >
                                    The ConsuValue
                                </a>
                            </li>
                            <li className="accordion__item">
                                <a className="accordion__link" 
                                    onClick={(e) => displayInfo(e)}
                                >
                                    Contact
                                </a>
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