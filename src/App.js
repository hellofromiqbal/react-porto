import styles from './App.module.css';
import IntroProfile from './components/IntroProfile';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import AboutSection from './sections/About';
import ExperienceSection from './sections/Experience';
import ProjectsSection from './sections/Projects';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.AppHeaderContent}>
          <IntroProfile/>
          <Navbar/>
          <SocialMedia/>
        </div>
      </header>
      <div className={styles.leftSideApp}>
        <main className={styles.AppMain}>
          <AboutSection/>
          <ExperienceSection/>
          <ProjectsSection/>
        </main>
        <footer className={styles.AppFooter}>
          <small>Developed & designed by Muhammad Iqbal 🚀 2023.</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
