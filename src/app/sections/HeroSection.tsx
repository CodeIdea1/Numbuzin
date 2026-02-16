'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  const brandRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const dots = Array.from({ length: 20 }, () => useRef(null));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (animated) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setAnimated(true) });
      
      tl.from(brandRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from(circleRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.4')
      .from(imageRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6')
      .from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

      dots.forEach((dot, i) => {
        if (!dot.current) return;
        gsap.to(dot.current, {
          x: Math.random() * 40 - 20,
          y: Math.random() * 40 - 20,
          duration: 3 + Math.random() * 2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        });
      });
    });

    return () => ctx.revert();
  }, [animated]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <h1 ref={brandRef} className={styles.brandName}>Numbuzin</h1>
          <div ref={circleRef} className={styles.productImage}>
            {dots.map((dot, i) => (
              <span key={i} ref={dot} className={styles[`dot${i + 1}`]}></span>
            ))}
            <img ref={imageRef} src="/product.svg" alt="Numbuzin Eye Serum" loading="eager" />
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div ref={contentRef} className={styles.content}>
            <h2 className={styles.title}>
              سيرم العيون الثوري
            </h2>
            <p className={styles.subtitle}>
              تركيبة متقدمة للقضاء على الهالات السوداء والتجاعيد حول العين
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
