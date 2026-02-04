import React from 'react'
import { Button } from './Button'

export default function HeroBannerFirst() {
    return (
        <section className="hero-banner-decake">
            <div className="hero-banner-decake-container">
                {/* Contenido de texto */}
                <div className="hero-banner-decake-content">
                    <div className="hero-banner-decake-badge">
                        <span className="hero-banner-decake-badge-icon">✨</span>
                        Pastelería Artesanal
                    </div>

                    <h1 className="hero-banner-decake-title">
                        Endulza Tus<br />
                        Momentos Especiales
                    </h1>

                    <p className="hero-banner-decake-description">
                        Creamos pasteles únicos y deliciosos para cada ocasión.
                        Ingredientes frescos, recetas tradicionales y un toque de amor
                        en cada creación.
                    </p>

                    <div className="hero-banner-decake-buttons">
                        <Button text={'🎂 Ver Productos'} url={"./productos"}/>
                        <Button text={'📞 Contáctanos'} url={"./contacto"}/>
                        
                    </div>

                    <div className="hero-banner-decake-stats">
                        <div className="hero-banner-decake-stat-item">
                            <div className="hero-banner-decake-stat-number">150+</div>
                            <div className="hero-banner-decake-stat-label">Productos</div>
                        </div>

                        <div className="hero-banner-decake-stat-item">
                            <div className="hero-banner-decake-stat-number">5000+</div>
                            <div className="hero-banner-decake-stat-label">Clientes</div>
                        </div>

                        <div className="hero-banner-decake-stat-item">
                            <div className="hero-banner-decake-stat-number">4.9</div>
                            <div className="hero-banner-decake-stat-label">Valoración</div>
                        </div>
                    </div>
                </div>

                {/* Imagen */}
                <div className="hero-banner-decake-image-wrapper">
                    <img
                        src="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/f8b97977-36f1-4feb-9008-afa91d790a00/Derivates/5beaac72-3441-4c7d-861c-195437f5861d.jpg"
                        alt="Deliciosos pasteles artesanales"
                        className="hero-banner-decake-image"
                    />
                    <div className="hero-banner-decake-award-badge">
                        <div className="hero-banner-decake-award-title">
                            🏆 Premio 2024
                        </div>
                        <div className="hero-banner-decake-award-subtitle">
                            Mejor Pastelería
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
