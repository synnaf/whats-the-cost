import React from 'react'; 
import './Menu.scss';  

const Menu = () => {
    return (
        <nav className="main-navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Search</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </nav>
    ); 
}

export default Menu; 