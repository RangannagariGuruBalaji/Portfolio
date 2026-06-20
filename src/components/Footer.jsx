import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-content">
        <div>
          <div className="footer-logo">
            RGB <span style={{ fontWeight: 300, color: 'var(--text-secondary)' }}>Balaji</span>
          </div>
          <p className="footer-text" style={{ marginTop: '0.5rem' }}>
            Built with React, JavaScript, HTML5, and CSS.
          </p>
        </div>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Rangannagari Guru Balaji. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};
