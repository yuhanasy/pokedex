import React from 'react'

import './styles.scss'

export const Layout = ({ children }) => {
  return <div className="layout">{children}</div>
}

export const Grid = ({ children }) => {
  return <div className="grid">{children}</div>
}
