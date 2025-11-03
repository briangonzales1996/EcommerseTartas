// Función auxiliar para lazy loading o ampliación (puedes integrar con react-image-gallery si lo prefieres)
export const handleImageZoom = (imageSrc) => {
  // Lógica simple para abrir en modal (extiende si es necesario)
  window.open(imageSrc, '_blank');
};
