import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="#about" className={styles.navLink}>
            <hr />
            <span>ABOUT</span>
          </a>
        </li>
        <li>
          <a href="#experience" className={styles.navLink}>
            <hr />
            <span>EXPERIENCE</span>
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>
            <hr />
            <span>PROJECTS</span>
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;