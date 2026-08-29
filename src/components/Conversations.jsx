import React from 'react';
import styles from './Conversations.module.css';

const Conversations = () => {
  return (
    <section id="conversations" aria-label="Topics">
      <div className="section-container">
        <div className="section-header fade-in">
          <p className="section-label">What We Talk About</p>
          <h2 className="section-title">Conversations That Transform</h2>
          <p className="section-subtitle">Around here, we speak honestly about the things that shape a meaningful life. No fluff. Just real talk, real wisdom, and real growth.</p>
        </div>
        <div className={styles.conversationsGrid}>
          <div className={`${styles.conversationCard} fade-in stagger-1`}>
            <h3>Money and Wealth Building</h3>
            <p>Practical financial wisdom for creating lasting wealth. Not get rich quick schemes, but proven principles for building a legacy your family can stand on for generations.</p>
          </div>
          <div className={`${styles.conversationCard} fade-in stagger-2`}>
            <h3>Faith and Purpose</h3>
            <p>Exploring the deeper questions of why we are here and how faith anchors us through life's storms. Purpose is not found, it is built, one decision at a time.</p>
          </div>
          <div className={`${styles.conversationCard} fade-in stagger-3`}>
            <h3>Family and Relationships</h3>
            <p>The people closest to us are our greatest investment. Conversations about building homes filled with love, respect, and genuine connection.</p>
          </div>
          <div className={`${styles.conversationCard} fade-in stagger-4`}>
            <h3>Leadership and Growth</h3>
            <p>True leadership starts with self leadership. Developing the mindset and discipline to grow personally so you can lead others with integrity and impact.</p>
          </div>
          <div className={`${styles.conversationCard} ${styles.spanFull} fade-in stagger-5`}>
            <h3>Real Life Lessons</h3>
            <p>Stories from the journey, the wins, the losses, and the wisdom carved out of lived experience. Because theory without practice is just noise.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversations;