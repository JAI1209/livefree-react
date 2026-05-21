import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import styles from './Hero.module.css'
import heroImg from '../../assets/hero_img.jpeg'
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.2, 0.9, 0.4, 1] },
})

export default function Hero() {
  const scrollToFeatures = () =>
    document.getElementById('why-livefree')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      {/* Background */}
      <div className={styles.bg}>
        {/* Add hero image here ↓ */}
        <img src={heroImg} alt="LiveFree Hostel" className={styles.bgImg} />
        
      </div>
      <div className={styles.overlay} />

      {/* Main content */}
      <div className={styles.content}>
        <motion.span className={styles.eyebrow} {...fadeUp(0.1)}>
          LiveFree Hostel
        </motion.span>

        <motion.h1 className={styles.headline} {...fadeUp(0.22)}>
          Stay Free.<br />Live <span className={styles.accent}>Bold.</span>
        </motion.h1>

        <motion.p className={styles.subline} {...fadeUp(0.34)}>
          Warm beds, good people, and unforgettable experiences across Rishikesh, Varanasi & Dehradun.
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(0.46)}>
          <a
            className="btn btn-primary btn-lg"
            href="#booking"
            onClick={e => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Book Your Stay
          </a>
          <button className="btn btn-secondary" style={{ color: '#fff', background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)' }}>
            <Play size={15} fill="currentColor" /> Watch Story
          </button>
        </motion.div>
      </div>

      {/* Trust badges */}
<div className={styles.badges}>
  <motion.div className={styles.badge} {...fadeUp(0.5)}>
    <span className={styles.badgeIcon}>⭐</span>
    <div className={styles.badgeText}>
      <span className={styles.badgeNum}>9.4 / 10</span>
      Guest Rating
    </div>
  </motion.div>
  <motion.div className={styles.badge} {...fadeUp(0.6)}>
    <span className={styles.badgeIcon}>🏆</span>
    <div className={styles.badgeText}>
      <span className={styles.badgeNum}>120K+</span>
      Guests Hosted
    </div>
  </motion.div>
</div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} onClick={scrollToFeatures} style={{ cursor: 'pointer' }}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
