import ProductCard from '../components/ProductCard.jsx';
import ImageModal from '../components/ImageModal.jsx';
import { useEffect, useState } from 'react';
import { CategoryItems } from '../components/CategoryItems.jsx';

import { orderImage } from '../MonckData/MonkData.js';
//console.log(newProducts)





const products = [
    { id: 1, name: 'Bautismo Dorada', category: "bautismo", description: 'Personalizada para eventos', image: '../../public/bautismo-dorado.jpeg' },
    { id: 2, name: 'Bautismo Celesete', category: "bautismo", description: 'Personalizada para eventos', image: '../../public/bautismo-celeste.jpeg' },
    { id: 3, name: 'Bautismo Rosa', category: "bautismo", description: 'Personalizada para eventos', image: '../../public/bautismo-rosa.jpeg' },
    { id: 5, name: 'Boda Salmon', category: "boda", description: 'Personalizada para eventos', image: '../../public/boda-salmon.jpeg' },
    { id: 6, name: 'Boda para 200 personas', category: "boda", description: 'Personalizada para eventos', image: '../../public/boda-200-persona.jpeg' },
    { id: 7, name: 'Aniversario celeste', category: "aniversario", description: 'Tarta para 200 persones para aniversario o boda', image: '../../public/celeste-7-tortas.jpeg' },
    { id: 8, name: 'Bautismo de Mickey', description: 'Tarta Personalizada para 150 personas', image: '../../public/bautismo-mickey.jpeg' },
    { id: 9, name: 'Tortas figura cuadrada', category: "aniversario", description: 'Personalizada para eventos', image: '../../public/bautismo-cuadrados.jpeg' },
    { id: 10, name: 'Familiar 2 pisos', category: "cumpleaños", description: 'Tarta de 2 pisos para 50 personas', image: '../../public/familiar-2pisos.jpeg' },
    { id: 11, name: 'Tarta Personalizada Boca', category: "cumpleaños", description: 'Tarta personalizada para 30 personas', image: '../../public/boca-escudo.jpeg' },
    { id: 12, name: 'Tarta Personalizada Bolivar', category: "cumpleaños", description: 'Hecha a tu medida.', image: '../../public/bolivar-escudo.jpeg' },

    // Agrega más productos aquí
];







function Products() {
    const [modalOpen, setModalOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [data, setData] = useState([]);
    let  images




    const openModalAt = (index) => {
        setStartIndex(index);
        setModalOpen(true);
    };


    useEffect(() => {

        const getImages = async () => {
            const dataProduct = await orderImage();
            setData(dataProduct)
            
        }
        
        getImages();
    }, [])
    images = data && data.map(item => item.image);

    return (
        <>
            <div className="container containerProducts">
                <CategoryItems />
                <h1>Nuestros Productos</h1>
                <div className="gallery">
                    {data && data.map((product, index) => (
                        <ProductCard key={product.id} product={product} openModalAt={openModalAt} i={index} />
                    ))}
                </div>
            </div>
            <ImageModal
                images={images}
                isOpen={modalOpen}
                initialIndex={startIndex}
                onClose={() => setModalOpen(false)}
            />
        </>


    );
}
export default Products;