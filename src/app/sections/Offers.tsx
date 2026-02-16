'use client';
import React from 'react';
import styles from '../styles/Offers.module.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      badge: 'الأكثر مبيعاً',
      title: 'اشتري 2 واحصلي على خصم 70%',
      oldPrice: '1200',
      newPrice: '360',
      savings: '840',
      discount: '70%'
    },
    {
      id: 2,
      badge: 'عرض محدود',
      title: 'اشتري 3 واحصلي على خصم 80%',
      oldPrice: '1800',
      newPrice: '360',
      savings: '1440',
      discount: '80%'
    },
    {
      id: 3,
      badge: 'الأفضل قيمة',
      title: 'اشتري 5 واحصلي على خصم 85%',
      oldPrice: '3000',
      newPrice: '450',
      savings: '2550',
      discount: '85%'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>عروض حصرية لفترة محدودة</h2>
        <p className={styles.subtitle}>وفري حتى 85% على طلبك الآن</p>
        
        <div className={styles.mainBox}>
          {offers.map((offer, index) => (
            <div 
              key={offer.id} 
              className={styles.offerCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.badge}>{offer.badge}</div>
                <div className={styles.discount}>{offer.discount}</div>
              </div>
              
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              
              <div className={styles.priceSection}>
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>السعر الأصلي:</span>
                  <span className={styles.oldPrice}>{offer.oldPrice} ج.م</span>
                </div>
                
                <div className={styles.priceRow}>
                  <span className={styles.priceLabel}>السعر الآن:</span>
                  <span className={styles.newPrice}>{offer.newPrice} ج.م</span>
                </div>
              </div>
              
              <div className={styles.savings}>
                توفير {offer.savings} ج.م
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
