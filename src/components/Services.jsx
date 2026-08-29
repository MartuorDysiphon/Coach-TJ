import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="services" aria-label="Services" style={{ background: 'var(--bg-warm)' }}>
      <div className="section-container">
        <div className="section-header fade-in">
          <p className="section-label">Made to Win Academy</p>
          <h2 className="section-title">Mentorship That Transforms</h2>
          <p className="section-subtitle">Two powerful tracks designed to help you master abundance, mindset, and financial discipline. All within a community of winners.</p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceCard} fade-in stagger-1`}>
            <span className={styles.badge}>Group Mentorship</span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em' }}>12-Month Journey</h3>
            <div className={styles.price}>R750 <small>/ month</small></div>
            <ul>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> 12 months of guided mentorship</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Weekly live ZOOM sessions (Wednesdays, 2 hours)</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Direct access to Thapelo Jonas &amp; The Made to Win framework</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Practical lessons on abundance, mindset mastery, and financial discipline</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> A thriving community of winners growing together</li>
            </ul>
            <button className="btn btn-primary open-modal" data-modal="modal-group" style={{ marginTop: '1.5rem' }}>
              <i data-lucide="users" style={{ width: 18, height: 18 }}></i> Join the Academy
            </button>
          </div>

          <div className={`${styles.serviceCard} fade-in stagger-2`}>
            <span className={styles.badge}>Premium</span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em' }}>One-on-One</h3>
            <div className={styles.price} style={{ fontSize: '1.5rem' }}>R1,800 <small style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>per 90 min session</small></div>
            <ul>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Personalised mentorship with Coach TJ</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Tailored roadmap for your goals</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Direct, private sessions</li>
              <li><i data-lucide="check-circle" style={{ width: 18, height: 18 }}></i> Deep-dive into wealth, faith, and family</li>
            </ul>
            <button className="btn btn-secondary open-modal" data-modal="modal-oneonone" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              <i data-lucide="arrow-right" style={{ width: 18, height: 18 }}></i> Enquire Now
            </button>
          </div>
        </div>

        <div className={`${styles.speakingFee} fade-in stagger-3`}>
          <i data-lucide="mic" style={{ width: 32, height: 32, color: 'var(--accent)' }}></i>
          <div>
            <span style={{ fontWeight: 700, fontSize: '1rem', display: 'block' }}>Keynote Speaking</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Engage your audience with a powerful talk</span>
          </div>
          <strong>R15,000</strong>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>per keynote</span>
          <button className="btn btn-primary open-modal" data-modal="modal-keynote" style={{ marginLeft: 'auto', padding: '0.6rem 1.8rem' }}>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Services;