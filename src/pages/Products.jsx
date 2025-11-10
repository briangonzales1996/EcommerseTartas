import ProductCard from '../components/ProductCard.jsx';
import ImageModal from '../components/ImageModal.jsx';
import { useEffect, useState } from 'react';
import { CategoryItems } from '../components/CategoryItems.jsx';

import { orderImage } from '../MonckData/MonckData.js';
//console.log(newProducts)












function Products() {
    const [modalOpen, setModalOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [data, setData] = useState([]);
    let  images =[]




    const openModalAt = (index) => {
        setStartIndex(index);
        setModalOpen(true);
    };


    useEffect(() => {

        const getImages = async () => {
            const dataProduct = await orderImage()
            setData(dataProduct)
            
        }
        
        getImages();
    }, [])
    
       
            
            images = data && data.map(item =>item );
        
        
    
    

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