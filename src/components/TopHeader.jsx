import React from 'react'
import maryPastel from "../../public/maryPastel.png"
import logo from "../../public/caligrafia.png"
import { Link } from 'react-router-dom';

function TopHeader({displayBoolean=true}) {
  return (
    <div>
        <div className={`containerTopHeader ${displayBoolean?'containerTopHeader-boolean':''}`}>
                
                <Link to={"/"}><div className='containerLogoText' ><img className='logoText' src={maryPastel} alt="logo pastel" /></div></Link>
                <Link to={"/"}><div className='containerCaligrafia'><img src={logo} alt="tartas mary" /></div></Link>
        </div>
        
    </div>
  )
}

export default TopHeader