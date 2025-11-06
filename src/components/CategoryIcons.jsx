import React, { use, useEffect, useState } from 'react';
import useOnScreen from '../hooks/UseOnScreen';
import { Button } from './Button';
const colorCategoryIcon = "#4a4a4a";
const colorFondIcon = "#f0f0f0";

const categorias = [
  {
    id: 1,
    nombre: 'Desayunos',
    icon: (
      <svg width="100" height="100" fill={colorFondIcon} stroke={colorCategoryIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3 7h18M4 7V4h4v3M4 7h16l-2 11H6L4 7z" />
        <path d="M16 7v4H8V7" />
      </svg>
    ),
  },
  {
    id: 2,
    nombre: 'Salados',
    icon: (
      <svg width="100" height="100" fill={colorFondIcon} stroke={colorCategoryIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: 3,
    nombre: 'Bollería',
    icon: (
      <svg width="100" height="100" fill={colorFondIcon} stroke={colorCategoryIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    id: 4,
    nombre: 'Bombonería',
    icon: (
      <svg width="100" height="100" fill={colorFondIcon} stroke={colorCategoryIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
  },
  {
    id: 5,
    nombre: 'Especialidades',
    icon: (
      <svg width="100" height="100" fill={colorFondIcon} stroke={colorCategoryIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2" />
      </svg>
    ),
  },
  {
    id: 6,
    nombre: 'Tartas y postres',
    icon: (
      <svg width="100" height="100" fill={colorFondIcon} stroke={colorCategoryIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M21 12c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4 0-1.37.77-2.54 1.9-3.18M12 3v3m0 10v3m0-6a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3z" />
      </svg>
    ),
  },
];




const CategoryItem = ({ nombre, index,icon }) => {
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
      ref={ref}
      tabIndex="0"
      className={`item-a-animar ${animationClass}`}
      style={delayStyle}
      key={index}
      aria-label= {nombre}
      
    >
      <div className='icons-wrapper' >{icon}</div>
      <h3 >{nombre}</h3>
      <div className='icons-lineal' />

    </article>
  );
};






function CategoryIcons() {

  return (
    <section aria-label="Categorías de productos" className='container-category-icons'>
      <h2 className='container-category-icons-title'>Pastelería y Confitería en Madrid <strong>La Mallorquina</strong></h2>
      <p className='container-category-icons-text' >
        En <strong>La Mallorquina</strong> apostamos por hacer cada vez más accesible nuestra pastelería a todo aquel que quiera tener un pedacito de nosotros. Puedes hacer tu <strong>pedido online</strong>, con <strong>envío a domicilio</strong> o para <strong>recoger en tienda</strong>, de lunes a domingo.
      </p>
      <div className='category-icons-grid'>
        {categorias.map(({ id, nombre, icon },index) => (

          <CategoryItem key={id} nombre={nombre} icon={icon} index={index} />
          
        ))}
      </div>
      <Button text={"VER PASTELES"} />
    </section>
  );
}




export default CategoryIcons;
