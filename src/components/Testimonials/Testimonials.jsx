import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../data/siteData'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Guest Stories</span>
          <h2>Loved by travelers. Every single time.</h2>
        </div>

        <div className={styles.grid}>
          {/* Media */}
          <motion.div
            className={styles.media}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.9, 0.4, 1] }}
            viewport={{ once: true }}
          >
            {/* Add community / hostel image here ↓ */}
            {/* <img src="/assets/community.jpg" alt="Hostel community" className={styles.mediaImg} /> */}
            <div className={styles.mediaFallback} />
            <div className={styles.mediaBadge}>
              <strong>9.4★</strong>
              Average Rating
            </div>
          </motion.div>

          {/* Cards */}
          <div className={styles.cards}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.author}
                className={styles.card}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.9, 0.4, 1] }}
                viewport={{ once: true }}
              >
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.text}>"{t.text}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.author[0]}</div>
                  <div>
                    <div className={styles.authorName}>{t.author}</div>
                    <div className={styles.authorCountry}>{t.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
