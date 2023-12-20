import React from 'react';
import styles from './introProfile.module.css';
import portfolioData from '../../portfolioData';

const IntroProfile = () => {
  const introProfile = portfolioData.header.IntroProfile;
  return (
    <div className={styles.introProfile}>
      <h1><a href="/">{introProfile.name}</a></h1>
      <h2>{introProfile.role}</h2>
      <p>{introProfile.excerpt}</p>
    </div>
  )
};

export default IntroProfile;