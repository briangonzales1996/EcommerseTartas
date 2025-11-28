
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
        Nuestra pasión se centra en las exquisitas <strong>Tortas de Mary</strong>, creaciones únicas que son el corazón de nuestro servicio. Con más de 20 años de experiencia en el arte de la <strong>pastelería</strong>, garantizamos la más alta calidad y sabor tradicional en cada pedido. Nos especializamos en tartas para cada ocasión especial, incluyendo <strong>bodas</strong> elegantes, cumpleaños vibrantes, <strong>aniversarios</strong> románticos, celebraciones inolvidables de <strong>15 años</strong> y cualquier otro evento que merezca un toque dulce y memorable.
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
