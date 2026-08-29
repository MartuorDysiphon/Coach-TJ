import React, { useEffect } from 'react';
import styles from './Modals.module.css';

const Modals = () => {
  useEffect(() => {
    // Modal functions
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
      }
    };

    // Open modal triggers
    document.querySelectorAll('.open-modal').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        if (modalId) openModal(modalId);
      });
    });

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) {
          closeModal(this.id);
        }
      });
    });

    // Close modal on Escape key
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

  return (
    <>
      {/* Modal: Group Mentorship */}
      <div className="modal-overlay" id="modal-group">
        <div className={styles.modalBox}>
          <button className={styles.modalClose} onClick={() => { document.getElementById('modal-group').classList.remove('active'); document.body.style.overflow = ''; }}>&times;</button>
          <h3>Join the 12-Month Academy</h3>
          <div className={styles.modalSub}>R750 / month — start your transformation today</div>
          <form action="https://formspree.io/f/meaqqedd" method="POST">
            <div className="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="Your full name" /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="you@example.com" /></div>
            <div className="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+27 12 345 6789" /></div>
            <div className="form-group"><label>Why do you want to join?</label><textarea name="message" rows="3" placeholder="Tell me about your goals..."></textarea></div>
            <button type="submit" className="btn btn-primary"><i data-lucide="send" style={{ width: 18, height: 18 }}></i> Apply Now</button>
            <div className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your info is safe with us.</div>
          </form>
        </div>
      </div>

      {/* Modal: One-on-One */}
      <div className="modal-overlay" id="modal-oneonone">
        <div className={styles.modalBox}>
          <button className={styles.modalClose} onClick={() => { document.getElementById('modal-oneonone').classList.remove('active'); document.body.style.overflow = ''; }}>&times;</button>
          <h3>One-on-One Mentorship</h3>
          <div className={styles.modalSub}>R1,800 per 90 min session — personalised guidance</div>
          <form action="https://formspree.io/f/xoeqqjbz" method="POST">
            <div className="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="Your full name" /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="you@example.com" /></div>
            <div className="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+27 12 345 6789" /></div>
            <div className="form-group"><label>What would you like to work on?</label><textarea name="message" rows="3" placeholder="Share your focus areas..."></textarea></div>
            <button type="submit" className="btn btn-primary"><i data-lucide="send" style={{ width: 18, height: 18 }}></i> Enquire Now</button>
            <div className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your info is safe with us.</div>
          </form>
        </div>
      </div>

      {/* Modal: Keynote Speaking */}
      <div className="modal-overlay" id="modal-keynote">
        <div className={styles.modalBox}>
          <button className={styles.modalClose} onClick={() => { document.getElementById('modal-keynote').classList.remove('active'); document.body.style.overflow = ''; }}>&times;</button>
          <h3>Book a Keynote</h3>
          <div className={styles.modalSub}>R15,000 per keynote — inspire your audience</div>
          <form action="https://formspree.io/f/mvkoozno" method="POST">
            <div className="form-group"><label>Full Name</label><input type="text" name="name" required placeholder="Your full name" /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" required placeholder="you@example.com" /></div>
            <div className="form-group"><label>Phone</label><input type="tel" name="phone" placeholder="+27 12 345 6789" /></div>
            <div className="form-group"><label>Event details</label><textarea name="message" rows="3" placeholder="Tell me about your event, date, audience size..."></textarea></div>
            <button type="submit" className="btn btn-primary"><i data-lucide="send" style={{ width: 18, height: 18 }}></i> Send Request</button>
            <div className="form-note"><i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i> Your info is safe with us.</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modals;