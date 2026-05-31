import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <div className={styles.wrap} id="booking">
      <div className="container">
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          viewport={{ once: true }}
        >
          <div className={styles.inner}>
            <h2 className={styles.title}>Join Creatorship</h2>
            <p className={styles.sub}>
              Get ready to embark on an adventure of collaboration, inspiration, and FREE stays across India's most iconic destinations.
            </p>
            <button className={styles.btn}>
              Become a Creator <Rocket size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
