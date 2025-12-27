import what from '../../public/icons-whatsapp.gif'
import gps from '../../public/icons-gps.png'
import face from '../../public/icons-facebook.png'
import { CardsAbout } from '../components/CardsAbout'
import TitleAnimation from '../components/TitleAnimation'
import Titlebackground from '../components/Titlebackground'
import ContactAplication from '../components/ContactAplication'

const urlNumber = 'https://wa.me/34611523675'
const urlNumber2 = 'https://wa.me/541132480408'
const frameSpanish = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.8501930976279!2d-3.7057869182403413!3d40.3809944894838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227ad9fee9ed3%3A0x501e18cd834ef3d2!2sC.%20Antonio%20Velasco%20Zazo%20%26%20C.%20de%20Nicol%C3%A1s%20S%C3%A1nchez%2C%20Usera%2C%2028026%20Madrid!5e0!3m2!1ses!2ses!4v1762639651892!5m2!1ses!2ses'
const frameArg = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.329010014735!2d-58.46839992415045!3d-34.671972290990226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc957604d79af%3A0x9a1003d54155c576!2sCorval%C3%A1n%20%26%20Avenida%20Argentina%2C%20C1439%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2ses!4v1764179625722!5m2!1ses!2ses'

const datos = [
  {
    title: "Usera,Nicolas Sanchez,Madrid",
    description: (<><i style={{ marginTop: 10 }} className="valor-description">"Horarios: De lunes a sabados de <span style={{ fontWeight: 900 }}>9:00 a 22:00</span> y domingos de <span style={{ fontWeight: 900 }}>9:00 a 13:00</span></i>
      <i style={{ marginTop: 10 }} className="valor-description"><span style={{ fontWeight: 900 }}>Tlf:</span><a style={{color:"#f8b4c4",fontWeight:800}} href={urlNumber}> 611342543</a></i></>),
    id: 1
  },
  {
    title: "Villa Lugano, Argentina Capital",
    description: (<><i style={{ marginTop: 10 }} className="valor-description">"Horarios: De lunes a sabados de <span style={{ fontWeight: 900 }}>9:00 a 22:00</span> y domingos de <span style={{ fontWeight: 900 }}>9:00 a 13:00</span></i>
      <i className="valor-description" style={{ marginTop: 10 }}><span style={{ fontWeight: 900 }}>Tlf:</span><a style={{color:"#f8b4c4",fontWeight:800}} href={urlNumber2}> 1132480408</a></i></>),
    id: 2
  },

]

const data = {
  title: "Conoce las zonas de retiro de su pedido",
  text: (<p className="acerca-description">
    Son dos tiendas que hemos abierto en el centro de Madrid España y otra en Argentina, Buenos Aires Capital para dar un mejor servicio a nuestros clientes.
  </p>)
}



function Contact() {

  return (
    <div className="container container-contact">

      <TitleAnimation data={data} />
      <div className="valores-container">
        {datos.map((item, index) => (
          <CardsAbout data={item} key={item.id} index={index} />
        ))}
      </div>

      <Titlebackground text={"Localización de nuestro sitio para las reservas por teléfono"} />

      <div className='container-location'>
        <div className='location'>
          <p><img src={gps} />Ubicación: Calle Nicolas Sanchez, Ciudad</p>
          <p><a href={urlNumber}><img src={what}></img></a> <a style={{color:"#f8b4c4",fontWeight:800}} href={urlNumber}>611523675</a></p>
          <p><img src={face} /> @eccomerse</p>
        </div>
        <div className='location'>
          <p><img src={gps} />Ubicación: Villa Lugano, Ordoñez</p>
          <p><a href={urlNumber2}><img src={what}></img></a> <a style={{color:"#f8b4c4",fontWeight:800}} href={urlNumber2}>1127106547</a></p>
          <p><img src={face} /> @eccomerse</p>
        </div>

      </div>


      {/* Mapa integrado (reemplaza con tu embed de Google Maps) */}
      <ContactAplication phone={'+34 912 345 678'} address={'Calle Francisco Abril 11, 28007 Madrid, España'} url={urlNumber} iframes={frameSpanish} title={'Visítanos en Madrid'}/>
      <ContactAplication phone={'+54 1132480408'} address={'Calle Ordoñez, Villa Lugano,Capital,Argentina '} url={urlNumber2} iframes={frameArg} title='Visítanos en Capital Buenos Aires'/>


      


      <Titlebackground text={"Contactactanos y reserva tu pedido ahora"}  />
      <form>
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" placeholder="Nombre" id='name' required />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id='email' required />
        <label htmlFor="feedback">Mensaje</label>
        <textarea placeholder="Mensaje" id='feedback' required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Contact;