import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    if (mobileOpen) {
      setMobileOpen(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        <div className={styles.navContainer}>
          <a href="#" className={styles.logo}>Coach <span>TJ</span></a>
          <ul className={styles.navLinks}>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#conversations">Conversations</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#speak">Book Me</a></li>
            <li><a href="#book">The Book</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
          <a href="#speak" className={styles.navCta}>Book Coach TJ</a>
          <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Open menu">
            <i data-lucide="menu" style={{ width: 24, height: 24 }}></i>
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.active : ''}`} id="mobileMenu" role="dialog" aria-label="Mobile navigation">
        <button className={styles.mobileMenuClose} onClick={toggleMenu} aria-label="Close menu">
          <i data-lucide="x" style={{ width: 28, height: 28 }}></i>
        </button>
        <ul>
          <li><a href="#bio" onClick={closeMenu}>Bio</a></li>
          <li><a href="#conversations" onClick={closeMenu}>Conversations</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#speak" onClick={closeMenu}>Book Me</a></li>
          <li><a href="#book" onClick={closeMenu}>The Book</a></li>
          <li><a href="#community" onClick={closeMenu}>Community</a></li>
        </ul>
        <a href="#speak" className={styles.mobileCta} onClick={closeMenu}>Book Coach TJ</a>
      </div>
    </>
  );
};

export default Navbar;