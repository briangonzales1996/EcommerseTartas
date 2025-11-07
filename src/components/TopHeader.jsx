import React from 'react'
import maryPastel from "../../public/maryPastel.png"
function TopHeader() {
  return (
    <div>
        <div className='containerTopHeader'>
                
                <div className='containerLogoText'><img className='logoText' src={maryPastel} alt="logo pastel" /></div>

        </div>
        
    </div>
  )
}

export default TopHeader