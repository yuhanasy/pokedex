import React from 'react'

import './styles.scss'

const MenuList = ({ menuList }) => {
  return (
    <div className="menu-list">
      {menuList.map(item => (
        <div key={item.value}>{item.label}</div>
      ))}
    </div>
  )
}

export default MenuList
