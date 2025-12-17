import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';


// =========================================================
// 1. COMPONENTE DE CARGA
// =========================================================
const CurtainLoader = ({ children }) => {
  // Estado para saber si la carga ha finalizado (y activar la animación)
  const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
    // Simulamos que la página termina de cargar en 1.2 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Animación para el panel izquierdo (se mueve a -100%)
  const leftSide = useSpring({
    transform: isVisible ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 120, friction: 20 }
  });

  // Animación para el panel derecho (se mueve a 100%)
  const rightSide = useSpring({
    transform: isVisible ? 'translateX(0%)' : 'translateX(100%)',
    config: { tension: 120, friction: 20 }
  });

  // Animación de opacidad para el contenido de la web
  const contentFade = useSpring({
    opacity: isVisible ? 0 : 1,
    delay: 300
  });
  return (
    <div className="curtain-container">
      {/* Mitad Izquierda */}
      <animated.div style={leftSide} className="curtain-panel curtain-left">
        <div className="curtain-line" />
      </animated.div>

      {/* Mitad Derecha */}
      <animated.div style={rightSide} className="curtain-panel curtain-right">
        <div className="curtain-line" />
      </animated.div>

      {/* Tu página web real */}
      <animated.div style={contentFade} className="main-content">
        {children}
      </animated.div>
    </div>
  );
};





export default CurtainLoader;