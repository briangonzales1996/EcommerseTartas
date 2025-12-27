import React, { useState } from 'react';

const TestimonialsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "María González",
            location: "Madrid, España",
            image: "https://i.pravatar.cc/150?img=5",
            rating: 5,
            text: "La tarta de chocolate que pedí para el cumpleaños de mi hija fue absolutamente perfecta. El sabor era increíble y la presentación superó todas mis expectativas. ¡Definitivamente volveré a pedir!"
        },
        {
            id: 2,
            name: "Carlos Ramírez",
            location: "Barcelona, España",
            image: "https://i.pravatar.cc/150?img=12",
            rating: 5,
            text: "Excelente servicio y productos de primera calidad. Las tartas personalizadas son una obra de arte. Recomiendo Decake al 100% para cualquier celebración especial."
        },
        {
            id: 3,
            name: "Ana Martínez",
            location: "Valencia, España",
            image: "https://i.pravatar.cc/150?img=9",
            rating: 5,
            text: "No puedo estar más feliz con mi pedido. La tarta de boda fue el centro de atención en nuestra celebración. El equipo de Decake es muy profesional y atento."
        },
        {
            id: 4,
            name: "Javier López",
            location: "Sevilla, España",
            image: "https://i.pravatar.cc/150?img=14",
            rating: 5,
            text: "La mejor pastelería artesanal de Madrid sin duda. Cada detalle está cuidado al máximo y el sabor es incomparable. ¡Totalmente recomendable!"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>

            <section className="testimonials-section">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="testimonials-subtitle">
                        Testimonios reales de clientes satisfechos con nuestros productos
                    </p>
                </div>

                <div className="testimonials-container">
                    <div className="testimonials-slider">
                        <button
                            className="slider-button slider-button-prev"
                            onClick={prevTestimonial}
                            aria-label="Testimonio anterior"
                        >
                            ‹
                        </button>

                        <div className="testimonials-track">
                            <div
                                className="testimonials-wrapper"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="testimonial-card">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="testimonial-avatar"
                                        />

                                        <div className="testimonial-rating">
                                            {[...Array(testimonial.rating)].map((_, index) => (
                                                <span key={index} className="star">★</span>
                                            ))}
                                        </div>

                                        <p className="testimonial-text">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="testimonial-author">{testimonial.name}</div>
                                        <div className="testimonial-location">{testimonial.location}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="slider-button slider-button-next"
                            onClick={nextTestimonial}
                            aria-label="Siguiente testimonio"
                        >
                            ›
                        </button>
                    </div>

                    <div className="testimonials-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToTestimonial(index)}
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSlider;