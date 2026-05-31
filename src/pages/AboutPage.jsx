import { motion } from 'framer-motion'
import { Heart, Globe, Home, Users } from 'lucide-react'
import CTABanner from '../components/CTABanner/CTABanner'

const VALUES = [
  { icon: Heart, title: 'Pet‑First Travel', desc: 'We design stays where companions are family. Flexible pet spaces and thoughtful amenities built into every experience.' },
  { icon: Globe, title: 'Community Over Crowds', desc: 'From shared tables to shared stories, we bring travelers together with meaningful moments beyond check-in and check-out.' },
  { icon: Home, title: 'Comfort Meets Adventure', desc: 'Stay cozy, stay curious. Every LiveFree home balances warm hospitality with local discovery and playful spontaneity.' },
  { icon: Users, title: 'People First, Always', desc: 'Our staff are travelers too. They know what matters — a genuine smile, local tips, and a door that always feels open.' },
]

const FOUNDERS = [
  { name: 'Aryan Mehta', role: 'Co-Founder & CEO', initials: 'AM', desc: 'Aryan leads the LiveFree vision with a traveler-first mindset, creating welcoming stays rooted in design, freedom, and cultural connection.' },
  { name: 'Priya Nair', role: 'Co-Founder & Head of Experience', initials: 'PN', desc: 'Priya curates the lived experience across every hostel — from warm check-ins to local adventures that turn each stay into a story.' },
]

const styles = {
  hero: { padding: '120px 0 80px', background: 'linear-gradient(160deg, var(--bg) 60%, var(--accent-light) 100%)', textAlign: 'center' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, marginBottom: 18, lineHeight: 1.1 },
  sub: { color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.7 },
  storySection: { padding: '80px 0', background: 'var(--surface-alt)' },
  storyInner: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' },
  storyImg: { height: 400, borderRadius: 'var(--radius-xl)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80')" },
  storyText: {},
  storyLabel: { fontSize: '0.72rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: 14 },
  storyH2: { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 },
  storyP: { color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.78, marginBottom: 16 },
  valGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 48 },
  valCard: { background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '32px 24px', boxShadow: 'var(--shadow-xs)', transition: 'var(--transition)' },
  iconBox: { width: 52, height: 52, background: 'var(--primary-glow)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: 18 },
  foundGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginTop: 48 },
  foundCard: { background: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '40px 32px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' },
  avatar: { width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-light), var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#fff', fontSize: '1.4rem', fontWeight: 800 },
  line: { height: 3, width: 40, background: 'var(--primary)', borderRadius: 4, margin: '12px auto 14px' },
}

export default function AboutPage() {
  return (
    <>
      {/* 1. We Are Live Free */}
      <div style={styles.hero}>
        <div className="container">
          <motion.h1 style={styles.h1} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            We Are <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>LiveFree</span>
          </motion.h1>
          <p style={styles.sub}>Born from a love of wandering and a belief that home is everywhere — for everyone.</p>
        </div>
      </div>

      {/* 2. Our Story */}
      <section style={styles.storySection}>
        <div className="container">
          <div style={styles.storyInner}>
            <motion.div
              style={styles.storyImg}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.9, 0.4, 1] }}
              viewport={{ once: true }}
            />
            <motion.div
              style={styles.storyText}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.2, 0.9, 0.4, 1] }}
              viewport={{ once: true }}
            >
              <span style={styles.storyLabel}>Our Story</span>
              <h2 style={styles.storyH2}>From a backpack to a movement</h2>
              <p style={styles.storyP}>LiveFree was born on a rooftop in Rishikesh, over a shared meal and a half-finished journal. Two travelers, tired of impersonal hotels and rowdy hostels, dreamed of a third option — a place that felt like home, looked like art, and welcomed everyone equally.</p>
              <p style={styles.storyP}>What started as one property in Rishikesh grew into a community across three cities. Each hostel carries the same soul: warmth, design, and the belief that the best conversations happen when strangers share a table.</p>
              <p style={styles.storyP}>Today, LiveFree is more than a place to sleep. It's a movement for travelers who believe that the journey matters as much as the destination.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What We Stand For */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">What We Stand For</span>
            <h2>The LiveFree Philosophy</h2>
          </div>
          <div style={styles.valGrid}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                style={styles.valCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div style={styles.iconBox}><v.icon size={24} strokeWidth={1.8} /></div>
                <h3 style={{ fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet Our Founders */}
      <section className="section" id="founders" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">The Team</span>
            <h2>Meet Our Founders</h2>
          </div>
          <div style={styles.foundGrid}>
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                style={styles.foundCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                viewport={{ once: true }}
              >
                <div style={styles.avatar}>{f.initials}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem' }}>{f.name}</h3>
                <div style={styles.line} />
                <h4 style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--primary)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: 1 }}>{f.role}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
