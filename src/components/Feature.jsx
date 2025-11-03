import React from 'react'
import { Button } from './Button';

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
                <article className="valor-card">
                    <h3 className="valor-title">Pasión</h3>
                    <div className="valor-underline" />
                    <p className="valor-description">
                        Disfrutamos con nuestro trabajo y eso se ve reflejado en la calidad de nuestros productos, luchamos a diario por transmitir esa pasión en todo lo que hacemos.
                    </p>
                </article>

                <article className="valor-card">
                    <h3 className="valor-title">Vanguardismo</h3>
                    <div className="valor-underline" />
                    <p className="valor-description">
                        Buscamos sorprender a nuestros clientes con una actitud proactiva, manteniendo la calidad de la materia prima por encima de todo.
                    </p>
                </article>

                <article className="valor-card">
                    <h3 className="valor-title">Compromiso</h3>
                    <div className="valor-underline" />
                    <p className="valor-description">
                        Obramos con ética, responsabilidad, honestidad y disciplina. Somos una empresa comprometida con la sociedad.
                    </p>
                </article>
            </div>

            <Button text={"MÁS SOBRE NOSOTROS"}/>
        </section>
    );
}



export default Feature