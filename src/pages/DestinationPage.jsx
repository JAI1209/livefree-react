import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, X, ChevronLeft, ChevronRight, ChevronDown, Check,
  Globe, ParkingCircle, ConciergeBell, UtensilsCrossed, BedDouble, Bath,
  Wifi, Wind, PawPrint, KeyRound, ImageOff, ExternalLink,
  Train, Car, Plane,
} from 'lucide-react'
import { DESTINATIONS, CITY_ROOMS, CITY_ITINERARY, CITY_PROPERTY_POLICY, CITY_MUST_READS } from '../data/siteData'

const GALLERY_FALLBACKS = [
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
]

const CLD = 'https://res.cloudinary.com/dtksfqdju/image/upload'
const cld = (id) => `${CLD}/${id}`

const NAVBAR_H = 100

const CITY_META = {
  rishikesh: {
    tagline: 'Dev Bhoomi · Land of Gods',
    address: 'Laxman Jhula Road, Rishikesh, Uttarakhand 249302',
    about: `Ever since the Beatles rocked up at the ashram of the late Maharishi Mahesh Yogi in the late '60s, Rishikesh has been a magnet for spiritual seekers from all over the world. Today this city is known famously as the "yoga capital of the world", with masses of ashrams and all kinds of yoga and meditation centers. Whether you are an adventurer seeking thrilling experiences, a spiritual seeker looking for inner peace, or a wanderer in search of inspiration, Rishikesh has something to offer to everyone. It is not just a place on the map; it is an experience that touches the soul. Since its inception in 2011, Live Free Rishikesh Hostel has been a vibrant hub welcoming individuals from across the globe. Offering a myriad of activities, including weekend musical gigs, Tuesday communal dinners, festive celebrations, and fun gatherings, the hostel ensures that its guests are entertained and immersed in the cultural richness of Rishikesh.`,
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    highlights: ['Riverside yoga & meditation', 'White-water river rafting', 'Bungee jumping & zip-lining', 'Laxman Jhula & Ram Jhula', 'Sunset Ganga aarti', 'Beatles Ashram trek'],
    video: 'sPQQLwdT1rQ',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.82505972936!2d78.3251937!3d30.127819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091644ee11e80d%3A0x9f80ed977d1916c6!2sLive%20Free%20Hostel%20Rishikesh!5e0!3m2!1sen!2sin!4v1779344624890!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Jolly Grant Airport (DED), then taxi to LiveFree Rishikesh (~35 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Haridwar Railway Station, then bus or taxi to Rishikesh (~30 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Delhi: NH334 via Haridwar. GPS: LiveFree Hostel Rishikesh.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'Pets allowed', icon: PawPrint },
    ],
    characteristics: [
      { label: 'INTERNET CONNECTION', icon: Globe, items: ['Wi-Fi'] },
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      { label: 'SERVICES', icon: ConciergeBell, items: ['24-hour reception', 'Online check-in/-out', 'Night security', 'Luggage storage', 'Laundry', 'City Activity assistance'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'PRIVATE ROOM HAS', icon: BedDouble, items: ['AC', 'En-suite Bathroom', 'Double Bed', 'WiFi'] },
    ],
  },
  dehradun: {
    tagline: 'Uttarakhand · Gateway to Himalayas',
    address: 'Rajpur Road, Dehradun, Uttarakhand 248001',
    about: `Dehradun is a city of pine forests, colonial architecture, and mountain air. Nestled in the Doon Valley between the Ganges and Yamuna rivers, it serves as the perfect basecamp for exploring the Himalayas. LiveFree Dehradun brings the same community-driven spirit to this vibrant city — where remote workers, backpackers, and wanderers find a warm home away from home.`,
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    highlights: ["Robber's Cave", "Sahastradhara waterfalls", "Mussoorie day-trip", "Forest Research Institute", "Paltan Bazaar", "Mountain biking"],
    video: null,
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.7862564688057!2d78.07051957618397!3d30.385426802333587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d798eee5f1b5%3A0xb57a22052215b674!2sLive%20Free%20Hostel%20Dehradun!5e0!3m2!1sen!2sin!4v1779344677046!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Jolly Grant Airport (DED), then taxi to LiveFree Dehradun (~45 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Dehradun Railway Station, then auto/cab to LiveFree (~10–15 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Delhi: NH58 via Haridwar. GPS: LiveFree Hostel Dehradun.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'No pets', icon: PawPrint },
    ],
    characteristics: [
      { label: 'INTERNET CONNECTION', icon: Globe, items: ['Wi-Fi'] },
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      { label: 'SERVICES', icon: ConciergeBell, items: ['24-hour reception', 'Online check-in/-out', 'Night security', 'Luggage storage', 'Laundry', 'City Activity assistance'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'PRIVATE ROOM HAS', icon: BedDouble, items: ['AC', 'En-suite Bathroom', 'King Bed', 'WiFi', 'Mountain View'] },
    ],
  },
  varanasi: {
    tagline: 'Uttar Pradesh · City of Light',
    address: 'Near Assi Ghat, Varanasi, Uttar Pradesh 221005',
    about: `One of the oldest living cities on earth, Varanasi pulses with ancient ritual, colour, and sound. The city lives and breathes on the banks of the Ganges, where life and death coexist in the most poetic way imaginable. LiveFree Varanasi puts you right in the middle of it all — close to the ghats, the temples, and the unforgettable energy that makes this city like no other.`,
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    highlights: ['Sunrise boat ride', 'Evening Ganga aarti', 'Vishwanath Temple', 'Sarnath ruins', 'Silk shopping', 'Street food walk'],
    video: 'B7QUA2zZsQ8',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5776986113897!2d83.00443047605633!3d25.284787728146224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ba110bfd13%3A0x16133790c1ae2c19!2sLive%20Free%20Hostel%20Varanasi!5e0!3m2!1sen!2sin!4v1779344741618!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Lal Bahadur Shastri Airport (VNS), then taxi to LiveFree Varanasi (~30 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Varanasi Junction, then auto/cab to the hostel (~20 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Lucknow: NH30. From Allahabad: NH19. GPS: LiveFree Hostel Varanasi.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'No pets', icon: PawPrint },
    ],
    characteristics: [
      { label: 'INTERNET CONNECTION', icon: Globe, items: ['Wi-Fi'] },
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      { label: 'SERVICES', icon: ConciergeBell, items: ['24-hour reception', 'Online check-in/-out', 'Night security', 'Luggage storage', 'Laundry', 'City Activity assistance'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'PRIVATE ROOM HAS', icon: BedDouble, items: ['AC', 'En-suite Bathroom', 'Double Bed', 'WiFi'] },
    ],
  },
}

const CITY_PHOTOS = {
  varanasi: {
    'Varanasi Main': ['Main_1_hru0d7', 'Main_2_akh0p1', 'LFV7_kbja74', 'LFV8_ogbg7n', 'LFV4_vmjkuh', 'LFV22_hls0gf', 'LFV2_amyqdp', 'LFV1_c8auvu'],
    'Property': ['IMG_20231126_175041_vsorfl', 'IMG_20231126_175143_pabnyb', 'GOPR4866-01_cvdl7a', 'IMG_2680_dd2twv', 'DSC09140_vjitra', 'GOPR4897_gqv3az', 'IMG_7282-Edit-01-01_hfzdxi', '1652357644808_image_6483441_t1ncgf'],
    'Common Area': ['IMG_8959_djblsl', 'IMG_2680_c07en4', '_6__0021_-_Copy_ebjgid', '_6__0053_vtwnvh', 'IMG_20231013_125201_jgit5d', 'Live_Music_vioifo', 'IMG_20230218_113337_1_e4ucvi', 'Valentines_day_ibke4i', 'sandup_comedy_hydrbo', 'communal_dinner_ejkrjq', '1653632535675-01_ql75el', 'Holi_celebration_adpyxz'],
    'Deluxe Private': ['IMG_7254_cfopvv', '2_kfjrez', 'IMG_7029_xbgwwn', '1_llvmn5', '4_e9icrp', 'GOPR4881_m3csgi', 'GOPR4887_kamabj', 'bathroom_ftf16o', 'main_wfcf2o'],
    'Reception': ['main_zcjmir', '_6__0135_1_dbnwhs', '_6__0154_zk9pq9', '_6__0198_weykzc'],
    '10-bed Dorm': ['bathroom_2_lkci6f', '2_vbrtl2', '1_qyrxzf', 'bathroom_3_ls12af', 'main_sehe7c', 'bathroom_1_sihzhb'],
    '6-bed Dorm': ['main_d279el', '2_z7hkg2', 'GOPR4927_fuimtw', '1_muwyuu', 'bathroom_t4paqi'],
    '6-bed Female Dorm': ['3_uqieao', 'bathroom_uohqot', 'main_b6t8xi', '1_etla21', '2_hisbqs'],
    '8-bed Dorm': ['IMG_7251_kggfn6', 'bathroom_2_alk4e3', 'IMG_7250_zjglss', 'main_wmda7j', 'bathroom_1_wujawj'],
  },
  dehradun: {
    '4 Bed Dorm': ['image_9ec3b750_n1jctt', 'IMG_20251128_142909_00_033_jsebve', 'IMG_20251128_143221_00_039_jnvwul', 'IMG_20251128_143107_00_037_x7ko4y', 'IMG_4323_ekaxct'],
    '6 Bed Dorm': ['LFD9_30_lwqbbg', 'IMG_4180_lk6w4w', 'IMG_4182_gtyk5u', 'IMG_4178_iigosg', 'IMG_4181_ojoohj', 'LFD3_mnqkrj'],
    '8 Bed Dorm': ['IMG_20251207_125040_00_267_zwlvck', 'IMG_20251207_124703_00_259_2_byt4eb', 'LFD2_aiy5a5', 'IMG_4226_brdugj'],
    'Building': ['IMG_20251128_173843_00_091_bip88g', 'IMG_20251128_163832_00_084_qff8uu', 'LFD9_1_daulbb', 'LFD9_2_lmsjty'],
    'Cafe': ['LFD12_pkazl4', 'LFD10_jtfjui', 'LFD9_3_hn6fbk', 'LFD9_5_zi4cfh'],
    'Deluxe Private': ['IMG_20251128_160103_00_051_stsrhw', 'IMG_20251128_155735_00_046_mbtptk', 'IMG_20251128_160315_00_055_cc6htr'],
    'Family Private': ['IMG_4355_lntw4e', 'IMG_4365_vyfli1', 'IMG_4364_pcjwqc', 'IMG_4357_injjsn'],
    'Female Dorm': ['LFD6_cut51z', 'IMG_20251128_141714_00_027_fbblwk', 'LFD9_20_payhsn'],
  },
  rishikesh: {},
}

// ── Lightbox ──
function LightBox({ images, index, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClose}
    >
      <button onClick={e => { e.stopPropagation(); onPrev() }} style={{ position: 'absolute', left: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 52, height: 52, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronLeft size={26} />
      </button>
      <img src={cld(images[index])} alt="" onClick={e => e.stopPropagation()} style={{ maxHeight: '88vh', maxWidth: '88vw', objectFit: 'contain', borderRadius: 10 }} />
      <button onClick={e => { e.stopPropagation(); onNext() }} style={{ position: 'absolute', right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 52, height: 52, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronRight size={26} />
      </button>
      <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <X size={20} />
      </button>
      <div style={{ position: 'absolute', bottom: 20, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{index + 1} / {images.length}</div>
    </motion.div>
  )
}

// ── Gallery — Zostel-style with category tabs + "See All Photos" opens small blocks ──
function GallerySection({ photosByCategory, allPhotos, onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('All')
  const [showAllGrid, setShowAllGrid] = useState(false)

  const categories = ['All', ...Object.keys(photosByCategory)]
  const activePhotos = activeTab === 'All' ? allPhotos : (photosByCategory[activeTab] || [])
  const hasPhotos = allPhotos.length > 0

  return (
    <div style={{ paddingTop: NAVBAR_H, background: '#000' }}>
      {hasPhotos ? (
        <>
          {/* Main 5-photo grid */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.65fr 1fr', gap: 3, height: 500 }}>
              <div style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => onOpenLightbox(allPhotos, 0)}>
                <img src={cld(allPhotos[0])} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 3 }}>
                {[1, 2, 3, 4].map(i => {
                  const photo = allPhotos[i]
                  const imgSrc = photo ? cld(photo) : GALLERY_FALLBACKS[i - 1]
                  return (
                    <div key={i} style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => onOpenLightbox(allPhotos.length > i ? allPhotos : GALLERY_FALLBACKS, i % (allPhotos.length || 1))}>
                      <img src={imgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        onError={e => { e.currentTarget.src = GALLERY_FALLBACKS[i - 1] }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            {/* "See all photos" button — Zostel style, opens small block grid */}
            <button
              onClick={() => setShowAllGrid(true)}
              style={{
                position: 'absolute', bottom: 16, right: 16,
                background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(0,0,0,0.15)', borderRadius: 8,
                padding: '10px 22px', cursor: 'pointer', color: '#1a1a1a',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              <span>📷</span> See all photos ({allPhotos.length})
            </button>
          </div>

          {/* All Photos Grid — opens inline below, with category tabs (Zostel-style) */}
          <AnimatePresence>
            {showAllGrid && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ background: '#fff', overflow: 'hidden' }}
              >
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 28px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: '#1a1a1a' }}>All Photos</h3>
                    <button onClick={() => setShowAllGrid(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', fontWeight: 600 }}>
                      <X size={16} /> Close
                    </button>
                  </div>
                  {/* Category tabs */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        style={{
                          padding: '7px 16px', borderRadius: 99, fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: 'none',
                          background: activeTab === cat ? '#1a1a1a' : '#f0f0f0',
                          color: activeTab === cat ? '#fff' : '#555',
                          transition: 'all 0.2s',
                        }}
                      >{cat} {cat === 'All' ? `(${allPhotos.length})` : `(${(photosByCategory[cat] || []).length})`}</button>
                    ))}
                  </div>
                  {/* Small blocks grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
                    {activePhotos.map((id, i) => (
                      <div
                        key={id} style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 8, cursor: 'pointer' }}
                        onClick={() => { onOpenLightbox(activePhotos, i) }}
                      >
                        <img src={cld(id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', display: 'block' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div style={{ height: 500, background: 'linear-gradient(135deg, #fdf0ea 0%, #fce4d6 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <ImageOff size={36} style={{ color: 'var(--primary)' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)' }}>Photos Coming Soon</p>
        </div>
      )}
    </div>
  )
}

// ── Hostel Name + Address + About (full-width description) ──
function HeroInfoSection({ dest, meta }) {
  return (
    <section style={{ padding: '44px 0 32px', background: '#fff' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 10, lineHeight: 1.15 }}>
          Live Free Hostel, {dest.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, color: '#888', fontSize: '0.92rem' }}>
          <MapPin size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>{meta.address}</span>
        </div>
        <p style={{ fontSize: '0.96rem', color: '#555', lineHeight: 1.9, width: '100%', marginBottom: 28 }}>
          {meta.about}
        </p>
        {/* Two redirect buttons — above Good to Know */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#travel-itinerary" onClick={e => { e.preventDefault(); document.getElementById('travel-itinerary')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, background: 'var(--primary)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View Travel Itinerary →
          </a>
          <a href="/blogs"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, border: '1.5px solid rgba(0,0,0,0.15)', color: 'var(--text)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', background: '#fff', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
          >
            Read Our Blogs →
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Good to Know — expandable ──
function GoodToKnowSection({ meta }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ padding: '0 0 44px', background: '#fff' }}>
      <div className="container">
        <div style={{ border: '1.5px solid #e8e8e8', borderRadius: 16, overflow: 'hidden', maxWidth: '100%' }}>
          <button
            onClick={() => setOpen(!open)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', background: 'linear-gradient(135deg, #fffaf7, #fff9f6)', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span>ℹ️</span> Good to Know
            </span>
            <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.25s', color: 'var(--primary)', flexShrink: 0 }} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
                <div style={{ padding: '28px 28px 32px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 0, alignItems: 'center', borderTop: '1px solid #f0f0f0' }}>
                  <div style={{ padding: '0 32px 0 0' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-in</span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkIn}</span>
                  </div>
                  <div style={{ height: 48, background: '#eee' }} />
                  <div style={{ padding: '0 0 0 32px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-out</span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkOut}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// ── Select Room ──
function SelectRoomSection({ rooms, photosByCategory, onOpenLightbox }) {
  const [showAllRooms, setShowAllRooms] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(null)
  const [imgIndex, setImgIndex] = useState({})

  const FALLBACK_IMGS = [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  ]

  // Amenity icons mapping
  const AMENITY_ICONS = {
    'WiFi': '📶', 'AC': '❄️', 'Personal Locker': '🔒', 'Common Bathroom': '🚿',
    'En-suite Bathroom': '🛁', 'Double Bed': '🛏️', 'King Bed': '🛏️',
    'Privacy Curtain': '🪟', 'Mountain View': '🏔️', 'Female Only': '👩',
    'Charging Points': '🔌', 'Housekeeping': '🧹', 'Hot Water': '🚿',
  }

  const displayedRooms = showAllRooms ? rooms : rooms.slice(0, 3)

  // discounted price (show 20% off)
  const origPrice = (price) => Math.round(price / 0.80)

  return (
    <section id="select-room" style={{ padding: '40px 0 56px', background: '#fff', borderTop: '1px solid #efefef' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 28, color: '#c0c0c0', textAlign: 'center' }}>
          SELECT ROOM
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {displayedRooms.map((room, roomIdx) => {
            const categoryPhotos = Object.entries(photosByCategory).find(([k]) =>
              k.toLowerCase().includes(room.id.replace(/-/g, ' ').toLowerCase()) ||
              room.name.toLowerCase().includes(k.toLowerCase())
            )
            const roomPhotos = categoryPhotos ? categoryPhotos[1] : []
            const currentImgIdx = imgIndex[room.id] || 0
            const displayImg = roomPhotos.length > 0
              ? cld(roomPhotos[currentImgIdx % roomPhotos.length])
              : FALLBACK_IMGS[roomIdx % FALLBACK_IMGS.length]

            const isCalOpen = calendarOpen === room.id
            const isSoldOut = room.soldOut || false
            const availText = room.availability || '2 BEDS AVAILABLE'
            const orig = origPrice(room.price)
            const discountPct = '20% OFF'

            return (
              <div key={room.id} style={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
                borderBottom: '1px solid #f0f0f0',
                minHeight: 200,
              }}>
                {/* LEFT — Image with dot indicators */}
                <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => roomPhotos.length > 0 && onOpenLightbox(roomPhotos, currentImgIdx)}
                >
                  <img
                    src={displayImg} alt={room.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Dot indicators like Lilys */}
                  {roomPhotos.length > 1 && (
                    <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
                      {roomPhotos.slice(0, 5).map((_, i) => (
                        <button key={i}
                          onClick={e => { e.stopPropagation(); setImgIndex(prev => ({ ...prev, [room.id]: i })) }}
                          style={{ width: 6, height: 6, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: i === currentImgIdx ? '#fff' : 'rgba(255,255,255,0.45)', transition: 'background 0.2s' }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* RIGHT — Details */}
                <div style={{ padding: '20px 24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                  {/* Top: name + price row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', lineHeight: 1.3, marginBottom: 4 }}>{room.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: '#888', marginBottom: 4 }}>
                        <span>👤</span> <span>x 1 Guest</span>
                      </div>
                      <p style={{ color: '#999', fontSize: '0.82rem', lineHeight: 1.5 }}>{room.desc}</p>
                    </div>

                    {/* Price block — right aligned like Lilys */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', marginBottom: 2 }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2d9b5a', background: '#e8f8ee', padding: '2px 8px', borderRadius: 4 }}>20% OFF</span>
                        <span style={{ fontSize: '0.82rem', color: '#bbb', textDecoration: 'line-through' }}>₹{orig.toLocaleString()}</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>₹{room.price.toLocaleString()}</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#bbb', textAlign: 'right' }}>1 night</div>
                      {/* Availability */}
                      {isSoldOut
                        ? <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e85c3a', marginTop: 6, textAlign: 'right', letterSpacing: '0.5px' }}>SOLD OUT</div>
                        : <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2d9b5a', marginTop: 6, textAlign: 'right' }}>{availText}</div>
                      }
                    </div>
                  </div>

                  {/* Amenity icons row */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '10px 0' }}>
                    {room.amenities.map((a, i) => (
                      <span key={a} title={a} style={{
                        fontSize: '0.75rem', padding: '4px 10px', borderRadius: 6,
                        background: '#f7f7f7', color: '#555', fontWeight: 500,
                        display: 'flex', alignItems: 'center', gap: 4,
                        border: '1px solid #efefef',
                      }}>
                        {AMENITY_ICONS[a] || '✓'} {a}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: Availability calendar + Book button */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <button
                      onClick={() => setCalendarOpen(isCalOpen ? null : room.id)}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', fontWeight: 600, color: '#555', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      Availability calendar
                      <ChevronDown size={14} style={{ transform: isCalOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                    </button>

                    {!isSoldOut && (
                      <a href={room.bookingUrl} target="_blank" rel="noreferrer"
                        style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '11px 28px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.3px', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1a1a1a'}
                      >
                        Book Now
                      </a>
                    )}
                  </div>

                  {/* Calendar dropdown */}
                  <AnimatePresence>
                    {isCalOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                        <div style={{ marginTop: 12, padding: '14px 16px', background: '#f9f9f9', borderRadius: 10, fontSize: '0.82rem', color: '#888', border: '1px solid #efefef' }}>
                          📅 Check availability by visiting our booking page — real-time calendar available there.
                          <a href={room.bookingUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 700, marginLeft: 6 }}>View Calendar →</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>

        {rooms.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={() => setShowAllRooms(!showAllRooms)} className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
              {showAllRooms ? 'Show Less ↑' : `Show All ${rooms.length} Rooms +`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
// ── Features — expandable with + icon ──
function FeaturesSection({ meta }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <span style={{ fontWeight: 800, fontSize: '0.78rem', letterSpacing: '3.5px', textTransform: 'uppercase', color: '#aaa' }}>FEATURES / CONVENIENCES</span>
          <span style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '1.2rem', fontWeight: 300, flexShrink: 0, transition: 'all 0.25s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 24 }}>
                {meta.features.map(f => {
                  const Icon = f.icon
                  return (
                    <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.87rem', color: 'var(--text)', fontWeight: 500, border: '1px solid #e8e8e8', borderRadius: 8, padding: '9px 16px', background: '#fff' }}>
                      <Icon size={15} style={{ color: '#888', flexShrink: 0 }} /> {f.label}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// ── Characteristics ──
function CharacteristicsSection({ meta }) {
  return (
    <section style={{ padding: '48px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '32px 24px' }}>
          {meta.characteristics.map(cat => {
            const Icon = cat.icon
            return (
              <div key={cat.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Icon size={17} style={{ color: '#555', flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>{cat.label}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ccc', flexShrink: 0, marginTop: 7 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Map — full width with Live Free Hostel on left, nearby attractions on right ──
// By Air / By Train / By Road moved below the map
function ReachUsSection({ meta, dest }) {
  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: 12, color: 'var(--text)' }}>
          How to Reach Us
        </h2>
        <p style={{ color: '#999', fontSize: '0.92rem', marginBottom: 36 }}>
          Live Free Hostel, {dest.name} — and the best spots nearby.
        </p>

        {/* Full-width map */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', marginBottom: 40 }}>
          {/* Left: hostel info */}
          <div style={{ background: '#1a1a1a', color: '#fff', padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <MapPin size={18} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>Live Free Hostel</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{meta.address}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {meta.highlights.slice(0, 5).map(h => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ color: 'var(--primary-light)', flexShrink: 0 }}>📍</span> {h}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 28, fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
              Nearby attractions shown on map →
            </div>
          </div>
          {/* Right: full map */}
          <iframe
            src={meta.mapSrc} width="100%" height="400"
            style={{ border: 0, display: 'block' }} allowFullScreen
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title={`LiveFree ${dest.name}`}
          />
        </div>

        {/* By Air, By Train, By Road — below the map */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {Object.values(meta.directions).map(({ label, icon: Icon, content }) => (
            <div key={label} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: 12, padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} style={{ color: 'var(--primary)' }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)' }}>{label}</span>
              </div>
              <p style={{ fontSize: '0.87rem', color: '#777', lineHeight: 1.7 }}>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Travel Itinerary ──
function ItinerarySection({ itinerary, dest, meta }) {
  return (
    <section id="travel-itinerary" style={{ padding: '64px 0', background: '#fdf6f0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80" alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ marginTop: 20, padding: '20px 24px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.8, margin: 0 }}>{meta.about.substring(0, 200)}...</p>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--text)' }}>Travel </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--primary)', fontStyle: 'italic' }}>Itinerary</span>
          </div>
          <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: 28 }}>Wake up to fresh mornings, friendly faces, and an energy that is unique to the cities we call home.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {itinerary.map((day, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '3px solid var(--primary)' }}
              >
                <h4 style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 12, color: 'var(--text)' }}>{day.day}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {day.activities.map((a, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '0.87rem', color: '#777' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />{a}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Accordion ──
function AccordionSection({ title, children, bg = '#fff' }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ background: bg, borderTop: '1px solid #eee' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{title}</span>
          <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'var(--primary)', flexShrink: 0 }} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
              <div style={{ paddingBottom: 24 }}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CancellationSection({ meta }) {
  return (
    <AccordionSection title="Cancellation Policy">
      <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.8 }}>{meta.cancellationPolicy}</p>
    </AccordionSection>
  )
}

function PropertyPolicySection({ city }) {
  const policies = CITY_PROPERTY_POLICY?.[city] || []
  if (!policies.length) return null
  return (
    <AccordionSection title="Property Policy">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {policies.map((p, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: 8 }} />{p}
          </li>
        ))}
      </ul>
    </AccordionSection>
  )
}

function MustReadsSection({ city }) {
  const reads = CITY_MUST_READS?.[city] || []
  if (!reads.length) return null
  return (
    <section style={{ padding: '56px 0 64px', background: '#fafafa', borderTop: '1px solid #eee' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: 32, color: 'var(--text)' }}>MUST READS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {reads.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: true }}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', borderRadius: 14, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #eee', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.11)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)' }}
            >
              <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{ position: 'absolute', top: 14, left: 14, background: 'var(--primary)', color: '#fff', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 11px', borderRadius: 99 }}>{item.tag}</span>
              </div>
              <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 10, lineHeight: 1.45, flex: 1 }}>{item.title}</h3>
                <p style={{ fontSize: '0.84rem', color: '#999', lineHeight: 1.65, marginBottom: 16 }}>{item.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                  Read more <ExternalLink size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── MAIN PAGE ──
export default function DestinationPage({ city }) {
  const dest = DESTINATIONS.find(d => d.id === city)
  const meta = CITY_META[city]
  const rooms = CITY_ROOMS?.[city] || []
  const itinerary = CITY_ITINERARY?.[city] || []
  const photosByCategory = CITY_PHOTOS[city] || {}
  const allPhotos = Object.values(photosByCategory).flat()

  const [lightboxPhotos, setLightboxPhotos] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (photos, i) => { setLightboxPhotos(photos); setLightboxIndex(i) }
  const closeLightbox = () => setLightboxIndex(null)

  if (!dest || !meta) return null

  return (
    <>
      {/* 1. Gallery */}
      <GallerySection photosByCategory={photosByCategory} allPhotos={allPhotos} onOpenLightbox={openLightbox} />

      {/* 2. Name + Address + About (full-width) + 2 redirect buttons */}
      <HeroInfoSection dest={dest} meta={meta} />

      {/* 3. Good to Know — expandable */}
      <GoodToKnowSection meta={meta} />

      {/* 4. Select Room */}
      <SelectRoomSection rooms={rooms} photosByCategory={photosByCategory} onOpenLightbox={openLightbox} />

      {/* 5. Features */}
      <FeaturesSection meta={meta} />

      {/* 6. Characteristics */}
      <CharacteristicsSection meta={meta} />

      {/* 7. Map (full width, Live Free on left, nearby on right) + By Air/Train/Road below */}
      <ReachUsSection meta={meta} dest={dest} />

      {/* 8. Travel Itinerary */}
      {itinerary.length > 0 && <ItinerarySection itinerary={itinerary} dest={dest} meta={meta} />}

      {/* 9. Cancellation Policy */}
      <CancellationSection meta={meta} />

      {/* 10. Property Policy */}
      <PropertyPolicySection city={city} />

      {/* 11. Must Reads */}
      <MustReadsSection city={city} />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightBox
            images={lightboxPhotos} index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={() => setLightboxIndex(i => (i - 1 + lightboxPhotos.length) % lightboxPhotos.length)}
            onNext={() => setLightboxIndex(i => (i + 1) % lightboxPhotos.length)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
