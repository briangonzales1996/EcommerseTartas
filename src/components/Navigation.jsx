import { Link } from 'react-router-dom';
import { use, useState } from 'react';
import React from 'react'
import TopHeader from './TopHeader';
import logo from "../../public/caligrafia.png"
export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navigationClick, setnavigationClick] = useState('');
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleClick = (e) => {
      
        setnavigationClick(e.target.id);
    }

    return (
        <>
            {/* Nav Desktop (igual al original) */}
            <div>
                <TopHeader displayBoolean={true}></TopHeader>
                <nav className="nav-desktop container">
                    <TopHeader displayBoolean={false}></TopHeader>

                    <ul>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "1" ? 'nav-desktop-click' : ''} id='1' to="/">INICIO</Link></li>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "2" ? 'nav-desktop-click' : ''} id='2' to="/productos">PASTELES</Link></li>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "3" ? 'nav-desktop-click' : ''} id='3' to="/contacto">CONTACTO</Link></li>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "4" ? 'nav-desktop-click' : ''} id='4' to="/acerca">NOSOTROS</Link></li>
                    </ul>

                </nav>

            </div>

            {/* Botón Hamburguesa para Móvil */}
            <button
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menú Modal Móvil */}
            {isMenuOpen && (
                <>

                    <div className="mobile-menu-overlay" onClick={closeMenu}>
                        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="close-btn"
                                onClick={closeMenu}
                                aria-label="Cerrar menú"
                            >
                                &times;
                            </button>
                            <ul>
                                <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                                <li><Link to="/productos" onClick={closeMenu}>Pasteles</Link></li>
                                <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
                                <li><Link to="/acerca" onClick={closeMenu}>Nosotros</Link></li>
                            </ul>
                        </div>
                    </div>

                </>
            )}


        </>


    )
}


