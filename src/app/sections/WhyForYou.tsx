'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/WhyForYou.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyForYou() {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.imageBox}>
          <div ref={contentRef} className={styles.content}>
            <h2 className={styles.title}>لماذا Numbuzin رقم 1؟</h2>
            <p className={styles.text}>
              الوحيد في السوق الذي يجمع بين تركيز 0.5% ريتينول نقي مع تقنية 
              Time-Release التي تضمن فعالية قصوى بدون تهيج. معتمد من أطباء الجلدية 
              وحاصل على جوائز عالمية في العناية بمنطقة العين الحساسة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
