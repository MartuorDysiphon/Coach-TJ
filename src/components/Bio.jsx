import React from 'react';
import styles from './Bio.module.css';
import bioImg from '../assets/tj.jpeg';

const Bio = () => {
  return (
    <section className={styles.bio} id="bio" aria-label="Biography">
      <div className="section-container">
        <div className={styles.bioGrid}>
          <div className={`${styles.bioImage} fade-in`}>
            <img src={bioImg} alt="Thapelo Jonas portrait" loading="lazy" />
            <div className={styles.bioQuoteMark}>"</div>
          </div>
          <div className={`${styles.bioContent} fade-in stagger-2`}>
            <p className="section-label">The Story</p>
            <h2 className="section-title">A Life Built on Purpose</h2>
            <p>My name is Thapelo Jonas, though many know me as Coach TJ. I am a husband, father, investor, author and speaker passionate about helping people build meaningful lives.</p>
            <p>Life has taught me something important. <strong>Money matters. Faith matters. Family matters.</strong> And how we think about life matters too.</p>
            <p>I do not believe success is only about money. I believe true success is building a life that inspires you and those you love.</p>
            <div className={styles.bioSignature}>
              <div className={styles.bioSignatureName}>Thapelo "Coach TJ" Jonas</div>
              <div className={styles.bioSignatureRole}>Speaker &middot; Author &middot; Investor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;