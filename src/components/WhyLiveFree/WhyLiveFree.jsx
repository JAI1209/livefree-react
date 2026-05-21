import { Monitor, Coffee, CalendarHeart, Wifi, Backpack, BedDouble } from 'lucide-react'
import { motion } from 'framer-motion'
import { FEATURES } from '../../data/siteData'
import styles from './WhyLiveFree.module.css'

const ICON_MAP = { Monitor, Coffee, CalendarHeart, Wifi, Backpack, BedDouble }

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.2, 0.9, 0.4, 1] },
  }),
}

export default function WhyLiveFree() {
  return (
    <section className={`section ${styles.section}`} id="why-livefree">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Why LiveFree</span>
          <h2>Designed for travelers seeking warmth, style & connection.</h2>
          <p>Every corner of our hostels is built with intention — making each stay feel personal, comfortable, and alive.</p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => {
            const Icon = ICON_MAP[f.icon]
            return (
              <motion.article
                key={f.id}
                className={styles.card}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.iconWrap}>
                  {Icon && <Icon size={26} strokeWidth={1.8} />}
                </div>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.desc}>{f.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
