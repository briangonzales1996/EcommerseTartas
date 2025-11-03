
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
        <article className="about-card">
          <h2 className="card-title">Pasión</h2>
          <div className="card-underline" />
          <p className="card-text">
            Disfrutamos de nuestro trabajo al hacer las tortas y pasteles, y eso se refleja en la calidad y amor que ponemos en cada producto.
          </p>
        </article>
        <article className="about-card">
          <h2 className="card-title">Compromiso</h2>
          <div className="card-underline" />
          <p className="card-text">
            Nos comprometemos con la hora de entrega respetando día y fecha preestablecidos, garantizando la puntualidad para tu mayor satisfacción.
          </p>
        </article>
        <article className="about-card">
          <h2 className="card-title">Proactividad</h2>
          <div className="card-underline" />
          <p className="card-text">
            Buscamos sorprender a nuestros clientes de manera proactiva, innovando para mantenerlos contentos y siempre satisfechos.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;
