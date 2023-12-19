import React from 'react';
import styles from './projects.module.css';
import Card from '../../components/Card';

const ProjectsSection = () => {
  return (
    <section id='projects' className={styles.projectsSection}>
      <h2>EXPERIENCE</h2>
      <div className={styles.projectsList}>
        <Card/>
        <Card/>
      </div>
    </section>
  )
};

export default ProjectsSection;