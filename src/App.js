import styles from './App.module.css';
import IntroProfile from './components/IntroProfile';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import AboutSection from './sections/About';
import ExperienceSection from './sections/Experience';

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
      <main className={styles.AppMain}>
        <AboutSection/>
        <ExperienceSection/>
      </main>
    </div>
  );
}

export default App;
