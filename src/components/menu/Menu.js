import React from 'react'; 
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Menu.scss';  
import heart from '../../assets/svg/heart-shape-rounded-edges-variant-with-white-details.svg';
import { LogoIcon } from '../../assets/svg/Icons';


const Menu = () => {

    const toggleMenu = () => {
        let mobileMenu = document.getElementById("nav_menu");
        mobileMenu.classList.toggle("isToggled");
    }; 

    return (
        <nav className="nav" id="nav_menu"> 
            <div className="brand-logo">
                <a href="/">
                    <LogoIcon />
                </a>
            </div>
            <button 
                className="menu__toggle" 
                aria-controls="nav_menu" 
                aria-expanded="false"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className="nav__list">
                <li className="nav__item" onClick={toggleMenu}>
                    <NavLink to="/" className="nav__link" activeClassName="active">
                        Start
                    </NavLink>
                </li>
                <li className="nav__item" onClick={toggleMenu}>
                    <NavLink to="/search" className="nav__link" activeClassName="active">
                        Search
                    </NavLink>
                </li>
                <li className="nav__item" onClick={toggleMenu}>
                    <NavLink to="/about" className="nav__link" activeClassName="active">
                        About
                    </NavLink> 
                </li>
                <li className="nav__item" onClick={toggleMenu}>
                    <NavLink to="/likes" className="nav__link" activeClassName="active">         
                        <img src={heart} alt="heart icon" className="icon__like"/>
                    </NavLink> 
                </li>
            </ul>
        </nav>
    ); 
}

export default Menu; 