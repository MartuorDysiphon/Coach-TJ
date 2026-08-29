import React, { useEffect, useState } from 'react';
import styles from './Modals.module.css';

const Modals = () => {
  // State tracking variables for submission feedback
  const [submitting, setSubmitting] = useState(false);
  const [successType, setSuccessType] = useState(null); // Track which form succeeded

  useEffect(() => {
    // Modal window controls
    const openModal = (modalId) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeModal = (modalId) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset success state when closing the modal
        setSuccessType(null);
      }
    };

    // Global trigger bindings 
    document.querySelectorAll('.open-modal').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        if (modalId) openModal(modalId);
      });
    });

    // Handle background overlays
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) {
          closeModal(this.id);
        }
      });
    });

    // Close on escape keystroke
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, []);

  // Central React handler replacing direct HTML action redirects
  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    // Convert FormData payload into a basic JSON payload
    const payload = Object.fromEntries(formData.entries());
    payload.formType = formType; // Append form context flag

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessType(formType);
        e.target.reset(); // Wipe inputs
      } else {
        alert('Something went wrong. Please check your form and try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Unable to send form.');
    } finally {
      setSubmitting(false);
    }
  };

  // Shared close logic
  const handleManualClose = (modalId) => {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
    setSuccessType(null);
  };

  return (
    <>
      {/* Modal: Group Mentorship */}
      <div className="modal-overlay" id="modal-group">
        <div className={styles.modalBox}>
          <button className={styles.modalClose} onClick={() => handleManualClose('modal-group')}>&times;</button>
          <h3>Join the 12-Month Academy</h3>
          <div className={styles.modalSub}>R750 / month — start your transformation today</div>
          
          {successType === 'group' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'green', fontWeight: 'bold' }}>
              ✓ Application submitted successfully! We will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, 'group')}>
              <div className="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="Your full name" /></div>
              <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="you@example.com" /></div>
              <div className="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+27 12 345 6789" /></div>
              <div className="form-group"><label>Why do you want to join?</label><textarea name="message" rows="3" placeholder="Tell me about your goals..."></textarea></div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                <i data-lucide="send" style={{ width: 18, height: 18 }}></i> {submitting ? 'Sending...' : 'Apply Now'}
              </button>
              <div className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your info is safe with us.</div>
            </form>
          )}
        </div>
      </div>

      {/* Modal: One-on-One */}
      <div className="modal-overlay" id="modal-oneonone">
        <div className={styles.modalBox}>
          <button className={styles.modalClose} onClick={() => handleManualClose('modal-oneonone')}>&times;</button>
          <h3>One-on-One Mentorship</h3>
          <div className={styles.modalSub}>R1,800 per 90 min session — personalised guidance</div>
          
          {successType === 'oneonone' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'green', fontWeight: 'bold' }}>
              ✓ Enquiry sent successfully! Expect a reply soon.
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, 'oneonone')}>
              <div className="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="Your full name" /></div>
              <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="you@example.com" /></div>
              <div className="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+27 12 345 6789" /></div>
              <div className="form-group"><label>What would you like to work on?</label><textarea name="message" rows="3" placeholder="Share your focus areas..."></textarea></div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                <i data-lucide="send" style={{ width: 18, height: 18 }}></i> {submitting ? 'Sending...' : 'Enquire Now'}
              </button>
              <div className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your info is safe with us.</div>
            </form>
          )}
        </div>
      </div>

      {/* Modal: Keynote Speaking */}
      <div className="modal-overlay" id="modal-keynote">
        <div className={styles.modalBox}>
          <button className={styles.modalClose} onClick={() => handleManualClose('modal-keynote')}>&times;</button>
          <h3>Book a Keynote</h3>
          <div className={styles.modalSub}>R15,000 per keynote — inspire your audience</div>
          
          {successType === 'keynote' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'green', fontWeight: 'bold' }}>
              ✓ Booking request received! We will verify availability shortly.
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, 'keynote')}>
              <div className="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="Your full name" /></div>
              <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="you@example.com" /></div>
              <div className="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+27 12 345 6789" /></div>
              <div className="form-group"><label>Event details</label><textarea name="message" rows="3" placeholder="Tell me about your event, date, audience size..."></textarea></div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                <i data-lucide="send" style={{ width: 18, height: 18 }}></i> {submitting ? 'Sending...' : 'Send Request'}
              </button>
              <div className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your info is safe with us.</div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Modals;
