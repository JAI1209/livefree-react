import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Headphones, CalendarCheck, Utensils, Tag, MapPin, Send } from 'lucide-react'
import CTABanner from '../components/CTABanner/CTABanner'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const WHY_US = [
  { icon: Headphones, title: 'Dedicated Support', desc: 'Our team assists from the first contact to check-in — room configuration, dates, and everything in between.' },
  { icon: CalendarCheck, title: 'Flexible Bookings', desc: 'Shared and private room options tailored to your group size and mix, with flexible date arrangements.' },
  { icon: Utensils, title: 'Personalised Dining', desc: 'Curated meal options, communal dinners, and local food experiences organised exclusively for your group.' },
  { icon: MapPin, title: 'Activities & Logistics', desc: 'From transfers to local tips and exclusive group events — we handle the tricky parts of group travel.' },
  { icon: Tag, title: 'Group Discounts', desc: 'Special rates and conditions for group bookings, subject to availability. Ask us for a tailor-made quote.' },
  { icon: Users, title: 'Any Group Type', desc: 'Friends, students, colleagues, sports teams, family reunions — we have welcomed them all.' },
]

const GROUP_TYPES = ['Students', 'Sports Team', 'Work / Corporate', 'Family & Friends', 'Others']
const MEAL_OPTIONS = ['Breakfast', 'Lunch', 'Dinner', 'Lunch Box']
const PROPERTIES = ['Rishikesh', 'Dehradun', 'Varanasi']

const GALLERY = [
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80',
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
]

export default function GroupsPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', people: '', groupName: '',
    property: '', checkin: '', checkout: '', groupType: '', meals: [], notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const toggleMeal = meal => setForm(f => ({
    ...f,
    meals: f.meals.includes(meal) ? f.meals.filter(m => m !== meal) : [...f.meals, meal],
  }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const inputStyle = {
    width: '100%', padding: '13px 16px', borderRadius: 10,
    border: '1.5px solid #e0e0e0', fontSize: '0.9rem', fontFamily: 'var(--font-body)',
    outline: 'none', color: 'var(--text)', background: '#fff', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }
  const labelStyle = { display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#888', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 7 }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={GALLERY[0]} alt="Groups" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(15,12,10,0.75) 0%, rgba(15,12,10,0.35) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 100 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', borderRadius: 99, padding: '7px 18px', marginBottom: 20 }}>
              <Users size={14} color="#fff" />
              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Groups</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.08, maxWidth: 680, marginBottom: 20 }}>
              Plan Your Group Trip Without Stress
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75, marginBottom: 36 }}>
              Organizing a large group can be challenging — but we take care of the rest! Whether it's friends, students, colleagues, a sports team, or a large family, we have everything to make your stay easy, comfortable, and unforgettable.
            </p>
            <button
              onClick={() => document.getElementById('group-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--primary)', color: '#fff', padding: '14px 30px', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Get a Group Quote <Send size={15} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: 260, gap: 3 }}>
        {GALLERY.slice(1).map((img, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>

      {/* Why book with us */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">Why Book With Us</span>
            <h2>Travelling in a group should be fun, not complicated!</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
            {WHY_US.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08)}
                style={{ background: '#fff', borderRadius: 16, padding: '32px 26px', boxShadow: '0 2px 14px rgba(0,0,0,0.06)', border: '1.5px solid #f0f0f0', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.06)' }}
              >
                <div style={{ width: 52, height: 52, background: 'var(--primary-glow)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <item.icon size={22} style={{ color: 'var(--primary)' }} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div {...fadeUp(0)}>
              <span className="section-label">What We Offer</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, margin: '14px 0 28px', lineHeight: 1.15 }}>
                Everything your group needs, sorted.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Flexible accommodation for groups of all sizes',
                  'Shared and private room options tailored to your needs',
                  'Dedicated support from first contact to check-in',
                  'Activity suggestions and logistics (transfers to local tips)',
                  'Exclusive group events and communal dinners on request',
                  'Discounts and special conditions for group bookings',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)' }}>{i + 1}</span>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.12)} style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', aspectRatio: '4/5' }}>
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80" alt="Group stay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Enquiry Form */}
      <section id="group-form" style={{ padding: '80px 0', background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-label">Group Enquiry</span>
            <h2>Tell us about your group</h2>
            <p>The more details you share, the faster we can respond with a personalised proposal!</p>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '64px 32px', background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: 560, margin: '48px auto 0' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: 12 }}>We've got your request!</h3>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.75 }}>
                Our team will review your details and get back to you within 24 hours with a personalised group proposal. Can't wait to host you!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 20, padding: '48px 44px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', maxWidth: 840, margin: '48px auto 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px 28px' }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Number of People *</label>
                  <input type="number" name="people" value={form.people} onChange={handleChange} required placeholder="e.g. 15" min="5" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Group Name</label>
                  <input name="groupName" value={form.groupName} onChange={handleChange} placeholder="e.g. Wanderlust Crew" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Which Property</label>
                  <select name="property" value={form.property} onChange={handleChange} style={inputStyle}>
                    <option value="">Select property</option>
                    {PROPERTIES.map(p => <option key={p} value={p}>Live Free {p}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Check-in Date</label>
                  <input type="date" name="checkin" value={form.checkin} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Check-out Date</label>
                  <input type="date" name="checkout" value={form.checkout} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Group Type</label>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {GROUP_TYPES.map(t => (
                      <button type="button" key={t}
                        onClick={() => setForm(f => ({ ...f, groupType: t }))}
                        style={{ padding: '8px 18px', borderRadius: 99, border: '1.5px solid', cursor: 'pointer', fontSize: '0.83rem', fontWeight: 600, transition: 'all 0.18s', fontFamily: 'var(--font-body)',
                          background: form.groupType === t ? 'var(--primary)' : '#fff',
                          borderColor: form.groupType === t ? 'var(--primary)' : '#e0e0e0',
                          color: form.groupType === t ? '#fff' : '#555',
                        }}
                      >{t}</button>
                    ))}
                  </div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Meals Required</label>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {MEAL_OPTIONS.map(m => (
                      <button type="button" key={m}
                        onClick={() => toggleMeal(m)}
                        style={{ padding: '8px 18px', borderRadius: 99, border: '1.5px solid', cursor: 'pointer', fontSize: '0.83rem', fontWeight: 600, transition: 'all 0.18s', fontFamily: 'var(--font-body)',
                          background: form.meals.includes(m) ? 'var(--primary)' : '#fff',
                          borderColor: form.meals.includes(m) ? 'var(--primary)' : '#e0e0e0',
                          color: form.meals.includes(m) ? '#fff' : '#555',
                        }}
                      >{m}</button>
                    ))}
                  </div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Additional Information</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} placeholder="Tell us anything else about your group, special requirements, activities you'd like, etc."
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.65 }}
                  />
                </div>
              </div>
              <button type="submit"
                style={{ marginTop: 28, width: '100%', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, padding: '16px', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Send Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
