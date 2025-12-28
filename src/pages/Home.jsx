import { Button } from "../components/Button";
import CarouselImage from "../components/CarouselImage";
import CategoryIcons from "../components/CategoryIcons";
import Feature from "../components/Feature";
import Servicios from "../components/Services";
import Titlebackground from "../components/Titlebackground";
import TextMarquee from "../components/TextMarquee";
import ContactAplication from "../components/ContactAplication";
import TestimonialsSlider from "../components/TestimonialsSlider";
import HeroBannerFirst from "../components/HeroBannerFirst";

const urlNumber = 'https://wa.me/34611523675'
const urlNumber2 = 'https://wa.me/541132480408'
const frameSpanish = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.8501930976279!2d-3.7057869182403413!3d40.3809944894838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227ad9fee9ed3%3A0x501e18cd834ef3d2!2sC.%20Antonio%20Velasco%20Zazo%20%26%20C.%20de%20Nicol%C3%A1s%20S%C3%A1nchez%2C%20Usera%2C%2028026%20Madrid!5e0!3m2!1ses!2ses!4v1762639651892!5m2!1ses!2ses'
const frameArg = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.329010014735!2d-58.46839992415045!3d-34.671972290990226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc957604d79af%3A0x9a1003d54155c576!2sCorval%C3%A1n%20%26%20Avenida%20Argentina%2C%20C1439%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2ses!4v1764179625722!5m2!1ses!2ses'


function Home() {
  
  return (
    <>
    <TextMarquee text='ATENCIÓN LOS PEDIDOS DE HACEN CON ANTICIPACIÓN'/>

    {
      <div className="container home-hero">
      <h1>Tartas Mary (Tortas)</h1>
      <p >Descubre nuestras deliciosas tortas, perfectas para cualquier ocasión.</p>
      
      
        <Button text={"RESERVAR AHORA"} url={"./contacto"}/>
      
      
      
    </div>
    }

    
    

    <Servicios textColor={'#f8b4c4'} backGround={'#262626'}/>
    <CategoryIcons/>
    
    <Titlebackground text={"Gran variedad de modelos adaptandose a tus gustos"}/>
    <CarouselImage/>
    <Titlebackground text={"Calidad, experiencia y tradición desde 2000"}/>
    <Feature/>
    <Titlebackground text={"Has tu reserva por Whatsapp"}/>
    <ContactAplication phone={'+34 912 345 678'} address={'Calle Francisco Abril 11, 28007 Madrid, España'} url={urlNumber} iframes={frameSpanish} title={'Visítanos en Madrid'}/>
    <Servicios textColor={"#f8b4c4"} backGround="#262626"/>
    <TestimonialsSlider/>

    </>
    
  );
}
export default Home;
