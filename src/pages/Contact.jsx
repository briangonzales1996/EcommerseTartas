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
      <p>Ubicación: Calle Ficticia 123, Ciudad</p>
      <p>Teléfono: +123 456 7890</p>
      <p>Redes: @eccomerse</p>
      {/* Mapa integrado (reemplaza con tu embed de Google Maps) */}
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4a32f7b2b0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
export default Contact;