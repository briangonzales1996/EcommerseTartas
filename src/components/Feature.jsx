import React from 'react'
import { Button } from './Button';
import { CardsAbout } from './CardsAbout';

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
    return (
        <section className="acerca-section">
            <h2 className="acerca-title">
                Bienvenido a <strong>Pastelería Mary</strong>
            </h2>
            <div className="acerca-underline" />
            <p className="acerca-description">
                Un concepto romántico de gastronomía delicada y deliciosa, para el deleite de los cinco sentidos. Nuestros valores reflejan el alma y la personalidad de nuestra Casa.
            </p>

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