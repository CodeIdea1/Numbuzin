'use client';

import styles from '../styles/OverviewSection.module.css';

export default function OverviewSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>أول سيرم ريتينول للعيون يعطي نتائج واضحة من أول الأسابيع</h2>
        <p className={styles.text}>
سيرم العيون الجديد بالريتينول يعيد تعريف العناية بمنطقة العين.
تركيبة ذكية تستهدف الهالات السوداء، الانتفاخ، والتجاعيد الدقيقة بفعالية عالية، لتمنحك مظهرًا أكثر إشراقًا وشبابًا خلال أسابيع قليلة فقط.
        </p>
      </div>
    </section>
  );
}
