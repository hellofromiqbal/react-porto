import React from 'react';
import styles from './experience.module.css';
import Card from '../../components/Card';

const ExperienceSection = () => {
  return (
    <section id='experience' className={styles.experienceSection}>
      <h2>EXPERIENCE</h2>
      <div className={styles.experienceList}>
        <Card/>
        <Card/>
      </div>
    </section>
  )
};

export default ExperienceSection;