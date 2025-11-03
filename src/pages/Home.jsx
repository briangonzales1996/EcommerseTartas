import { Button } from "../components/Button";
import CategoryIcons from "../components/CategoryIcons";
import Feature from "../components/Feature";
import Servicios from "../components/Services";
import Titlebackground from "../components/Titlebackground";

function Home() {
  return (
    <>
    <div className="container home-hero">
      <h1 >Pasteleria Mary</h1>
      <p >Descubre nuestras deliciosas tortas, perfectas para cualquier ocasión.</p>
      
      
        <Button text={"RESERVAR AHORA"}/>
   
      
      
    </div>
    <Servicios/>
    <CategoryIcons/>
    <Titlebackground/>
    <Feature/>
    </>
    
  );
}
export default Home;
