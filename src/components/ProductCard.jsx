import { useState } from 'react';
function ProductCard({ product,openModalAt,i }) {
  
  

  return (
    <>



      <div className="product-card">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => openModalAt(i)}
          loading="lazy"
        />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {/* Nota: Sin precios, como solicitado */}
      </div>
      

    </>
  );
}
export default ProductCard;