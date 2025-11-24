import { Button } from "../components/Button";
import CarouselImage from "../components/CarouselImage";
import CategoryIcons from "../components/CategoryIcons";
import Feature from "../components/Feature";
import Servicios from "../components/Services";
import Titlebackground from "../components/Titlebackground";
import TextMarquee from "../components/TextMarquee";

function Home() {
  return (
    <>
    <TextMarquee text='ATENCIÓN LOS PEDIDOS DE HACEN CON ANTICIPACIÓN'/>
    <div className="container home-hero">
      <h1 >Pasteleria Mary</h1>
      <p >Descubre nuestras deliciosas tortas, perfectas para cualquier ocasión.</p>
      
      
        <Button text={"RESERVAR AHORA"} url={"./contacto"}/>
   
      
      
    </div>
    <Servicios/>
    <CategoryIcons/>
    <CarouselImage/>
    <Titlebackground/>
    <Feature/>
    </>
    
  );
}
export default Home;
