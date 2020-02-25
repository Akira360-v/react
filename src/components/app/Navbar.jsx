import React from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="navbar">
          <Logo />
          <nav>
            <NavMenu url="/" name="home" />
            <NavMenu url="/layout" name="layout" />
            <NavMenu url="/next" name="next" />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
