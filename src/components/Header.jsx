import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '1rem', color: '#fff' }}>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about-contact">About / Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
