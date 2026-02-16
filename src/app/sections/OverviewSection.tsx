'use client';

import styles from '../styles/OverviewSection.module.css';

export default function OverviewSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>تركيبة علمية متقدمة لعيون أكثر شبابًا</h2>
        <p className={styles.text}>
          سيرم Numbuzin للعيون يجمع بين الريتينول النقي والببتيدات المتطورة لاستهداف 
          الهالات السوداء والتجاعيد والانتفاخات. تركيبة خفيفة سريعة الامتصاص تعمل 
          أثناء نومك لتمنحك نتائج مرئية خلال أسبوعين فقط.
        </p>
      </div>
    </section>
  );
}
