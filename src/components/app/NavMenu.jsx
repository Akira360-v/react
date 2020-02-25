import React from 'react'

const NavMenu = props => {
  return (
    <ul className="NavMenu">
      <li>
        <a href={props.url}>{props.name}</a>
      </li>
    </ul>
  )
}

export default NavMenu
