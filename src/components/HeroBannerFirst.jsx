import React from 'react'

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
                        <button className="hero-banner-decake-btn hero-banner-decake-btn-primary">
                            🎂 Ver Productos
                        </button>
                        <button className="hero-banner-decake-btn hero-banner-decake-btn-secondary">
                            📞 Contáctanos
                        </button>
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
                        src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=600&fit=crop"
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
