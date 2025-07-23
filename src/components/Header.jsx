import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/"><img className={styles.logo} src="/logo.png" alt="logo" /></NavLink>
        <div className={styles['justify-helper']}>
          <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : undefined}>Projects</NavLink>
          <NavLink to="/work" className={({ isActive }) => isActive ? styles.active : undefined}>Work</NavLink>
          <NavLink to="/about-contact" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
