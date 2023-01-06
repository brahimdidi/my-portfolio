import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './styles/navbar.css'

function Navbar() {
  let activeStyle = { textDecoration: "underline",textDecorationColor: "red"};
  return (
    <header className='header'>
      <img className='logo' src={logo} onClick = {() => window.location.reload} />
      <ul className='nav'>
          <NavLink
            to="/"
            className= "nav-link"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="projects"
            className= "nav-link"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            className='nav-link'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Contact me
          </NavLink>
      </ul>
    </header>
  )
}

export default Navbar