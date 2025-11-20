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
    const [selectCategory,setSelectCategory] = useState('')
    let  images =[]




    const openModalAt = (index) => {
        setStartIndex(index);
        setModalOpen(true);
    };

    const getCategoryProduct  = (category) =>{
        
        
        setSelectCategory(category)
        
    }


    useEffect(() => {

        const getImages = async () => {

            const dataProduct = await orderImage()
            if(selectCategory==''){
                setData(dataProduct)
            }
            else{
                const  newData = dataProduct.filter(item=>item.category==selectCategory);
                setData(newData)
            }
            
            
        }
        
        getImages();
    }, [selectCategory])
    
       
            
        images = data && data.map(item =>item.image);
        
        
    
    

    return (
        <>
            <div className="container containerProducts">
                <CategoryItems setCategory={getCategoryProduct}/>
                
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