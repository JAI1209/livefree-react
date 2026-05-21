import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const GROUPS = [
  {
    title: 'Solo travelers',
    members: '3.5K members',
    desc: 'Meet other solo explorers and share daily adventures.',
    img: 'https://images.unsplash.com/photo-1541336032412-2048a6785400?w=600&q=80',
  },
  {
    title: 'Digital nomads',
    members: '2.1K members',
    desc: 'Work, connect, and explore with a creative travel crew.',
    img: 'https://images.unsplash.com/photo-1523239369189-4ed2aefc3a63?w=600&q=80',
  },
  {
    title: 'Yoga community',
    members: '1.8K members',
    desc: 'Practice together, share retreats, and find mindful connection.',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
  },
  {
    title: 'Mountain lovers',
    members: '2.3K members',
    desc: 'Plan hikes, photo treks, and scenic overnights with fellow travelers.',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80',
  },
  {
    title: 'Backpackers India',
    members: '4.1K members',
    desc: 'Share routes, tips, and local secrets across India.',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  },
  {
    title: 'Artists & creators',
    members: '1.2K members',
    desc: 'Collaborate on projects, workshops, and creative gatherings.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
]

const COMMUNITIES = [
  { name: 'City explorers', online: '520 online', pill: 'High activity', tags: ['walks', 'food', 'photo'], avatars: ['A','B','C'] },
  { name: 'Sunrise seekers', online: '430 online', pill: 'Trending', tags: ['yoga', 'wellness'], avatars: ['D','E','F'] },
  { name: 'Night owls', online: '310 online', pill: 'New', tags: ['music', 'events'], avatars: ['G','H','I'] },
]

const MEETUPS = [
  { title: 'Shared dinner', desc: 'Community dinner with local food, stories, and laughter.' },
  { title: 'City exploration', desc: 'Hidden corners, cafes, and culture with a small group.' },
  { title: 'Music circle', desc: 'Jam sessions and storytelling in the lounge.' },
]

const STORIES = [
  { quote: 'I found friends on my first night and a community that turned my journey into a story worth sharing.', name: 'Meera', loc: 'Varanasi', img: 'https://images.unsplash.com/photo-1541336032412-2048a6785400?w=400&q=80' },
  { quote: 'The yoga community helped me slow down and meet people who travel with purpose.', name: 'Rohan', loc: 'Rishikesh', img: 'https://images.unsplash.com/photo-1523239369189-4ed2aefc3a63?w=400&q=80' },
  { quote: 'From group hikes to open mics, every meetup turned strangers into travel companions.', name: 'Priya', loc: 'Dehradun', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80' },
]

const STATS = [
  { value: '12,000+', label: 'Travelers connected' },
  { value: '300', label: 'Weekly meetups' },
  { value: '50+', label: 'Cities explored' },
  { value: '24/7', label: 'Community support' },
]

export default function GroupsPage() {
  const navigate = useNavigate()

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1e1b1a 0%, #2c2826 40%, #3a2218 100%)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(15,12,10,0.82) 0%, rgba(15,12,10,0.5) 60%, rgba(15,12,10,0.18) 100%)',
          zIndex: 1,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap', padding: '80px 0' }}>
          <motion.div {...fadeUp(0)} style={{ maxWidth: 520 }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '3.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>
              LiveFree Community
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.02em' }}>
              Find your travel tribe
            </h1>
            <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.7, maxWidth: 420 }}>
              Join communities, meet travelers, and create memories together — from rooftop nights to sunrise hikes.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#groups" className="btn btn-primary" style={{ fontSize: '0.95rem' }}>Explore groups</a>
              <button className="btn btn-ghost" onClick={() => navigate('/')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)', fontSize: '0.95rem' }}>Book a bed</button>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 260, height: 260, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.15)' }}>
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80" alt="Hostel community" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', gap: -8 }}>
              {['AB','SK','MJ','LP','ZI'].map((a, i) => (
                <span key={i} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `hsl(${i * 40 + 20}, 65%, 55%)`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', fontWeight: 700, color: '#fff',
                  border: '2px solid #1e1b1a',
                  marginLeft: i > 0 ? -10 : 0,
                }}>{a}</span>
              ))}
              <span style={{ marginLeft: 10, color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', alignSelf: 'center' }}>+12k travelers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Groups ── */}
      <section className="section" id="groups">
        <div className="container">
          <motion.div className="section-head" {...fadeUp(0)}>
            <span className="section-label">Featured groups</span>
            <h2>Find the community that matches your travel style.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {GROUPS.map((g, i) => (
              <motion.article key={g.title} {...fadeUp(i * 0.07)} style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: 'var(--surface)',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
              >
                <div style={{ height: 180, overflow: 'hidden' }}>
                  <img src={g.img} alt={g.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                </div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: 4 }}>{g.title}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, marginBottom: 8 }}>{g.members}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 18 }}>{g.desc}</p>
                  <button className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '7px 18px' }}>Join group</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Communities ── */}
      <section className="section" style={{ background: 'var(--bg-muted, #fdf6f0)' }}>
        <div className="container">
          <motion.div className="section-head" {...fadeUp(0)}>
            <span className="section-label">Popular communities</span>
            <h2>Active threads, live meetups, and shared interests.</h2>
          </motion.div>
          <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 12, marginTop: 48 }}>
            {COMMUNITIES.map((c, i) => (
              <motion.article key={c.name} {...fadeUp(i * 0.08)} style={{
                minWidth: 240,
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '22px 24px',
                boxShadow: 'var(--shadow-md)',
                flexShrink: 0,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, background: 'var(--primary-glow)', color: 'var(--primary-dark)', padding: '4px 10px', borderRadius: 999 }}>{c.pill}</span>
                  <div style={{ display: 'flex' }}>
                    {c.avatars.map((a, j) => (
                      <span key={j} style={{ width: 28, height: 28, borderRadius: '50%', background: `hsl(${j * 50 + 20}, 60%, 60%)`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: '#fff', marginLeft: j > 0 ? -8 : 0, border: '2px solid var(--surface)' }}>{a}</span>
                    ))}
                  </div>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>{c.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 12 }}>{c.online}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {c.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', padding: '3px 10px', borderRadius: 999, background: 'var(--primary-glow)', color: 'var(--primary-dark)', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meetups ── */}
      <section className="section">
        <div className="container">
          <motion.div className="section-head" {...fadeUp(0)}>
            <span className="section-label">Hostel meetups</span>
            <h2>Join upcoming gatherings and shared group events.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginTop: 48 }}>
            {MEETUPS.map((m, i) => (
              <motion.article key={m.title} {...fadeUp(i * 0.08)} style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 28px 24px',
                boxShadow: 'var(--shadow-md)',
                borderLeft: '3px solid var(--primary)',
              }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: 10 }}>{m.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>{m.desc}</p>
                <button className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '7px 18px' }}>Join now</button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traveler Stories ── */}
      <section className="section" style={{ background: 'var(--bg-muted, #fdf6f0)' }}>
        <div className="container">
          <motion.div className="section-head" {...fadeUp(0)}>
            <span className="section-label">Traveler stories</span>
            <h2>Real journeys from the LiveFree community.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {STORIES.map((s, i) => (
              <motion.article key={s.name} {...fadeUp(i * 0.08)} style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
              }}>
                <div style={{ height: 160, overflow: 'hidden' }}>
                  <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '22px 24px' }}>
                  <blockquote style={{ fontSize: '0.92rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.7, marginBottom: 16, borderLeft: '2px solid var(--primary)', paddingLeft: 14 }}>
                    "{s.quote}"
                  </blockquote>
                  <p style={{ fontWeight: 700, fontSize: '0.88rem' }}>{s.name} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>— {s.loc}</span></p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
            {STATS.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.07)} style={{
                textAlign: 'center',
                padding: '32px 20px',
                background: 'var(--surface)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
              }}>
                <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>{s.value}</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b1a 0%, #3a2218 100%)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeUp(0)}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#fff', marginBottom: 32 }}>
              Join the LiveFree community
            </h2>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => navigate('/')}>Explore experiences</button>
              <button className="btn btn-ghost" onClick={() => navigate('/')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>Start your journey</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}