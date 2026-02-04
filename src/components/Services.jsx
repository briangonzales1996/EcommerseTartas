import React from 'react';
import useOnScreen from '../hooks/useOnScreen'
import { useState,useEffect } from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineHourglass } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";

/* Iconos SVG simples incluidos inline para no depender de librerías externas. 
   Puedes reemplazarlos por tus propios iconos o usar una librería (ej. react-icons). */
const colorIcon = "#f8b4c4";
const serviciosData = [
    {
        id: 1,
        icon: (
            <AiOutlineClockCircle color={colorIcon} size={50}/>
        ),
        text: "Envío inmediato o programado",
    },
    {
        id: 2,
        icon: (
            <AiOutlineShop color={colorIcon} size={50}/>
        ),
        text: "Recogida en tienda",
    },
    {
        id: 3,
        icon: (
            <AiOutlineHourglass color={colorIcon} size={50}/>
        ),
        text: "Abierto de lunes a domingo",
    },
    {
        id: 4,
        icon: (
            <AiOutlineCreditCard color={colorIcon} size={50}/>
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
