import React from 'react'
import SearchBar from '../searchBar'

import pokeball from '../../assets/images/pokeball.png'

import './styles.scss'

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
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
