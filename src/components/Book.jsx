import React from 'react';
import styles from './Book.module.css';
import bookImg from '../assets/book.jpeg';

const Book = () => {
  return (
    <section id="book" aria-label="Book">
      <div className="section-container">
        <div className={styles.bookGrid}>
          <div className={`${styles.bookImage} fade-in`}>
            <div className={styles.bookImageWrapper}>
              <img src={bookImg} alt="Coach TJ's Book" loading="lazy" />
              <div className={styles.bookImageShadow}></div>
            </div>
          </div>
          <div className={`${styles.bookContent} fade-in stagger-2`}>
            <span className={styles.bookTag}>Available Now</span>
            <h2>The Book That Changes Perspectives</h2>
            <p>Coach TJ's latest work distills years of speaking, investing, and living into a powerful guide for anyone ready to build a life of purpose and prosperity.</p>
            <p>Inside, you will discover the frameworks that have helped hundreds transform their thinking about money, family, and faith, and practical steps to start building your own meaningful legacy today.</p>
            <div className={styles.bookFeatures}>
              <div className={styles.bookFeature}><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> <span>Proven wealth building frameworks</span></div>
              <div className={styles.bookFeature}><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> <span>Real stories from real experience</span></div>
              <div className={styles.bookFeature}><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> <span>Actionable steps for immediate growth</span></div>
            </div>
            <a href="https://www.takealot.com/made-to-win/PLID71031782" className="btn btn-primary" style={{ marginTop: '1rem' }} target="_blank" rel="noopener noreferrer">
              <i data-lucide="shopping-cart" style={{ width: 18, height: 18 }}></i> Order Your Copy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;