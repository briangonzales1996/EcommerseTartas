
import { CardsAbout } from "../components/CardsAbout";
const data = [
  {
    title: "Pasión",
    description: "Disfrutamos de nuestro trabajo al hacer las tortas y pasteles, y eso se refleja en la calidad y amor que ponemos en cada producto.",
    id: 1
  },
  {
    title: "Proactividad",
    description: " Buscamos sorprender a nuestros clientes de manera proactiva, innovando para mantenerlos contentos y siempre satisfechos.",
    id: 2
  },
  {
    title: "Compromiso",
    description: " Nos comprometemos con la hora de entrega respetando día y fecha preestablecidos, garantizando la puntualidad para tu mayor satisfacción.",
    id: 3
  },
]

function About() {
  return (
    <section className="about-section container" aria-label="Sobre nosotros">
      <h1 className="about-title">
        Bienvenido a <strong>Pasteles Mary</strong>
      </h1>
      <div className="about-underline" />
      <p className="about-description">
        Es dulce y salado, un concepto romántico de gastronomía delicada y deliciosa, para el deleite de los cinco sentidos. Nuestros valores reflejan el alma y la personalidad de nuestra Casa.
      </p>
      <div className="about-cards">
        {
          data.map((item, index) => (
            <CardsAbout data={item} key={item.id} index={index} />
          ))
        }
       
      </div>
    </section>
  );
}
export default About;
