import React from 'react';
import styles from './Community.module.css';

const Community = () => {
  return (
    <section className={styles.community} id="community" aria-label="Community">
      <div className="section-container">
        <div className={`${styles.communityContent} fade-in`}>
          <p className="section-label">Welcome Home</p>
          <h2>Join the Conversation</h2>
          <p>If you are passionate about growth, wisdom and becoming better in every area of life, welcome home. This is a space for honest conversations and real transformation.</p>
          <p className={styles.communityCtaText}>Tell me where you are joining from and what conversations you would love us to have here.</p>
          <form className={styles.communityForm} action="https://formspree.io/f/xnpqabql" method="POST">
            <input type="text" name="location" placeholder="Where are you joining from?" required />
            <input type="text" name="topic" placeholder="What topic should we discuss?" required />
            <button type="submit" className="btn btn-primary"><i data-lucide="message-circle" style={{ width: 18, height: 18 }}></i> Join In</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Community;