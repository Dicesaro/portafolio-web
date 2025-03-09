import { useState } from 'react'
import '../styles/header.css'
import menuIcon from '../assets/btn-menu.svg'
import closeIcon from '../assets/icon-close.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <div
        className="menu-icon"
        onClick={toggleMenu}
        style={{ display: menuOpen ? 'none' : 'block' }}
      >
        <img src={menuIcon} alt="Abrir menú" />
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <div className="close-icon" onClick={toggleMenu}>
          <img src={closeIcon} alt="Cerrar menú" />
        </div>
        <ul>
          <li>
            <a href="#profile" onClick={toggleMenu}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#experiencias" onClick={toggleMenu}>
              Experiencia laboral
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#tecnologias" onClick={toggleMenu}>
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#logros" onClick={toggleMenu}>
              Logros
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
