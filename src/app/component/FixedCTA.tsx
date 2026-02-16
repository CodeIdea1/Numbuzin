'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/FixedCTA.module.css';

export default function FixedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button className={`${styles.ctaButton} ${isVisible ? styles.visible : ''}`}>
      <span className={styles.buttonText}>اطلب الآن</span>
      <span className={`${styles.arrowContainer} ${styles.arrowLeft}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className={`${styles.arrowContainer} ${styles.arrowRight}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </button>
  );
}
