import React from 'react';

import logo from '../assets/img/logo.png';
import icon from '../assets/img/logo-instagram.svg';
import plane from '../assets/img/paper-plane-outline.svg';
import compass from '../assets/img/compass-outline.svg';
import heart from '../assets/img/heart-outline.svg';
import person from '../assets/img/person-outline.svg';


const Navbar = () => {
    return (
        <div className='header'>
            <div className='navbar'>
                <div className="left">
                    <img className="ion-icon" src={icon} alt="icon" />
                    <div className="border" />
                    <img id="logo" src={logo} alt="logo" />
                </div>

                <input type="text" placeholder='Pesquisar' />

                <div className="right">
                    <img src={plane} alt="plane" className="ion-icon" />
                    <img src={compass} alt="compass" className="ion-icon" />
                    <img src={heart} alt="heart" className="ion-icon" />
                    <img src={person} alt="person" className="ion-icon" />
                </div>
            </div>
            <div className="navbar-mobile">
                <img className="ion-icon" src={icon} alt="icon" />
                <img id="logo" src={logo} alt="logo" />
                <img src={plane} alt="plane" className="ion-icon" />
            </div>
        </div>
    )
}

export default Navbar;