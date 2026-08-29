import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../assets/tj1.jpeg';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.heroContainer}>
        <div className={`${styles.heroContent} fade-in`}>
          <span className={styles.heroName}>Thapelo Jonas</span>
          <h1>Building Lives<br />That Inspire.</h1>
          <p>Known to many as <strong>Coach TJ</strong>, a husband, father, and speaker passionate about helping people build meaningful lives through faith, family, and financial wisdom.</p>
          <div className={styles.heroButtons}>
            <a href="#speak" className="btn btn-primary">
              <i data-lucide="mic" style={{ width: 18, height: 18 }}></i> Book Me to Speak
            </a>
            <a href="#bio" className="btn btn-secondary">
              <i data-lucide="arrow-down" style={{ width: 18, height: 18 }}></i> Read My Story
            </a>
          </div>
        </div>
        <div className={`${styles.heroImage} fade-in stagger-2`}>
          <div className={styles.heroImageWrapper}>
            <img src={heroImg} alt="Coach TJ portrait" loading="eager" />
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}><span className={styles.statNumber}>C</span><span className={styles.statLabel}>Coach</span></div>
            <div className={styles.statItem}><span className={styles.statNumber}>T</span><span className={styles.statLabel}>Thapelo</span></div>
            <div className={styles.statItem}><span className={styles.statNumber}>J</span><span className={styles.statLabel}>Jonas</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;