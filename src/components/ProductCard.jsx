import { useState } from 'react';
function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ transform: isExpanded ? 'scale(1.5)' : 'scale(1)', transition: 'transform 0.3s' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {/* Nota: Sin precios, como solicitado */}
    </div>
  );
}
export default ProductCard;