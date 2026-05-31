import { motion } from 'framer-motion'
import { PawPrint, ShieldCheck, Heart, AlertCircle, Gift, Ban } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const TERMS = [
  'Pets accepted: domestic dogs and cats only.',
  'Permitted in private rooms and shared rooms reserved for the same group.',
  'Maximum limit: 2 pets per room.',
  'The animal must always be accompanied by the guest or kept in a suitable carrier.',
  'Leashes are mandatory in all common areas.',
  'Pets are not allowed in dining areas, cafes, or any food service zones.',
  'Guests are responsible for cleaning up after their pets at all times.',
  'Excessive noise or aggressive behaviour may result in the animal being asked to leave.',
  'The use of hostel towels or linen by animals is expressly prohibited.',
  'Animals may not be bathed in room bathrooms.',
  'Pets must not be left alone in the room overnight.',
]

const COMPLIMENTARY = [
  { icon: '🛏️', label: 'Bed or mat for your pet' },
  { icon: '🛍️', label: 'Waste bags at reception' },
  { icon: '💧', label: 'Portable water dispenser' },
]

const PROPERTIES = [
  { name: 'Live Free Rishikesh', img: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&q=80', pet: true },
  { name: 'Live Free Dehradun', img: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&q=80', pet: false },
  { name: 'Live Free Varanasi', img: 'https://images.unsplash.com/photo-1601889342284-97ca02b3ee24?w=600&q=80', pet: false },
]

export default function PetFriendlyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '52vh', background: 'linear-gradient(135deg, #1a4a3a 0%, #2d7a5e 60%, #3a9e74 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 660 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.12)', borderRadius: 99, padding: '8px 20px', marginBottom: 24 }}>
              <PawPrint size={16} color="#fff" />
              <span style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Pet Friendly</span>
            </div>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            Get ready for a stay that will make your best friend's tail wag with joy!
          </motion.h1>
          <motion.p {...fadeUp(0.2)} style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            At LiveFree, travelling is synonymous with sharing — and there is nothing better than sharing happiness and special moments with our furry friends.
          </motion.p>
        </div>
      </section>

      {/* Pet-Friendly Properties */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">Our Properties</span>
            <h2>Pet-Friendly Units at LiveFree</h2>
            <p>Check which of our properties welcome your four-legged companions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
            {PROPERTIES.map((p, i) => (
              <motion.div key={p.name} {...fadeUp(i * 0.1)}
                style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: '#fff', border: '1.5px solid #f0f0f0' }}
              >
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: p.pet ? '#2d7a5e' : 'rgba(0,0,0,0.55)',
                    color: '#fff', borderRadius: 99, padding: '5px 14px',
                    fontSize: '0.72rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <PawPrint size={12} /> {p.pet ? 'Pets Welcome' : 'No Pets'}
                  </div>
                </div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ color: '#999', fontSize: '0.85rem' }}>{p.pet ? 'Dogs & cats welcome. ₹500 deposit applies.' : 'This property does not accept pets currently.'}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-col: photo + terms */}
      <section style={{ padding: '0 0 72px', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* Left photo */}
            <motion.div {...fadeUp(0)} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', aspectRatio: '4/5' }}>
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=700&q=80" alt="Pet friendly stay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            {/* Right terms */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <ShieldCheck size={20} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--primary)' }}>General Terms & Conditions</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, marginBottom: 10, lineHeight: 1.2 }}>
                Daily rate per pet: <span style={{ color: 'var(--primary)' }}>₹500</span>
              </h2>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: 24, lineHeight: 1.7 }}>
                Your pet is welcome at our properties! To ensure the room remains spotless for everyone, we apply a ₹500 deposit, refunded at the end of your stay if there is no damage.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {TERMS.map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem', color: '#444', lineHeight: 1.6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: 7 }} />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complimentary + Deposits side by side */}
      <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, #f0faf5, #e8f5ef)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 0, alignItems: 'start' }}>
            {/* Complimentary */}
            <motion.div {...fadeUp(0)} style={{ padding: '0 48px 0 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, background: '#fff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                  <Gift size={20} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem' }}>Complimentary Extras</h3>
              </div>
              <p style={{ color: '#888', fontSize: '0.88rem', marginBottom: 20, lineHeight: 1.7 }}>Available at reception for all pet-owning guests at no extra charge:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {COMPLIMENTARY.map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <span style={{ fontSize: '1.4rem' }}>{c.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#333' }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Divider */}
            <div style={{ background: 'rgba(0,0,0,0.08)', margin: '0 0' }} />
            {/* Deposits */}
            <motion.div {...fadeUp(0.1)} style={{ padding: '0 0 0 48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, background: '#fff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                  <AlertCircle size={20} style={{ color: '#e85c3a' }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem' }}>Deposits & Damages</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '🔒', text: 'Security deposit of ₹500 — returned at the end of your stay if no damage has occurred.' },
                  { icon: '🛠️', text: 'In the event of material damage caused by the animal, the cost of repair or replacement will be charged.' },
                  { icon: '🧹', text: 'Additional costs for deep cleaning (e.g. persistent odours) will be charged to guests.' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{d.icon}</span>
                    <span style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.65 }}>{d.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom photo */}
      <section style={{ height: 420, overflow: 'hidden', position: 'relative' }}>
        <img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=1400&q=80" alt="Pet and owner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '8%', transform: 'translateY(-50%)', color: '#fff', maxWidth: 480 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 14 }}>
            Because the best adventures are shared.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            Bring your furry companion along and create memories that go beyond the usual travel story.
          </p>
        </div>
      </section>
    </>
  )
}
