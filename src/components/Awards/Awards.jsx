import { motion } from 'framer-motion'
import { AWARDS } from '../../data/siteData'
import styles from './Awards.module.css'

export default function Awards() {
  return (
    <section className={`section ${styles.section}`} id="awards">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Recognition</span>
          <h2>Award‑winning hospitality, every year.</h2>
        </div>
        <div className={styles.grid}>
          {AWARDS.map((a, i) => (
            <motion.div
              key={`${a.platform}-${a.property}`}
              className={`${styles.card} ${styles[a.theme]}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <span className={styles.emoji}>{a.emoji}</span>
              <p className={styles.platform}>{a.platform}</p>
              <p className={styles.year}>{a.year}</p>
              <p className={styles.property}>{a.property}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
