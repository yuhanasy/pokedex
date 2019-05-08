import React from 'react'
import './styles.scss'
import pokeball from '../../assets/images/pokeball.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img className="logo-img" src={pokeball} alt="Pokedex" />
          <div className="logo-text">Pokedex</div>
        </div>
        <div className="menu">
          <div>Menu</div>
          <div>Search</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
