import React from 'react'
import { Button } from './Button';
import { CardsAbout } from './CardsAbout';
import TitleAnimation from './TitleAnimation';

const datos = [
    {
        title: "Pasión",
        description: "Disfrutamos con nuestro trabajo y eso se ve reflejado en la calidad de nuestros productos, luchamos a diario por transmitir esa pasión en todo lo que hacemos.",
        id: 1
    },
    {
        title: "Vanguardismo",
        description: "Buscamos sorprender a nuestros clientes con una actitud proactiva, manteniendo la calidad de la materia prima por encima de todo.",
        id: 2
    },
    {
        title: "Compromiso",
        description: " Obramos con ética, responsabilidad, honestidad y disciplina. Somos una empresa comprometida con la sociedad.",
        id: 3
    },
]







function Feature() {
    const data = {
        title:"Bienvenido a Pastelería Mary",
        text:(<p className="acerca-description">
                Somos una <strong>repostería</strong> dedicada a endulzar los momentos más importantes de la vida de nuestros clientes. Nos especializamos en tartas para cada ocasión especial, incluyendo <strong>bodas</strong> elegantes, <strong>cumpleaños</strong> vibrantes,  <strong>aniversarios</strong> románticos, celebraciones inolvidables de <strong>15 años</strong> y cualquier otro evento que merezca un toque dulce y memorable.
            </p>)
    }
    return (
        <section className="acerca-section">

            <TitleAnimation data={data}/>
           
           

            <div className="valores-container">
                {
                    datos.map((item,index) => (
                        <CardsAbout data={item} key={item.id} index={index}/>
                    ))
                }
            </div>

            <Button text={"MÁS SOBRE NOSOTROS"} url={"./acerca"} />
        </section>
    );
}



export default Feature