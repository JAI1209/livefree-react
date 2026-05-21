import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SOCIAL_IMGS } from '../../data/siteData'
import styles from './Social.module.css'

export default function Social() {
  const trackRef = useRef(null)
  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })

  return (
    <section className={`section ${styles.section}`} id="social">
      <div className="container">
        <div className="section-head">
          <span className={`section-label ${styles.tag}`}>Social Moments</span>
          <h2>GET SOCIAL <span style={{ color: 'var(--primary)' }}>#LiveFree</span></h2>
          <p>Tag us on Instagram and you might end up on our wall 📸</p>
        </div>

        <div className={styles.carouselWrap}>
          <button className={styles.btn} onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className={styles.track} ref={trackRef}>
            {SOCIAL_IMGS.map((url, i) => (
              <div
                key={i}
                className={styles.item}
                style={{ backgroundImage: `url('${url}')` }}
                role="img"
                aria-label={`Social photo ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.btn} onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
