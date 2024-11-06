import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo1 from './../../assets/image/logo.png';
import logo2 from './../../assets/image/logo-light.png';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
const [isOpen , setIsOpen] = useState(false)
const [isSecrol , setIsSecrol] = useState(false)
const handleopen = () => {
  setIsOpen(!isOpen)
} 
useEffect (()=>{
  window.addEventListener('scroll' ,handlesecrol)
})
const handlesecrol = ()=> {
  setIsSecrol(window.scrollY>0)
}
  return (
    <nav className={`MH-navbar ${isSecrol ? "Scrol" :""}`}>
      <div>
        <img src={`${isSecrol ? logo2 :logo1}`} alt="" />
      </div>
      <ul className={`MH-nav-Links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="work">Work</Link>
        </li>
        <li>
          <Link to = "contact" >Contact</Link>
        </li>
        {
          isOpen && (
            <li>
              <FontAwesomeIcon icon={faXmark} onClick={handleopen} />
            </li>
          )
        }
      </ul>
      <FontAwesomeIcon icon={faBars} className='MH-icon' onClick={handleopen} />
    </nav>
  )
}

export default NavBar