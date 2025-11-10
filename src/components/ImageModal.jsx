import { useEffect } from 'react';
import React from 'react';

function ImageModal({ images = [], isOpen, initialIndex = 0, onClose }) {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = 'hidden'; // Evita scroll cuando abierto
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen, initialIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    if (!isOpen) return null;
    if (!images.length) return null;

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const next = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Galería de imágenes">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">&times;</button>

                <button className="modal-arrow left-arrow" onClick={prev} aria-label="Imagen anterior">&#10094;</button>

                <div className="image-wrapper">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={`../..${img}`}
                            alt={`Imagen ${idx + 1}`}
                            className={`modal-image ${idx === currentIndex ? 'active' : ''}`}
                            loading="lazy"
                            draggable="false"
                        />
                    ))}
                </div>

                <button className="modal-arrow right-arrow" onClick={next} aria-label="Siguiente imagen">&#10095;</button>
            </div>
        </div>
    );
}

export default ImageModal;
