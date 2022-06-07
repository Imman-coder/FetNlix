import React, { useState,useEffect } from 'react'
import logo from './logo.png'
import propic from './profile.png'
import './Nav.css'


function Nav() {
  const [show,handleShow]=useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 100){
        handleShow(true);
      }
      else handleShow(false);
    } );
  },[]);

  return (  
    <div className={`topbar ${show && "nav_black"}`} >
        <img className='logoes' src={logo} alt="Fetnlix Logo" />
        <img className='profiles' src={propic} />
    </div>
  )
}

export default Nav