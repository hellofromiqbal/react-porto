import React from 'react';
import styles from './socialMedia.module.css';
import portfolioData from '../../assets/data/portfolioData';

const SocialMedia = () => {
  const socialMedia = portfolioData.header.SocialMedia;
  return (
    <div className={styles.socialMedia}>
      <ul className={styles.socialMediaList}>
        {socialMedia.map((item) => (
          <li key={item.name}>
            <a href={item.url} rel='noreferrer' target='_blank'>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SocialMedia;