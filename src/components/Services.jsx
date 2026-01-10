import React from 'react';
import useOnScreen from '../hooks/useOnScreen'
import { useState,useEffect } from 'react';

/* Iconos SVG simples incluidos inline para no depender de librerías externas. 
   Puedes reemplazarlos por tus propios iconos o usar una librería (ej. react-icons). */
const colorIcon = "#f8b4c4";
const serviciosData = [
    {
        id: 1,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Zm.5-14h-1v6l5.25 3.15.5-.84-4.75-2.81Z" />
            </svg>
        ),
        text: "Envío inmediato o programado",
    },
    {
        id: 2,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 2a2 2 0 0 0-2 2v2h-.5A1.5 1.5 0 0 0 2 7.5v11A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 6H20V4a2 2 0 0 0-2-2Zm0 4V4h12v2Zm13.5 6H4v5h15.5Z" />
            </svg>
        ),
        text: "Recogida en tienda",
    },
    {
        id: 3,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 7a5 5 0 0 1 5 5v4h1.5a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1 0-1H8v-4a5 5 0 0 1 5-5Zm0-3a8 8 0 0 0-8 8v4H4a.5.5 0 0 0 0 1h16a.5.5 0 0 0 0-1h-1v-4a8 8 0 0 0-8-8Z" />
            </svg>
        ),
        text: "Abierto de lunes a domingo",
    },
    {
        id: 4,
        icon: (
            <svg width="48" height="48" fill={colorIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1a9 9 0 0 0-9 9c0 8 9 13 9 13s9-5 9-13a9 9 0 0 0-9-9Zm.5 13h-1v-4h1Zm0 4h-1v-2h1Z" />
            </svg>
        ),
        text: "Pago rápido y 100% seguro",
    },
];


const CategoryItem = ({ nombre, index, icon,textColor }) => {
    
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
        //agregamos un div mas
        <div
            style={delayStyle }
            ref={ref}
            tabIndex="0"
            className={`item-a-animar ${animationClass}`}
            aria-label={nombre}

        >
            <div style={styles.servicio}
            ref={ref}
            tabIndex="0"
            className={`item-a-animar ${animationClass}`}
            aria-label={nombre}
            
            >
                <div style={styles.iconWrapper}>{icon}</div>
            <p style={{ ...styles.text, color: textColor }}>{nombre}</p>
            </div>
            
        </div>




    );
};





function Servicios({ textColor = '', backGround = '' }) {

    return (
        <section aria-label="Servicios de la tienda" style={{ ...styles.wrapper, backgroundColor: backGround }} >
            <div style={styles.container}>

                {serviciosData.map(({ id, icon, text },index) => (
                    
                    <CategoryItem icon={icon} index={index} nombre={text} key={id} textColor={textColor}/>
                ))}

            </div>
        </section>
    );
}

const styles = {
    wrapper: {

        padding: '40px 10px',
    },
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 30,
    },
    servicio: {
        flex: '1 1 180px',
        maxWidth: 220,
        textAlign: 'center',

    },
    iconWrapper: {
        marginBottom: 15,

    },
    text: {
        fontWeight: '600',
        fontSize: '1rem',
        lineHeight: 1.3,

    },
};

export default Servicios;
