'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/BeforeAndAfter.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAndAfter() {
  const sectionRef = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = [slide1Ref.current, slide2Ref.current, slide3Ref.current].filter((slide): slide is HTMLDivElement => slide !== null);
      
      slides.forEach((slide, index) => {
        const leftText = slide.querySelector(`.${styles.leftText}`);
        const rightText = slide.querySelector(`.${styles.rightText}`);
        const leftArrow = slide.querySelector(`.${styles.leftArrow}`);
        const rightArrow = slide.querySelector(`.${styles.rightArrow}`);
        
        if (index === 0) {
          gsap.set(slide, { opacity: 1, scale: 1 });
          gsap.set([leftText, rightText, leftArrow, rightArrow], { opacity: 1, scale: 1, x: 0 });
        } else {
          gsap.set(slide, { opacity: 0, scale: 0.95 });
          gsap.set([leftText, rightText, leftArrow, rightArrow], { opacity: 0, scale: 0.8 });
        }
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          slides.forEach((slide, index) => {
            const leftText = slide.querySelector(`.${styles.leftText}`);
            const rightText = slide.querySelector(`.${styles.rightText}`);
            const leftArrow = slide.querySelector(`.${styles.leftArrow}`);
            const rightArrow = slide.querySelector(`.${styles.rightArrow}`);
            
            if (index === 0 && progress < 0.4) {
              gsap.to(slide, { opacity: 1, scale: 1, duration: 0.3 });
              gsap.to([leftText, leftArrow], { opacity: 1, scale: 1, x: 0, duration: 0.4, delay: 0.1 });
              gsap.to([rightText, rightArrow], { opacity: 1, scale: 1, x: 0, duration: 0.4, delay: 0.2 });
            } else if (index === 1 && progress >= 0.4 && progress < 0.7) {
              gsap.to(slide, { opacity: 1, scale: 1, duration: 0.3 });
              gsap.to([leftText, leftArrow], { opacity: 1, scale: 1, x: 0, duration: 0.4, delay: 0.1 });
              gsap.to([rightText, rightArrow], { opacity: 1, scale: 1, x: 0, duration: 0.4, delay: 0.2 });
            } else if (index === 2 && progress >= 0.7) {
              gsap.to(slide, { opacity: 1, scale: 1, duration: 0.3 });
              gsap.to([leftText, leftArrow], { opacity: 1, scale: 1, x: 0, duration: 0.4, delay: 0.1 });
              gsap.to([rightText, rightArrow], { opacity: 1, scale: 1, x: 0, duration: 0.4, delay: 0.2 });
            } else {
              gsap.to(slide, { opacity: 0, scale: 0.95, duration: 0.3 });
              gsap.to([leftText, rightText, leftArrow, rightArrow], { opacity: 0, scale: 0.8, duration: 0.3 });
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div ref={slide1Ref} className={styles.slide}>
            <img src="/beforeAndAfter1.png" alt="قبل الاستخدام" className={styles.image} />
            <div className={`${styles.textOverlay} ${styles.overlay1}`}>
              <div className={styles.leftText}>
                <span>قبل</span>
                <img src="/arrow.png" alt="" className={styles.leftArrow} />
              </div>
              <div className={styles.rightText}>
                <span>بعد</span>
                <img src="/arrow.png" alt="" className={styles.rightArrow} />
              </div>
            </div>
          </div>
          
          <div ref={slide2Ref} className={styles.slide}>
            <img src="/beforeAndAfter2.png" alt="بعد الاستخدام" className={styles.image} />
            <div className={`${styles.textOverlay} ${styles.overlay2}`}>
              <div className={styles.leftText}>
                <span>قبل</span>
                <img src="/arrow.png" alt="" className={styles.leftArrow} />
              </div>
              <div className={styles.rightText}>
                <span>بعد</span>
                <img src="/arrow.png" alt="" className={styles.rightArrow} />
              </div>
            </div>
          </div>
          
          <div ref={slide3Ref} className={styles.slide}>
            <img src="/beforeAndAfter3.png" alt="بعد الاستخدام" className={styles.image} />
            <div className={`${styles.textOverlay} ${styles.overlay3}`}>
              <div className={styles.leftText}>
                <span>قبل</span>
                <img src="/arrow.png" alt="" className={styles.leftArrow} />
              </div>
              <div className={styles.rightText}>
                <span>بعد</span>
                <img src="/arrow.png" alt="" className={styles.rightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
