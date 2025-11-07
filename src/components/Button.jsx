import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Button = ({text,url}) => {
  const navigate = useNavigate();
  return (
    <div className='container-button-general'>
        <button onClick={()=>navigate(url)}>{text}</button>
    </div>
  )
}
