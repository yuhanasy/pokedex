import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const MenuList = ({ menuList }) => {
  return (
    <div className="menu-list">
      {menuList.map(item => (
        <NavLink to={`/${item.value}`} key={item.value}>
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default MenuList
