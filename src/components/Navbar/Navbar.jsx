import React from 'react'
import styles from "./Navbar.module.css"
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
           GAURAV
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen
                 ? ('./Images/closeIcon.png') 
                 : ('./Images/menuIcon.png') 
                }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)} 
            />

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}
        >
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Project</a>
            </li>
            <li>
                <a  className='contact' href="#contact">Contact</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar