import { useState, useEffect, useRef, use } from 'react';

/**
 * Hook para detectar si un elemento está visible en el viewport.
 * @param {object} options - Opciones para Intersection Observer (ej. { threshold: 0.1 })
 * @returns {[object, boolean]} - Un ref para adjuntar al elemento y un booleano 'isVisible'.
 */
const useOnScreen = (options) => {
    // 1. Ref para adjuntar al elemento DOM que queremos observar
    const elementRef = useRef(null);

    // 2. Estado para almacenar si el elemento es visible
    const [isVisible, setIsVisible] = useState(false);
    const [delay, setDelay] = useState(true)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Si el elemento es visible Y NUNCA antes se ha visto...
            if (entry.isIntersecting && !isVisible ) {
                setIsVisible(true); // 1. Marcamos el estado como visto
                // 2. IMPORTANTE: Hacemos que el observador deje de monitorear este elemento.
                observer.unobserve(entry.target);
                
            }
            
        }, options);

        // Guardamos una referencia al elemento actual (el <article>)
        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        // Función de limpieza: dejar de observar cuando el componente se desmonte
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options, isVisible]); // Dependencia de opciones para re-crear el observador si cambian

    // Devolvemos la referencia y el estado de visibilidad
    return [elementRef, isVisible];
};

export default useOnScreen;