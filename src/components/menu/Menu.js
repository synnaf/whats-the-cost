import React from 'react'; 
import './Menu.scss';  

const Menu = () => {

    const toggleMenu = () => {
        let mobileMenu = document.getElementById("nav_menu");
        mobileMenu.classList.toggle("isToggled");
    }; 

    return (
        <nav className="nav" id="nav_menu">   {/* add class --toggled */}
            <button 
                className="menu__toggle" 
                aria-controls="primary-menu" 
                aria-expanded="false"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className="nav__list">
                <li className="nav__item">
                    <a className="nav__link" href="/">Menu</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/search">Search</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/about">About</a>
                </li>
            </ul>
        </nav>
    ); 
}

export default Menu; 