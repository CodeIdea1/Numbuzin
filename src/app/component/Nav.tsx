'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';

const announcements = [
  'توصيل مجاني لجميع مناطق سلطنة عمان',
  'خصم 20% على جميع المنتجات',
  'شحن سريع خلال 24 ساعة'
];

export default function Nav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.announcement}>
            {announcements[currentIndex]}
          </div>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={styles.mainNavContainer}>
          <div className={styles.navContent}>
            <div className={styles.actions}>
              <button className={`${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? '✕' : '☰'}
              </button>
              <div className={styles.logo}>Numbuzin</div>
            </div>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
              <a href="#home" onClick={handleLinkClick}>الرئيسية</a>
              <a href="#products" onClick={handleLinkClick}>المنتجات</a>
              <a href="#about" onClick={handleLinkClick}>من نحن</a>
              <a href="#results" onClick={handleLinkClick}>قبل وبعد</a>
              <a href="#testimonials" onClick={handleLinkClick}>آراء العملاء</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
