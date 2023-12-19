import React from 'react';
import styles from './card.module.css';

const Card = () => {
  return (
    <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' className={styles.card}>
      <div className={styles.cardLeftSide}>
        <h3>2018 - 2019</h3>
      </div>
      <div className={styles.cardRightSide}>
        <h3>Front-End Web Developer - Gikslab</h3>
        <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
        <div>
          <ul className={styles.techList}>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Tailwind</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      </div>
    </a>
  )
};

export default Card;