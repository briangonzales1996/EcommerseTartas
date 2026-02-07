import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

import TopHeader from './TopHeader';
import logo from "../../public/caligrafia.png"
import { useContext } from 'react';
import { ContextCreate } from '../Context/MyContext';




const dataLi =  [
    
    { id: 1, name: 'Ver todo',category:'' },
    { id: 2, name: 'Cumpleaños',category:'cumpleaños' },
    { id: 3, name: 'Bodas',category:'boda' },
    { id: 5, name: 'Mis 15 años',category:'15años'},
    { id: 6, name: 'Aniversario',category:'aniversario'},
    { id: 7, name: 'Personalizada',category:'personalizada'},
    
];



export function Navigation() {
    const { selectCategory,setSelectCategory,setSelected } = useContext(ContextCreate);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navigationClick, setnavigationClick] = useState('');
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleClick = (e) => {
        setnavigationClick(e.target.id);
    }

    const handleCategorySelect = (item) =>{
        navigate("./productos")
        setIsMenuOpen(false)
        setSelectCategory(item.category);
        setSelected(item.id)
    }

    

    return (
        <>
            {/* Nav Desktop (igual al original) */}
            <div>
                <TopHeader displayBoolean={true}></TopHeader>
                <nav className="nav-desktop container">
                    <TopHeader displayBoolean={false}></TopHeader>

                    <ul>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "1" ? 'nav-desktop-click' : ''} id='1' to="/">INICIO</Link></li>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "2" ? 'nav-desktop-click' : ''} id='2' to="/productos">PASTELES</Link></li>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "3" ? 'nav-desktop-click' : ''} id='3' to="/contacto">CONTACTO</Link></li>
                        <li onClick={(e) => handleClick(e)}><Link className={navigationClick == "4" ? 'nav-desktop-click' : ''} id='4' to="/acerca">NOSOTROS</Link></li>
                    </ul>

                </nav>

            </div>

            {/* Botón Hamburguesa para Móvil */}
            <button
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-label="Abrir menú de navegación"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menú Modal Móvil */}
            {isMenuOpen && (
                <>

                    <div className="mobile-menu-overlay" onClick={closeMenu}>
                        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="close-btn"
                                onClick={closeMenu}
                                aria-label="Cerrar menú"
                            >
                                &times;
                            </button>
                            <ul>
                                <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                                <li>
                                    <Link to="/productos" onClick={closeMenu}>Pasteles</Link>
                                    <div style={{ display: "flex",flexDirection:"column",gap:10 }}>
                                        {
                                            dataLi.map(item=>(
                                                <i onClick={()=>handleCategorySelect(item)} key={item.id}>{item.name}</i>
                                            ))
                                        }
                                        
                        
                                    </div>

                                </li>

                                <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
                                <li><Link to="/acerca" onClick={closeMenu}>Nosotros</Link></li>
                            </ul>
                        </div>
                    </div>

                </>
            )}


        </>


    )
}


