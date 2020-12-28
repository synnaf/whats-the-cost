import React from 'react'; 
import './Menu.scss';  

const Menu = () => {

    const toggleMenu = () => {
        console.log('hekll'); 
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
                    <a className="nav__link">Menu</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link">Search</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link">Contact</a>
                </li>
            </ul>
        </nav>
    ); 
}

export default Menu; 