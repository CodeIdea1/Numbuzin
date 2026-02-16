'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/WhyNumberOne.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyNumberOne() {
  const featuresRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  useEffect(() => {
    const features = [feature1Ref.current, feature2Ref.current, feature3Ref.current];
    
    const ctx = gsap.context(() => {
      const titles = document.querySelectorAll(`.${styles.featureTitle}`);
      
      gsap.from(titles, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from(features, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 75%',
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
          <div ref={featuresRef} className={styles.features}>
            <div>
              <h3 className={styles.featureTitle}>ريتينول</h3>
              <div ref={feature1Ref} className={styles.feature}>              
                <p>
                  يساعد على تنعيم الخطوط الدقيقة وتقليل مظهر التجاعيد
                  </p>
              </div>
            </div>
            <div>
              <h3 className={styles.featureTitle}>نياسيناميد</h3>
              <div ref={feature2Ref} className={styles.feature}>
                <p>
                  يوحّد لون البشرة ويخفف من الهالات الداكنة
                </p>
              </div>
            </div>
            <div>
              <h3 className={styles.featureTitle}>+NAD و50 ببتيد</h3>
              <div ref={feature3Ref} className={styles.feature}>
                <p>
                  يعزز تماسك البشرة ويمنحها امتلاءً وشدًا ملحوظًا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
