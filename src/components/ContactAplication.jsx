import React from 'react'

function ContactAplication({title='',phone,url,address,iframes}) {



    const handleSendMessage = () => {
        window.location.href =url;
    };


    return (
        <section className="contact-home-section">
            <div className="contact-home-header">
                <h2 className="contact-home-title">{title}</h2>
                <p className="contact-home-subtitle">
                    Encuentra nuestra pastelería y descubre el sabor de la calidad artesanal
                </p>
            </div>

            <div className="contact-home-container">
                {/* Información de Contacto */}
                <div className="contact-home-info-card">
                    <h3 className="contact-home-info-card-title">Información de Contacto</h3>

                    <div className="contact-home-details">
                        {/* Dirección */}
                        <div className="contact-home-item">
                            <div className="contact-home-icon">📍</div>
                            <div className="contact-home-content">
                                <div className="contact-home-label">Dirección</div>
                                <div className="contact-home-text">
                                    {address}
                                </div>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="contact-home-item">
                            <div className="contact-home-icon">📞</div>
                            <div className="contact-home-content">
                                <div className="contact-home-label">Teléfono</div>
                                <div className="contact-home-text">
                                    <a href={url}>{phone}</a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="contact-home-item">
                            <div className="contact-home-icon">✉️</div>
                            <div className="contact-home-content">
                                <div className="contact-home-label">Email</div>
                                <div className="contact-home-text">
                                    <a href="brianjose00@gmail.com">brianjose00@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Horario */}
                        <div className="contact-home-item">
                            <div className="contact-home-icon">🕐</div>
                            <div className="contact-home-content">
                                <div className="contact-home-label">Horario</div>
                                <div className="contact-home-text contact-home-schedule-list">
                                    <div>Lunes - Viernes: 8:00 - 20:00</div>
                                    <div>Sábado: 9:00 - 21:00</div>
                                    <div>Domingo: 10:00 - 18:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="contact-home-send-message-btn" onClick={handleSendMessage}>
                        <span>💬</span>
                        Enviar Mensaje
                    </button>
                </div>

                {/* Mapa */}

                <div className="contact-home-map-container">
                    <iframe
                        style={{ width: "100%", height: "100%" }}
                        src={iframes}
                        allowFullScreen=""
                        loading="lazy"
                        
                    ></iframe>
                </div>
            </div>
        </section>


    )
}

export default ContactAplication