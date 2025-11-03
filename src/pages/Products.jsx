import ProductCard from '../components/ProductCard.jsx';
const products = [
    { id: 1, name: 'Torta Temática', description: 'Personalizada para eventos.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
    { id: 2, name: 'Torta Personalizada', description: 'Hecha a tu medida.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
     { id: 2, name: 'Torta Personalizada', description: 'Hecha a tu medida.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
      { id: 2, name: 'Torta Personalizada', description: 'Hecha a tu medida.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
       { id: 2, name: 'Torta Personalizada', description: 'Hecha a tu medida.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
        { id: 2, name: 'Torta Personalizada', description: 'Hecha a tu medida.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
         { id: 2, name: 'Torta Personalizada', description: 'Hecha a tu medida.', image: 'https://img-global.cpcdn.com/recipes/a858667915d70d11/680x781cq80/torta-de-cumpleanos-foto-principal.jpg' },
    // Agrega más productos aquí
];
function Products() {
    return (
        <div className="container containerProducts">
            <h1>Nuestros Productos</h1>
            <div className="gallery">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
export default Products;