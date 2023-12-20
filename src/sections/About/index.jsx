import React from 'react';
import styles from './about.module.css';
import portfolioData from '../../portfolioData';

const AboutSection = () => {
  const aboutSection = portfolioData.main.aboutSection;
  return (
    <section id={aboutSection.sectionTitle} className={styles.aboutSection}>
      <h2>{aboutSection.sectionTitle}</h2>
      <div className={styles.sectionContent}>
        <p>In 2020, I worked as a <span>customer service</span> in a private banking company in Indonesia. Worked to summarize tons of data using various <span>non-integrated web applications</span> requiring me to perform the same tasks on each. This experience sparked my <span>curiosity</span> about programming and <span>web development</span>.</p>
        <p>I began to <span>learn</span> web programming in my free time, alongside my daytime job and realized it was <span>complex</span> but this <span>challenge</span> only fueled my excitement for the field. A year later, I resigned to <span>fully dedicate</span> myself on web programming, finding <span>joy</span> in coding and continually expanding my knowledge. Off the computer, I enjoy video games, time with friends, and playing futsal.</p>
      </div>
    </section>
  )
};

export default AboutSection;