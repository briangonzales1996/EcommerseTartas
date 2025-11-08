import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <>
            {/* Nav Desktop (igual al original) */}
            <nav className="nav-desktop container">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Pasteles</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/acerca">Acerca de Mí</Link></li>
                </ul>
            </nav>
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
                            <li><Link to="/acerca" onClick={closeMenu}>Acerca de Mí</Link></li>
                        </ul>
                    </div>
                </div>
            )}


        </>


    )
}


