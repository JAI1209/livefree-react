import { useState } from 'react'
import { Monitor, Coffee, CalendarHeart, Wifi, Backpack, BedDouble, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FEATURES } from '../../data/siteData'
import styles from './WhyLiveFree.module.css'

const ICON_MAP = { Monitor, Coffee, CalendarHeart, Wifi, Backpack, BedDouble }

const FEATURE_IMAGES = [
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=800&q=80',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
]

const VISIBLE = 4

export default function WhyLiveFree() {
  const [start, setStart] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => {
    setDir(-1)
    setStart(s => Math.max(0, s - 1))
  }
  const next = () => {
    setDir(1)
    setStart(s => Math.min(FEATURES.length - VISIBLE, s + 1))
  }

  const visible = FEATURES.slice(start, start + VISIBLE)

  return (
    <section className={`section ${styles.section}`} id="why-livefree">
      <div className="container">
        <div className={styles.header}>
          <div className="section-head" style={{ textAlign: 'center', marginBottom: 0, alignItems: 'center' }}>
            <span className="section-label">Why LiveFree</span>
            <h2>Designed for travelers seeking warmth, style & connection.</h2>
          </div>
          <div className={styles.navBtns}>
            <button className={styles.navBtn} onClick={prev} disabled={start === 0} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button className={styles.navBtn} onClick={next} disabled={start >= FEATURES.length - VISIBLE} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className={styles.carousel}>
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((f, i) => {
              const Icon = ICON_MAP[f.icon]
              const imgIdx = FEATURES.indexOf(f)
              return (
                <motion.article
                  key={f.id}
                  className={styles.card}
                  initial={{ opacity: 0, x: dir * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 80 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.2, 0.9, 0.4, 1] }}
                >
                  <div
                    className={styles.cardImg}
                    style={{ backgroundImage: `url('${FEATURE_IMAGES[imgIdx]}')` }}
                  />
                  <div className={styles.cardBody}>
                    <div className={styles.iconWrap}>
                      {Icon && <Icon size={22} strokeWidth={1.8} />}
                    </div>
                    <h3 className={styles.title}>{f.title}</h3>
                    <p className={styles.desc}>{f.desc}</p>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {Array.from({ length: FEATURES.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === start ? styles.dotActive : ''}`}
              onClick={() => { setDir(i > start ? 1 : -1); setStart(i) }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
