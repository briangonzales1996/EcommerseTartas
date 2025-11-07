import React from 'react'
import useOnScreen from '../hooks/useOnScreen';
import { useState,useEffect } from 'react';

export const CardsAbout = ({ data, index }) => {
    // 2. Adjuntamos el hook al componente
    // 'ref' es el elemento DOM, 'isVisible' es el estado booleano
    const [ref, isVisible] = useOnScreen({
        threshold: 0.1 // Activar cuando el 10% del elemento sea visible
    });

    // 2. Definimos el valor del retraso inicial
    const initialDelay = `${index * 0.1}s`;

    // 3. Estado local para controlar el 'transitionDelay'
    const [delayStyle, setDelayStyle] = useState({ transitionDelay: initialDelay });

    useEffect(() => {
        if (isVisible) {
            // Calculamos el tiempo total que dura la animación + el retraso inicial:
            // Duración de la animación (0.6s) + Retraso específico del ítem
            const totalTime = 600 + (index * 100); // 600ms + (index * 100ms)

            // Usamos setTimeout para esperar a que la animación de entrada termine
            const timer = setTimeout(() => {
                // 5. Establecemos el transitionDelay a '0s' o lo eliminamos
                setDelayStyle({}); // Elimina el objeto de estilo en línea

                // Opcional: También podrías usar setDelayStyle({ transitionDelay: '0s' });

            }, totalTime);

            // Función de limpieza de useEffect: evita fugas de memoria si el componente se desmonta
            return () => clearTimeout(timer);
        }
    }, [isVisible, index]); // Se ejecuta solo cuando hasBeenVisible cambia o el índice cambia


    // 3. Clases CSS condicionales para la animación
    const animationClass = isVisible ? 'is-visible' : '';

    // El retraso secuencial se aplica aquí. Solo se activa si es visible.




    return (
        // 4. Adjuntamos la 'ref' al elemento DOM real que queremos observar
        <article
            className={`valor-card item-a-animar ${animationClass}`}
            style={delayStyle}
            aria-label={data.title}
            ref={ref}
        >
            <h3 className="valor-title">{data.title}</h3>
            <div className="valor-underline" />
            <p className="valor-description">
                {data.description}
            </p>
        </article>
    );
};


