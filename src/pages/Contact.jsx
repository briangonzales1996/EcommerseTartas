function Contact() {
  return (
    <div className="container container-contact">
      <h1>Contacto</h1>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>Ubicación: Calle Nicolas Sanchez, Ciudad</p>
      <p>Teléfono: +123 456 7890</p>
      <p>Redes: @eccomerse</p>
      {/* Mapa integrado (reemplaza con tu embed de Google Maps) */}
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.8501930976279!2d-3.7057869182403413!3d40.3809944894838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227ad9fee9ed3%3A0x501e18cd834ef3d2!2sC.%20Antonio%20Velasco%20Zazo%20%26%20C.%20de%20Nicol%C3%A1s%20S%C3%A1nchez%2C%20Usera%2C%2028026%20Madrid!5e0!3m2!1ses!2ses!4v1762639651892!5m2!1ses!2ses"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
export default Contact;