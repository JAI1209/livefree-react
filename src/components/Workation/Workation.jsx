import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, Coffee, Monitor, Zap, MapPin, Sunset, Gamepad2, WashingMachine, ChevronDown } from 'lucide-react'

const AMENITIES = [
  { icon: Wifi,         label: 'High Speed WiFi',        desc: 'Fast, secure internet throughout your stay — 50+ Mbps guaranteed.' },
  { icon: Monitor,      label: 'Dedicated Workspaces',   desc: 'Thoughtfully designed desks, ergonomic chairs, and quiet zones.' },
  { icon: Zap,          label: 'Power Backup',           desc: '24/7 power backup so outages never interrupt your flow.' },
  { icon: Coffee,       label: 'In-House Café',          desc: 'Freshly brewed coffee, snacks, and meals right inside the hostel.' },
  { icon: MapPin,       label: 'Prime Location',         desc: 'Centrally located — cafés, trails, and culture always nearby.' },
  { icon: Sunset,       label: 'Outdoor Activities',     desc: 'Weekends: rafting, treks, bonfires, and mountain walks.' },
  { icon: Gamepad2,     label: 'Recreation Areas',       desc: 'Carrom, chess, foosball — decompress between calls.' },
  { icon: WashingMachine, label: 'Laundry Service',     desc: 'Pack light. We handle the laundry at a reasonable cost.' },
]

const DAY_TABS = [
  {
    label: 'Morning',
    emoji: '🌅',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    text: 'Wake up to fresh mountain air, grab a coffee from our in-house café, and ease into the day with a riverside yoga session or a quiet walk before your first standup.',
  },
  {
    label: 'Work',
    emoji: '💻',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80',
    text: 'Settle into your dedicated workspace with fast WiFi, power backup, and a community of fellow remote workers around you. No commute. No distractions. Just deep work.',
  },
  {
    label: 'After Work',
    emoji: '🌿',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
    text: 'Clock out and head to the Ganga for a sunset stroll. Play carrom in the common area, share a meal with new friends, or join a jam session around the bonfire.',
  },
  {
    label: 'Weekend',
    emoji: '🏔️',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80',
    text: 'Saturdays are for adventure — river rafting, waterfall treks, camping under the stars, or simply a long slow breakfast with a book and a view.',
  },
]

const FAQS = [
  { q: 'What is the minimum stay for a workation?', a: 'Minimum stay is 7 nights. Maximum is 4 weeks. The longer you stay, the better the rate!' },
  { q: 'Is the WiFi fast enough for video calls?', a: 'Yes! We offer 50+ Mbps connections at all our workation properties with power backup, so outages never disrupt your calls.' },
  { q: 'Are meals included in the workation price?', a: 'The workation price covers stay only. Meals are available separately at our in-house café or from nearby restaurants.' },
  { q: 'Can I work from any hostel, or only specific ones?', a: 'Workation packages are available at all three LiveFree properties — Rishikesh, Dehradun, and Varanasi.' },
  { q: 'Is there a discount for longer stays?', a: 'Yes! Book for 7+ nights and get 15% off. Write to us for custom group or long-term workation rates.' },
]

