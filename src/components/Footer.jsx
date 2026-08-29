import React from 'react';
import styles from './Footer.module.css';
import logoImg from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className="section-container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <img src={logoImg} width="80" height="40" alt="Coach TJ Logo" />
            <p>Building meaningful lives through faith, family, and financial wisdom. A registered brand committed to authentic transformation.</p>
            <div className={styles.registered}><i data-lucide="badge-check" style={{ width: 16, height: 16 }}></i> Registered Brand, CIPC</div>
          </div>
          <div className={styles.footerLinks}>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#bio">Bio</a></li>
              <li><a href="#conversations">Conversations</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#speak">Book Me</a></li>
              <li><a href="#book">The Book</a></li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">12-Month Mentorship</a></li>
              <li><a href="#services">One-on-One</a></li>
              <li><a href="#speak">Keynote Speaking</a></li>
              <li><a href="#book">Book Orders</a></li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.instagram.com/thapelodj" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@thapelodj" target="_blank" rel="noopener">TikTok</a></li>
              <li><a href="https://www.facebook.com/thapelo.jonas" target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>MADE TO WIN ACADEMY is a registered brand of Coach TJ. All rights reserved.</p>
          <div className={styles.socialLinks}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;