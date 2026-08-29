// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Conversations from './components/Conversations';
import Services from './components/Services';
import Speaking from './components/Speaking';
import Book from './components/Book';
import Community from './components/Community';
import Footer from './components/Footer';
import Modals from './components/Modals';

function App() {
  useEffect(() => {
    // Re-run lucide icons after mount
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth anchor scroll
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Bio />
      <Conversations />
      <Services />
      <Speaking />
      <Book />
      <Community />
      <Footer />
      <Modals />
    </>
  );
}

export default App;