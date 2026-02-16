'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: 'سارة أحمد',
      location: 'الرياض، السعودية',
      rating: 5,
      review: 'منتج رائع! لاحظت تحسن كبير في الهالات السوداء بعد 3 أسابيع فقط. ملمسه خفيف ولا يسبب أي تهيج.',
      image: 'https://i.pravatar.cc/150?img=47'
    },
    {
      name: 'ليلى محمد',
      location: 'دبي، الإمارات',
      rating: 5,
      review: 'أفضل سيرم للعين جربته على الإطلاق! النتائج واضحة والسعر مناسب جداً مقارنة بالجودة.',
      image: 'https://i.pravatar.cc/150?img=45'
    },
    {
      name: 'نور علي',
      location: 'مسقط، عمان',
      rating: 5,
      review: 'عيوني أصبحت أكثر إشراقاً وشباباً. التجاعيد الدقيقة اختفت تماماً. أنصح به بشدة!',
      image: 'https://i.pravatar.cc/150?img=38'
    },
    {
      name: 'مريم خالد',
      location: 'الكويت، الكويت',
      rating: 5,
      review: 'استخدمته لمدة شهرين والنتيجة مذهلة! بشرتي حول العين أصبحت أكثر نعومة وإشراقاً.',
      image: 'https://i.pravatar.cc/150?img=49'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>آراء عملائنا</h2>
        <div className={styles.swiperWrapper}>
          <button className={styles.navButton} onClick={() => swiperRef.current?.slidePrev()}>
            <IoIosArrowForward />
          </button>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className={styles.swiper}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={testimonial.image} alt={testimonial.name} className={styles.userImage} />
                  </div>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.location}>{testimonial.location}</p>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <AiFillStar key={i} className={styles.star} />
                    ))}
                  </div>
                  <p className={styles.review}>{testimonial.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={styles.navButton} onClick={() => swiperRef.current?.slideNext()}>
            <IoIosArrowBack />
          </button>
        </div>
      </div>
    </section>
  );
}
