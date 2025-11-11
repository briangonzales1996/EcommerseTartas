import React from 'react'
import maryPastel from "../../public/maryPastel.png"
import logo from "../../public/caligrafia.png"

function TopHeader() {
  return (
    <div>
        <div className='containerTopHeader'>
                
                <div className='containerLogoText'><img className='logoText' src={maryPastel} alt="logo pastel" /></div>
                <div className='containerCaligrafia'><img src={logo} alt="tartas mary" /></div>
        </div>
        
    </div>
  )
}

export default TopHeader