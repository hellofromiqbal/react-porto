import React, { useState } from 'react';
import styles from './navbar.module.css';
import portfolioData from '../../portfolioData';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    // const aboutSection = document.getElementById('about');
    const experienceSection = document.getElementById('experience');
    const projectsSection = document.getElementById('projects');

    if(scrollTop < experienceSection.offsetTop - 80) {
      setActiveSection('about');
    } else if(scrollTop >= experienceSection.offsetTop - 80 && scrollTop < projectsSection.offsetTop - 100) {
      setActiveSection('experience');
    } else {
      setActiveSection('projects');
    };
  });
  
  const navList = portfolioData.header.navbar;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navList.map((navItem) => (
          <li key={navItem.name} onClick={() => handleClick(navItem.name)}>
            <a href={navItem.url} className={`${styles.navLink} ${activeSection === navItem.name && styles.active}`}>
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