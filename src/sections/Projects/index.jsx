import React from 'react';
import styles from './projects.module.css';
import Card from '../../components/Card';
import portfolioData from '../../assets/data/portfolioData';

const ProjectsSection = () => {
  const projectsSection = portfolioData.main.projectsSection;
  return (
    <section id={projectsSection.sectionTitle} className={styles.projectsSection}>
      <h2>{projectsSection.sectionTitle}</h2>
      <div className={styles.projectsList}>
        {projectsSection.projectsList.map((projectItem) => (
          <Card key={projectItem.id} data={projectItem} cardType='projects'/>
        ))}
      </div>
    </section>
  )
};

export default ProjectsSection;