import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SOCIAL_IMGS } from '../../data/siteData'
import styles from './Social.module.css'

export default function Social() {
  const trackRef = useRef(null)

  // Always start from left
  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0
  }, [])

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
    }
  }

  return (
    <section className={`section ${styles.section}`} id="social">
      <div className="container">
        <div className="section-head">
          <span className={`section-label ${styles.tag}`}>Social Moments</span>
          <h2>GET SOCIAL <span style={{ color: 'var(--primary)' }}>#livefreehostels</span></h2>
          <p>Tag us on Instagram and you might end up on our wall 📸</p>
        </div>
      </div>

      {/* Full width carousel — outside container so images go edge to edge */}
      <div className={styles.carouselWrap}>
        <button className={styles.btn} onClick={() => scroll(-1)} aria-label="Previous">
          <ChevronLeft size={20} />
        </button>

        <div className={styles.track} ref={trackRef}>
          {SOCIAL_IMGS.map((url, i) => (
            <div
              key={i}
              className={styles.item}
              role="img"
              aria-label={`Social photo ${i + 1}`}
            >
              <img 
                src={url} 
                alt={`Social photo ${i + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="16"%3EImage not loaded%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
          ))}
        </div>

        <button className={styles.btn} onClick={() => scroll(1)} aria-label="Next">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
