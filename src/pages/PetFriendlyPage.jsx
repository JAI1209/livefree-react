import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const DOG_IMG = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80'
const CAT_IMG = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80'
const CAT_IMG2 = 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80'

const DESCRIPTION =
  "We've reimagined the travel experience, creating a space where comfort, connection, and adventure go hand in hand. Whether you're seeking privacy to unwind or a vibrant community to share stories with, LiveFree offers the perfect balance."

function BlobWithCat({ img, alt, flip = false, toys = ['🎾', '🐟'] }) {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '0 auto' }}>
      <svg
        viewBox="0 0 400 380"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', display: 'block', transform: flip ? 'scaleX(-1)' : 'none' }}
      >
        <path fill="#e8856a" d="M330,55 Q415,115 420,205 Q425,305 325,345 Q225,385 125,325 Q25,265 20,170 Q15,75 115,38 Q215,0 330,55Z" />
        <path fill="#f4a07a" fillOpacity="0.5" d="M290,85 Q360,130 365,215 Q370,305 280,330 Q190,355 110,295 Q30,235 40,155 Q50,75 140,55 Q230,35 290,85Z" />
      </svg>

      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '80%', height: '95%',
        borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%',
        overflow: 'hidden',
      }}>
        <img src={img} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <span style={{
        position: 'absolute', top: '5%',
        right: flip ? 'auto' : '8%', left: flip ? '8%' : 'auto',
        fontSize: '1.8rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
      }}>{toys[0]}</span>
      <span style={{
        position: 'absolute', top: '18%',
        right: flip ? 'auto' : '2%', left: flip ? '2%' : 'auto',
        fontSize: '1.2rem',
      }}>{toys[1]}</span>
    </div>
  )
}

export default function PetFriendlyPage() {
  return (
    <main id="main">

      {/* ── Hero ── */}
      <section style={{ padding: '72px 0 56px', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>

            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>
                ENJOY YOUR
              </p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: 28, color: 'var(--text)' }}>
                Holiday
              </h1>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1.5px solid #ddd', borderRadius: 6, padding: '8px 18px' }}>
                <span style={{ fontSize: '1.2rem' }}>🏠</span>
                <div style={{ width: 1.5, height: 24, background: '#ddd' }} />
                <span style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text)' }}>
                  PET FRIENDLY
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
                <img src={DOG_IMG} alt="Happy dog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── General Terms ── */}
      <section style={{ padding: '64px 0 80px', background: '#fff' }}>
        <div className="container">

          <motion.h2 {...fadeUp(0)} style={{ textAlign: 'center', fontWeight: 800, fontSize: '1rem', letterSpacing: '3.5px', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 64 }}>
            GENERAL TERMS AND CONDITION
          </motion.h2>

          {/* Row 1 — cat left, text right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 72 }}>
            <motion.div {...fadeUp(0.1)}>
              <BlobWithCat img={CAT_IMG} alt="Cat playing" toys={['🎾', '🐟']} />
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.85 }}>{DESCRIPTION}</p>
            </motion.div>
          </div>

          {/* CTA center */}
          <motion.div {...fadeUp(0.1)} style={{ textAlign: 'center', marginBottom: 72 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, marginBottom: 20, color: 'var(--text)' }}>
              Ready to travel together?
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 32px' }}>
              BOOK YOUR STAY →
            </Link>
          </motion.div>

          {/* Row 2 — text left, cat right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <motion.div {...fadeUp(0.1)}>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.85 }}>{DESCRIPTION}</p>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <BlobWithCat img={CAT_IMG2} alt="Kitten playing" flip toys={['🎾', '🐾']} />
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  )
}