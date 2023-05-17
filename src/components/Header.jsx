import { useState } from 'react'

import styles from './styles/Header.module.css'

export function Header({ black }){

  const [ openMenuMobile, setOpenMenuMobile ] = useState(false)

  function handleToggleMenu(event){
    setOpenMenuMobile(!openMenuMobile)
  }

  return(
    <header className={black || openMenuMobile ? styles.black : ''}>
      <nav className={openMenuMobile ? styles.active : ''}>
        <button className={styles.btn_mobile} onClick={handleToggleMenu}>
          <span className={styles.hamburger}></span>
        </button>
        <ul className={styles.menu}>
          <li  onClick={handleToggleMenu}>
            <a href="#start">Início</a>
          </li>
          <li  onClick={handleToggleMenu}>
            <a href="#About">Sobre</a>
          </li>
          <li  onClick={handleToggleMenu}>
            <a href="#Skills">Habilidades</a>
          </li>
          <li  onClick={handleToggleMenu}>
            <a href="#Projects">Projetos</a>
          </li>
          <li  onClick={handleToggleMenu}>
            <a href="#Contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}