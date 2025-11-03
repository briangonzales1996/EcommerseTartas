import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
function Header() {
  return (
    <header>
    <TopHeader></TopHeader>
      <nav className="container">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Pasteles</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/acerca">Acerca de Mí</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;