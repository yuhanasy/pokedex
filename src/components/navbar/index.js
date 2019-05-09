import React from 'react'
import SearchBar from '../searchBar'
import MenuList from '../menuList'

import pokeball from '../../assets/images/pokeball.png'

import './styles.scss'

const menuList = [
  {
    value: 'cards',
    label: 'All Cards',
  },
  {
    value: 'types',
    label: 'Types',
  },
  {
    value: 'subtypes',
    label: 'Subtypes',
  },
  {
    value: 'supertypes',
    label: 'Supertypes',
  },
]

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img className="logo-img" src={pokeball} alt="Pokedex" />
          <div className="logo-text">Pokedex</div>
        </div>
        <div className="menu">
          <MenuList menuList={menuList} />
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
