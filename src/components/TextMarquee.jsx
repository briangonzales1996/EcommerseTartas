import React from 'react';


function TextMarquee({ text = "¡Bienvenido a Eccomerse! Tortas deliciosas y personalizadas para cada ocasión. ¡Descubre nuestros sabores únicos!" }) {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span> {/* Duplicado para loop infinito */}
        <span className="marquee-text">{text}</span> {/* Duplicado para loop infinito */}
      </div>
    </div>
  );
}

export default TextMarquee;
