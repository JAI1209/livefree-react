import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DESTINATIONS } from '../../data/siteData'
import styles from './Destinations.module.css'

export default function Destinations() {
  const navigate = useNavigate()

  return (
    <section className="section" id="destinations">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Our Properties</span>
          <h2>Three cities. One spirit.</h2>
          <p>Each LiveFree hostel is shaped by its city — the mountains, the ghats, the forests — and filled with the same warmth.</p>
        </div>

        <div className={styles.grid}>
          {DESTINATIONS.map((dest, i) => (
            <motion.article
              key={dest.id}
              className={styles.card}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.9, 0.4, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => navigate(dest.path)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(dest.path)}
            >
              {/* Replace with Rishikesh / Dehradun / Varanasi image ↓ */}
              {/* <img src={`/assets/${dest.id}.jpg`} alt={dest.name} className={styles.img} /> */}
              <div className={styles.imgFallback} style={{ background: `linear-gradient(135deg, ${dest.color}, #8c7b6b)` }} />

              <div className={styles.overlay} />

              <div className={styles.body}>
                <span className={styles.tagline}>{dest.tagline}</span>
                <h3 className={styles.name}>{dest.name}</h3>
                <p className={styles.desc}>{dest.desc}</p>
                <span className={styles.arrow}>Explore</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
