import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss'

const Header = () => {

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className='header'>
        <div className="header_logo">
          <h1>Katy</h1>
        </div>

      <nav className= { active ? 'navbar active' : 'navbar' } >
        <ul>

            <div className="closed">
              <Close className='close' onClick={showMenu} />
            </div>

            <li>
              <Link to='/' > Home </Link>
            </li>

            <li>
              <Link to='/' > About </Link>
            </li>

            <li>
              <Link to='/' > Portfolio </Link>
            </li>

            <li>
              <Link to='/' > PAges </Link>
            </li>

            <li>
              <Link to='/' > Blog </Link>
            </li>

            <li>
              <Link to='/' > Contac </Link>
            </li>

        </ul>
      </nav>

      <div className="changer">
        <MenuOutlined className='menu' onClick={showMenu} />
      </div>

    </div>
  )
}

export default Header