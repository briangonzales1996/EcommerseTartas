import React, { useEffect, useState } from 'react';
import { orderImage } from '../MonckData/MonckData';





function CarouselImage() {
    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);


    const getData = async () => {
        const req = await orderImage();
        const newData = req.filter(item=>item.carrousel===true)
        setData(newData)
    }


    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        console.log(currentIndex)
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };



    useEffect(() => {
        if (data.length > 0) {
            const id = setInterval(() => {
                nextSlide()
            }, 4000)

            return () => {
                clearInterval(id);
            }
        }
        getData();


    }, [data.length, nextSlide])









    return (

        data.length > 0 && (

            <div className="carousel-container">
                <div className="carousel">
                    <button className="arrow left-arrow" onClick={prevSlide} aria-label="Imagen anterior">&#10094;</button>


                    <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {data.map((item) => (
                            <div key={item.id} className="slide">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="carousel-image"
                                />
                                <div className="slide-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>



                    <button className="arrow right-arrow" onClick={nextSlide} aria-label="Siguiente imagen">&#10095;</button>
                </div>
                <div className="dots">
                    {data.map((item, idx) => (
                        <button
                            key={item.id}
                            className={`dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Ir a ${item.title}`}
                        ></button>
                    ))}
                </div>
            </div>

        )

    );
}

export default CarouselImage;
