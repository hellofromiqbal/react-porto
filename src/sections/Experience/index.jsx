import React from 'react';
import styles from './experience.module.css';
import Card from '../../components/Card';
import portfolioData from '../../portfolioData';

const ExperienceSection = () => {
  const experienceSection = portfolioData.main.experienceSection;
  return (
    <section id={experienceSection.sectionTitle} className={styles.experienceSection}>
      <h2>{experienceSection.sectionTitle}</h2>
      <div className={styles.experienceList}>
        {experienceSection.experienceList.map((experienceItem) => (
          <Card key={experienceItem.id} data={experienceItem}/>
        ))}
      </div>
    </section>
  )
};

export default ExperienceSection;