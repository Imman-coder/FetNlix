import React, { useState,useEffect } from 'react'
import logo from './logo.png'
import propic from './profile.png'
import './Nav.css'


function Nav() {
  const [alpla,handleAlpha] = useState("#11111100");

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 201){
        handleAlpha("#111");
      }
      else if (window.scrollY==0){
        handleAlpha("#11111100");
      }
      else {
        handleAlpha("#111111"+Math.round(((window.scrollY/200)*255)).toString(16).toUpperCase());
      }
    } );
  },[]);

  return (  
    <div className={`topbar`} style={{background:`${alpla}`}} >
        <img className='logoes' src={logo} alt="Fetnlix Logo" />
        <img className='profiles' src={propic} />
    </div>
  )
}

export default Nav