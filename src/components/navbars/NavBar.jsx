
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navbar.css'

const NavButton = ({ text, onClickHandler }) => (
  <span className="nav-button" onClick={onClickHandler}>
    {text}
  </span>
)

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
}


export const Navbar = () => {
  const navigate = useNavigate();
  const [navVisible, setNavVisible] = useState(false);

  return (
    <nav className="diesel-nav">
  {/* Menú para móviles - Estilo DIESEL */}
  <button 
    className="diesel-mobile-button"
    onClick={() => setNavVisible(!navVisible)}
    aria-label="Menú"
  >
    <span className="diesel-menu-line"></span>
    <span className="diesel-menu-line"></span>
    <span className="diesel-menu-line"></span>
  </button>
  
  <div className={`diesel-nav-buttons ${navVisible ? 'diesel-visible' : ''}`}>
    <NavButton text="INICIO" onClickHandler={() => navigate('/')} />
    <NavButton text="PUBLICACIONES" onClickHandler={() => navigate('/publicaciones')} />
  </div>
</nav>
  )
}
