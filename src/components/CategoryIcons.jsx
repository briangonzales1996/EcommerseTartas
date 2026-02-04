import React, { use, useEffect, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { Button } from './Button';
import TitleAnimation from './TitleAnimation';
import { useNavigate } from 'react-router-dom';
import { BsCake2 } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { PiBabyBold } from "react-icons/pi";
import { BsFillGiftFill } from "react-icons/bs";
import { BsPersonStandingDress } from "react-icons/bs";
import { IoWineSharp } from "react-icons/io5";


const colorCategoryIcon = "#4a4a4a";
const colorFondIcon = "#f0f0f0";
const size = 20;

const categorias = [
  {
    id: 1,
    nombre: 'Cumpleaños',
    icon: (
      <div className='svg-icons' >
          <BsCake2/>
      </div>
    ),
  },
  {
    id: 2,
    nombre: 'Bodas',
    icon: (
       <div className='svg-icons' >
          <BsEmojiHeartEyes/>
      </div>
    ),
  },
  {
    id: 3,
    nombre: 'Bautismos',
    icon: (
      <div className='svg-icons' >
          <PiBabyBold/>
      </div>
    ),
  },
  {
    id: 4,
    nombre: 'Aniversarios',
    icon: (
      <div className='svg-icons' >
          <IoWineSharp/>
      </div>
    ),
  },
  {
    id: 5,
    nombre: 'Mis 15 años',
    icon: (
      <div className='svg-icons' >
          <BsPersonStandingDress/>
      </div>
    ),
  },
  {
    id: 6,
    nombre: 'Personalizada',
    icon: (
      <div className='svg-icons' >
          <BsFillGiftFill/>
      </div>
    ),
  },
];




const CategoryItem = ({ nombre, index,icon }) => {
  const navigate = useNavigate();
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
      onClick={()=>navigate('/productos')}
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
  const data = {
    title:"Respostería y pastelería mary (tartas)",
    text:(<p className='container-category-icons-text' >
        En <strong>Tortas Mary</strong> apostamos por hacer cada vez más accesible nuestra pastelería a todo aquel que quiera tener un pedacito de nosotros. Puedes hacer tu <strong>pedido por whapsapp</strong> y <strong>recoger en tienda</strong>, de lunes a domingo.
      </p>)
  }
  return (
    <section aria-label="Categorías de productos" className='container-category-icons'>
      <TitleAnimation data={data}/>
      
      
      <div className='category-icons-grid'>
        {categorias.map(({ id, nombre, icon },index) => (

          <CategoryItem key={id} nombre={nombre} icon={icon} index={index} />
          
        ))}
      </div>
      <Button text={"VER PASTELES"} url={"/productos"}/>
    </section>
  );
}




export default CategoryIcons;
