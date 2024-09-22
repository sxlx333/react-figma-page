import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../../assets/Title.svg';
import close from '../../assets/closeMenuLogo.png';
import open from '../../assets/openLogo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={style.headerContainer}>
                <img className={style.title} src={logo} alt="doctor care logo" />

                <button className={style.hamburgerMenu} onClick={toggleMenu}>
                    <img src={menuOpen ? close : open} alt="menu icon" />
                </button>

                <nav className={`${style.navigationMenu} ${menuOpen ? style.menuOpen : ''}`}>
                    <ul>
                        <li><a className={style.active} href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Depoimentos</a></li>
                    </ul>

                    <button className={style.mobileMenuButton}>AGENDAR CONSULTA</button>

                    {/* Add social media links */}
                    <div className={style.logoLinks}>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={youtube} alt="YouTube" /></a>
                    </div>


                </nav>

                {/* Place the button outside the navigation for desktop view */}
                <button className={style.headerButton}>AGENDAR CONSULTA</button>
            </header>
        </>
    );
};
