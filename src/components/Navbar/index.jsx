import React from 'react';
import styles from './navbar.module.css';
import portfolioData from '../../portfolioData';

const Navbar = () => {
  const navList = portfolioData.header.navbar;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navList.map((navItem) => (
          <li key={navItem.name}>
            <a href={navItem.url} className={styles.navLink}>
              <hr />
              <span>{navItem.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navbar;