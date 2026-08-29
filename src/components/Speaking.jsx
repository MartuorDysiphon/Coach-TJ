import React, { useState } from 'react';
import styles from './Speaking.module.css';
import micImg from '../assets/mic.jpg';

const Speaking = () => {
  // State tracking variables for submission feedback
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Central React handler connecting to your serverless backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    payload.formType = 'speaking'; // Append form context flag

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess(true);
        e.target.reset(); // Wipe inputs
      } else {
        alert('Something went wrong. Please check your form and try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Unable to send booking request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.speaking} id="speak" aria-label="Speaking and Booking">
      <div className="section-container">
        <div className={styles.speakingGrid}>
          <div className={`${styles.speakingContent} fade-in`}>
            <p className="section-label">Bring Coach TJ to Your Event</p>
            <h2 className="section-title">Inspire Your Audience</h2>
            <p>Looking for a speaker who connects deeply and delivers transformation? Coach TJ brings energy, authenticity, and actionable wisdom to every stage.</p>
            <p>Available for corporate events, conferences, churches, seminars, and private gatherings across South Africa and beyond.</p>
            <div className={styles.speakingTypes}>
              <div className={styles.speakingType}>
                <div className={styles.speakingTypeIcon}><i data-lucide="mic" style={{ width: 20, height: 20 }}></i></div>
                <div><strong>Keynote Speaker</strong><p>Powerful talks on purpose, leadership, and wealth that move audiences to action.</p></div>
              </div>
              <div className={styles.speakingType}>
                <div className={styles.speakingTypeIcon}><i data-lucide="users-round" style={{ width: 20, height: 20 }}></i></div>
                <div><strong>Master of Ceremonies</strong><p>Professional hosting for weddings, galas, and corporate events with warmth and class.</p></div>
              </div>
              <div className={styles.speakingType}>
                <div className={styles.speakingTypeIcon}><i data-lucide="presentation" style={{ width: 20, height: 20 }}></i></div>
                <div><strong>Workshops and Seminars</strong><p>Interactive sessions on wealth building, personal growth, and leadership development.</p></div>
              </div>
            </div>
          </div>
          <div className={`${styles.speakingImage} fade-in stagger-2`}>
            <img src={micImg} alt="Coach TJ on stage" loading="lazy" />
          </div>
        </div>

        <div className={styles.bookingForm}>
          <div className={styles.bookingFormHeader}>
            <h3>Book Coach TJ</h3>
            <p>Fill in your details below and I will get back to you within 24 hours.</p>
          </div>

          {success ? (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '2rem', borderRadius: '6px', textAlign: 'center', color: '#166534', fontWeight: 'bold' }}>
              ✓ Booking request sent successfully! We will get back to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className="form-group"><label htmlFor="name">Full Name</label><input type="text" id="name" name="name" required placeholder="Your full name" /></div>
                <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" name="email" required placeholder="you@example.com" /></div>
                <div className="form-group"><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" placeholder="+27 12 345 6789" /></div>
                <div className="form-group"><label htmlFor="event-type">Event Type</label>
                  <select id="event-type" name="event-type" required>
                    <option value="">Select event type</option>
                    <option value="keynote">Keynote Speaker</option>
                    <option value="mc">Master of Ceremonies</option>
                    <option value="workshop">Workshop / Seminar</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group"><label htmlFor="date">Event Date</label><input type="date" id="date" name="date" required /></div>
                <div className="form-group"><label htmlFor="location">Event Location</label><input type="text" id="location" name="location" placeholder="City, Venue name" /></div>
                <div className="form-group full-width"><label htmlFor="message">Tell Me About Your Event</label><textarea id="message" name="message" placeholder="Share details about your event, expected audience size, theme, and what you are hoping to achieve..."></textarea></div>
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                <i data-lucide="send" style={{ width: 18, height: 18 }}></i> {submitting ? 'Sending Request...' : 'Send Booking Request'}
              </button>
              <p className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your information is secure and will never be shared.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