export default function Workation() {
  const [activeDay, setActiveDay] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="workation" style={{ background: '#fff' }}>

      {/* ── Hero banner ── */}
      <div style={{
        background: 'linear-gradient(110deg, #1a3a2a 0%, #2d6a4a 50%, #1a4a35 100%)',
        padding: '80px 0 72px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400&q=60')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', padding: '6px 18px', borderRadius: 99, marginBottom: 20 }}>Workations</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              Work, Relax, Repeat
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.75 }}>
              Trade office walls for blue skies and mountain air. Book 7+ nights and get <strong style={{ color: '#7debb0' }}>15% off</strong> — with high-speed WiFi, dedicated workspaces, and a community that gets it.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#workation-enquiry"
                onClick={e => { e.preventDefault(); document.getElementById('workation-enquiry')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#1a3a2a', padding: '13px 28px', borderRadius: 99, fontWeight: 800, fontSize: '0.9rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Book a Workation →
              </a>
              <a href="https://www.thehosteller.com/workations/" target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '13px 28px', borderRadius: 99, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              >
                See Reference
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Amenities grid ── */}
      <div style={{ background: '#fafafa', padding: '72px 0' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">Amenities</span>
            <h2>Everything you need to work and thrive</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {AMENITIES.map((a, i) => (
              <motion.div key={a.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{ background: '#fff', borderRadius: 16, padding: '28px 22px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1.5px solid #f0f0f0', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div style={{ width: 48, height: 48, background: 'rgba(45,106,74,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <a.icon size={22} style={{ color: '#2d6a4a' }} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 8, color: 'var(--text)' }}>{a.label}</h3>
                <p style={{ color: '#888', fontSize: '0.84rem', lineHeight: 1.65 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What workation feels like — tabbed ── */}
      <div style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">A Day in the Life</span>
            <h2>What does a workation actually feel like?</h2>
          </div>
          {/* Tab buttons */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            {DAY_TABS.map((t, i) => (
              <button key={t.label} onClick={() => setActiveDay(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 24px', borderRadius: 99, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.88rem', transition: 'all 0.2s',
                  background: activeDay === i ? '#1a3a2a' : '#f0f0f0',
                  color: activeDay === i ? '#fff' : '#666',
                }}
              >
                <span>{t.emoji}</span> {t.label}
              </button>
            ))}
          </div>
          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div key={activeDay}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 960, margin: '0 auto' }}
            >
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
                <img src={DAY_TABS[activeDay].img} alt={DAY_TABS[activeDay].label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>{DAY_TABS[activeDay].emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: 16, color: 'var(--text)' }}>{DAY_TABS[activeDay].label}</h3>
                <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.85 }}>{DAY_TABS[activeDay].text}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Enquiry form ── */}
      <div id="workation-enquiry" style={{ padding: '72px 0', background: '#fafafa' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">Book Your Workation</span>
            <h2>Ready to escape the office? Let's make it happen.</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: 20, padding: '48px 44px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 24px' }}>
              {[
                { label: 'Name', name: 'name', placeholder: 'Your full name', type: 'text' },
                { label: 'Email', name: 'email', placeholder: 'your@email.com', type: 'email' },
                { label: 'Phone', name: 'phone', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
                { label: 'Number of People', name: 'people', placeholder: 'e.g. 2', type: 'number' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#999', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 7 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e8e8e8', fontSize: '0.9rem', fontFamily: 'var(--font-body)', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = '#2d6a4a'}
                    onBlur={e => e.target.style.borderColor = '#e8e8e8'}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#999', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 7 }}>Property</label>
                <select style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e8e8e8', fontSize: '0.9rem', fontFamily: 'var(--font-body)', outline: 'none', boxSizing: 'border-box', background: '#fff' }}>
                  <option value="">Select property</option>
                  <option>LiveFree Rishikesh</option>
                  <option>LiveFree Dehradun</option>
                  <option>LiveFree Varanasi</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#999', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 7 }}>Duration</label>
                <select style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e8e8e8', fontSize: '0.9rem', fontFamily: 'var(--font-body)', outline: 'none', boxSizing: 'border-box', background: '#fff' }}>
                  <option>1 week (7 nights)</option>
                  <option>2 weeks (14 nights)</option>
                  <option>3 weeks (21 nights)</option>
                  <option>4 weeks (28 nights)</option>
                </select>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.73rem', fontWeight: 700, color: '#999', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 7 }}>Check-in Date</label>
                <input type="date" style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #e8e8e8', fontSize: '0.9rem', fontFamily: 'var(--font-body)', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            </div>
            <button style={{ width: '100%', marginTop: 24, padding: '15px', background: 'linear-gradient(110deg, #2d6a4a, #1a3a2a)', color: '#fff', border: 'none', borderRadius: 12, fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Send Workation Enquiry →
            </button>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ padding: '64px 0 80px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="section-head">
            <span className="section-label">FAQs</span>
            <h2>Common questions answered</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.97rem', color: 'var(--text)', lineHeight: 1.45 }}>{faq.q}</span>
                  <ChevronDown size={18} style={{ flexShrink: 0, color: '#2d6a4a', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: '0.25s' }} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                      <p style={{ padding: '0 0 20px', color: '#666', fontSize: '0.92rem', lineHeight: 1.75 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
