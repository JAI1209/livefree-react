import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Star, Wifi, Coffee, Users, X, ChevronLeft, ChevronRight, ChevronDown,
  Phone, Mail, Plus, Check,
  Globe, ParkingCircle, ConciergeBell, UtensilsCrossed, BedDouble, Bath,
  Tv, PawPrint, ShieldCheck, Flame, Trash2, Sofa, Shirt,
  Thermometer, Droplets, Wind, Plug, Refrigerator, KeyRound,
  AlarmSmoke, Info, ImageOff,
} from 'lucide-react'
import { DESTINATIONS } from '../data/siteData'
import { CITY_ROOMS, CITY_ITINERARY } from '../data/siteData'

const CLD = 'https://res.cloudinary.com/dtksfqdju/image/upload'
const cld = (id) => `${CLD}/${id}`

// ── Navbar height constant — change if navbar height changes ──
const NAVBAR_H = 64

const ALL_AMENITIES = [
  { id: 'wifi',        label: 'Wi-Fi',                icon: Wifi,          category: 'Internet',  checked: true  },
  { id: 'reception',   label: '24-hour reception',    icon: ConciergeBell, category: 'Services',  checked: true  },
  { id: 'checkin',     label: 'Express check-in/out', icon: KeyRound,      category: 'Services',  checked: true  },
  { id: 'laundry',     label: 'Laundry service',      icon: Shirt,         category: 'Services',  checked: true  },
  { id: 'locker',      label: 'Safe deposit box',     icon: ShieldCheck,   category: 'Services',  checked: true  },
  { id: 'parking',     label: 'Free parking',         icon: ParkingCircle, category: 'Parking',   checked: true  },
  { id: 'ac',          label: 'Air conditioning',     icon: Wind,          category: 'Rooms',     checked: true  },
  { id: 'tv',          label: 'Flat screen TV',        icon: Tv,            category: 'Rooms',     checked: false },
  { id: 'desk',        label: 'Desk',                 icon: BedDouble,     category: 'Rooms',     checked: false },
  { id: 'outlet',      label: 'Power outlet near bed',icon: Plug,          category: 'Rooms',     checked: false },
  { id: 'sofa',        label: 'Outdoor furniture',    icon: Sofa,          category: 'Rooms',     checked: false },
  { id: 'kettle',      label: 'Electric kettle',      icon: Coffee,        category: 'Kitchen',   checked: false },
  { id: 'fridge',      label: 'Refrigerator',         icon: Refrigerator,  category: 'Kitchen',   checked: false },
  { id: 'shower',      label: 'Shower',               icon: Droplets,      category: 'Bathroom',  checked: true  },
  { id: 'bathroom',    label: 'Bathroom',             icon: Bath,          category: 'Bathroom',  checked: true  },
  { id: 'toilet',      label: 'Toilet',               icon: Bath,          category: 'Bathroom',  checked: true  },
  { id: 'soap',        label: 'Body soap',            icon: Droplets,      category: 'Bathroom',  checked: false },
  { id: 'shampoo',     label: 'Shampoo',              icon: Droplets,      category: 'Bathroom',  checked: false },
  { id: 'toothbrush',  label: 'Toothbrush',           icon: Droplets,      category: 'Bathroom',  checked: false },
  { id: 'toiletpaper', label: 'Toilet paper',         icon: Trash2,        category: 'Bathroom',  checked: false },
  { id: 'towels',      label: 'Towels',               icon: Shirt,         category: 'Bathroom',  checked: false },
  { id: 'hairdryer',   label: 'Hair dryer',           icon: Wind,          category: 'Bathroom',  checked: false },
  { id: 'smoke',       label: 'Smoke detectors',      icon: AlarmSmoke,    category: 'Safety',    checked: false },
  { id: 'fire',        label: 'Fire extinguisher',    icon: Flame,         category: 'Safety',    checked: false },
  { id: 'security',    label: 'Security',             icon: ShieldCheck,   category: 'Safety',    checked: true  },
  { id: 'nopets',      label: 'No pets allowed',      icon: PawPrint,      category: 'Pets',      checked: true  },
]

const CHARACTERISTICS = [
  { id: 'internet', label: 'Internet Connection',  icon: Globe,           items: ['Free Wi-Fi throughout the property'] },
  { id: 'parking',  label: 'Parking Options',      icon: ParkingCircle,   items: ['Free on-site parking available'] },
  { id: 'services', label: 'Services',             icon: ConciergeBell,   items: ['24-hour reception','Express check-in/check-out','Private check-in/check-out','Luggage storage','Laundry service','Excursion assistance / Ticket service','24-hour security'] },
  { id: 'kitchen',  label: 'The Kitchen Has',      icon: UtensilsCrossed, items: ['Electric kettle','Refrigerator'] },
  { id: 'rooms',    label: 'The Rooms Have',       icon: BedDouble,       items: ['Air conditioning','Flat screen TV','Power outlet near bed'] },
  { id: 'bathroom', label: 'The Bathroom Has',     icon: Bath,            items: ['Free bathroom items','Shower','Bathtub or shower'] },
  { id: 'media',    label: 'Media',                icon: Tv,              items: ['LCD TV','Streaming services available'] },
  { id: 'general',  label: 'General Services',     icon: ShieldCheck,     items: ['Smoking is prohibited','Smoke detectors','Fire extinguisher'] },
  { id: 'pets',     label: 'Pets',                 icon: PawPrint,        items: ['No pets allowed'] },
]

const IMPORTANT_INFO = {
  checkIn:   'from 2:00 PM to 11:59 PM',
  checkOut:  'until 12:00 PM',
  extraBeds: 'The number of extra beds allowed in a room is 1.',
  rules: [
    'This accommodation does not allow bachelor or bachelorette parties or similar celebrations.',
  ],
}

const CITY_PHOTOS = {
  varanasi: {
    '10-bed Dorm':       ['bathroom_2_lkci6f','2_vbrtl2','1_qyrxzf','bathroom_3_ls12af','main_sehe7c','bathroom_1_sihzhb'],
    '6-bed Dorm':        ['main_d279el','2_z7hkg2','GOPR4927_fuimtw','1_muwyuu','bathroom_t4paqi'],
    '6-bed Female Dorm': ['3_uqieao','bathroom_uohqot','main_b6t8xi','1_etla21','2_hisbqs'],
    '8-bed Dorm':        ['IMG_7251_kggfn6','bathroom_2_alk4e3','IMG_7250_zjglss','main_wmda7j','bathroom_1_wujawj'],
    'Common Area':       ['IMG_8959_djblsl','IMG_2680_c07en4','_6__0021_-_Copy_ebjgid','_6__0053_vtwnvh','IMG_20231013_125201_jgit5d','Live_Music_vioifo','IMG_20230218_113337_1_e4ucvi','Valentines_day_ibke4i','sandup_comedy_hydrbo','communal_dinner_ejkrjq','1653632535675-01_ql75el','Holi_celebration_adpyxz'],
    'Deluxe Private':    ['IMG_7254_cfopvv','2_kfjrez','IMG_7029_xbgwwn','1_llvmn5','4_e9icrp','GOPR4881_m3csgi','GOPR4887_kamabj','bathroom_ftf16o','main_wfcf2o'],
    'Reception':         ['main_zcjmir','_6__0135_1_dbnwhs','_6__0154_zk9pq9','_6__0198_weykzc'],
    'Property':          ['IMG_20231126_175041_vsorfl','IMG_20231126_175143_pabnyb','GOPR4866-01_cvdl7a','IMG_2680_dd2twv','DSC09140_vjitra','GOPR4897_gqv3az','IMG_7282-Edit-01-01_hfzdxi','1652357644808_image_6483441_t1ncgf'],
    'Varanasi Main':     ['Main_1_hru0d7','Main_2_akh0p1','LFV7_kbja74','LFV8_ogbg7n','LFV4_vmjkuh','LFV22_hls0gf','LFV2_amyqdp','LFV1_c8auvu'],
    'VNS':               ['IMG_1971_x82ytm','IMG_1515_bndceg','IMG20221214071238_bbm6h2','IMG20221214071531_d5jqdr','IMG_1571_i8wwdc','IMG_1496_trwqvi','IMG_1487_gmbhz2','IMG_1585_bpsrqp','DP5_7980_1_aqijle','DP5_5879_puim7i'],
  },
  dehradun: {
    '4 Bed Dorm':    ['image_9ec3b750_n1jctt','IMG_20251128_142909_00_033_jsebve','IMG_20251128_143221_00_039_jnvwul','IMG_20251128_143107_00_037_x7ko4y','IMG_4323_ekaxct','IMG_20251128_143333_00_041_vplnup','IMG_20251128_143029_00_036_ctjeqi','IMG_20251128_143257_00_040_wmdw11','IMG_20251128_143008_00_035_tknjtu','IMG_20251128_143411_00_043_ye0nsu'],
    '6 Bed Dorm':    ['LFD9_30_lwqbbg','IMG_4180_lk6w4w','IMG_4182_gtyk5u','IMG_4178_iigosg','IMG_4181_ojoohj','LFD3_mnqkrj','IMG_20251128_134399_00_016_cmkmcj','IMG_20251128_134144_00_012_n3ztng','IMG_20251128_133645_00_006_qpugy9','DSC04358_s9f9rw','IMG_20251128_133538_00_005_igshdu','DSC04422_lxfwap','DSC04349_ziokrp'],
    '8 Bed Dorm':    ['IMG_20251207_125040_00_267_zwlvck','IMG_20251207_124703_00_259_2_byt4eb','LFD2_aiy5a5','IMG_4226_brdugj','image_70661780_cut4gl','IMG_4221_cku0us','image_2db66309_umdbwo','image_36fffebc_d5qhqn','IMG_4227_t3gsnf','image_728a3724_h5io8e','IMG_4217_osuno1'],
    'Building':      ['IMG_20251128_173843_00_091_bip88g','IMG_20251128_163832_00_084_qff8uu','IMG_20251128_135052_00_017_ad0ofm','IMG_20251128_160857_00_059_y4alb7','IMG_20251128_162552_00_067_hmvk4q','LFD9_1_daulbb','LFD9_2_lmsjty','IMG_20251128_165250_00_090_wfwt0h','IMG_20251128_161422_00_066_cwobcl','IMG_20251128_165000_00_086_in4qbt','IMG_20251128_165135_00_088_b37eyd','LFD9_6_ufhpy2','IMG_4837_b7eyf3','IMG_20251128_135402_00_019_m9pfae','IMG_20251128_135300_00_018_vutavu','IMG_4835_d6ohqf','IMG_20251128_165159_00_089_gyyagm','IMG_4853_p4akxi','IMG_4823_hg1a6z'],
    'Cafe':          ['LFD12_pkazl4','LFD10_jtfjui','LFD9_3_hn6fbk','LFD9_5_zi4cfh','LFD9_23_yvbp0d','LFD9_18_hnaek0','LFD9_22_a5goe2','image_e46c895e_mybtbg','image_47616695_c4d3nv','image_758a0f94_ujqmvx','image_77a0fe46_vmuhl6','image_63c1e230_blpkbo'],
    'Deluxe Private':['IMG_20251128_160103_00_051_stsrhw','IMG_20251128_155735_00_046_mbtptk','IMG_20251128_160315_00_055_cc6htr','IMG_20251128_161002_00_060_d8xkzc','IMG_20251128_161124_00_063_in48kx','IMG_20251128_161103_00_062_uui23q','IMG_20251128_155853_00_048_ds8hzd','IMG_20251128_160223_00_053_dobty7','IMG_20251128_155805_00_047_nczgoq','IMG_20251128_161155_00_064_vyyaze','IMG_20251128_160640_00_057_azmbme','IMG_20251128_163651_00_082_aadr8z'],
    'Family Private':['IMG_4355_lntw4e','IMG_4365_vyfli1','IMG_4364_pcjwqc','IMG_4357_injjsn','IMG_4354_iemuwf','IMG_4353_xkhn7f','IMG_4356_mw2gqf','IMG_4358_sfvn2r','image_37806f19_knyaub','image_3275f2f0_aaziwx','image_4b71cf46_zycpnz','image_77a3eb90_xkie2f','IMG_20251128_162901_00_071_turlp3','IMG_20251128_163138_00_075_doetsa','IMG_20251128_162805_00_069_utdjkw','IMG_20251128_162833_00_070_vdd5vy','IMG_20251128_162738_00_068_f9aefo','IMG_20251128_163333_00_077_fnoheq','IMG_20251128_163034_00_073_ubrrzd','IMG_20251128_163547_00_081_bzbcyc'],
    'Female Dorm':   ['LFD6_cut51z','IMG_20251128_141714_00_027_fbblwk','LFD9_20_payhsn','IMG_20251128_141758_00_028_ciszf8','IMG_20251128_141649_00_026_xrnsfr','DSC04520_rbszjj','DSC04527_xh6qww','DSC04518_j4gdxv','DSC04522_wndxfo','IMG_20251128_141447_00_021_ltsepp','IMG_20251128_141520_00_022_m7alqr','IMG_20251128_141600_00_024_dvj25s','IMG_20251128_141541_00_023_poaexj','IMG_20251128_141628_00_025_sutngr','IMG_4271_nt2qt7','IMG_4273_u77elm','IMG_4275_nelcxv','IMG_20251128_141815_00_029_cbfkog'],
  },
  rishikesh: {},  // intentionally empty — placeholder will render
}

const CITY_META = {
  rishikesh: {
    tagline: 'Dev Bhoomi · Land of Gods',
    about: "Nestled at the foot of the Himalayas, Rishikesh is India's yoga capital and adventure hub.",
    highlights: ['Riverside yoga & meditation','White-water river rafting','Bungee jumping & zip-lining','Laxman Jhula & Ram Jhula','Sunset Ganga aarti','Beatles Ashram trek'],
    video: 'sPQQLwdT1rQ',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.82505972936!2d78.3251937!3d30.127819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091644ee11e80d%3A0x9f80ed977d1916c6!2sLive%20Free%20Hostel%20Rishikesh!5e0!3m2!1sen!2sin!4v1779344624890!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      'Via air':   'Jolly Grant Airport (DED), then taxi to LiveFree Rishikesh (~35 mins).',
      'Via train': 'Haridwar Railway Station, then bus or taxi to Rishikesh (~30 mins).',
      'Via bus':   'ISBT Haridwar or Dehradun, then local bus/taxi to Rishikesh.',
      'Via car':   'From Delhi: NH334 via Haridwar. GPS: LiveFree Hostel Rishikesh.',
    },
  },
  dehradun: {
    tagline: 'Uttarakhand · Gateway to Himalayas',
    about: 'Dehradun is a city of pine forests, colonial architecture, and mountain air.',
    highlights: ["Robber's Cave","Sahastradhara waterfalls","Mussoorie day-trip","Forest Research Institute","Paltan Bazaar","Mountain biking"],
    video: null,
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.7862564688057!2d78.07051957618397!3d30.385426802333587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d798eee5f1b5%3A0xb57a22052215b674!2sLive%20Free%20Hostel%20Dehradun!5e0!3m2!1sen!2sin!4v1779344677046!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      'Via air':   'Jolly Grant Airport (DED), then taxi to LiveFree Dehradun (~45 mins).',
      'Via train': 'Dehradun Railway Station, then auto/cab to LiveFree (~10–15 mins).',
      'Via bus':   'ISBT Dehradun, then local taxi or auto to the hostel.',
      'Via car':   'From Delhi: NH58 via Haridwar. GPS: LiveFree Hostel Dehradun.',
    },
  },
  varanasi: {
    tagline: 'Uttar Pradesh · City of Light',
    about: 'One of the oldest living cities on earth, Varanasi pulses with ancient ritual, colour, and sound.',
    highlights: ['Sunrise boat ride','Evening Ganga aarti','Vishwanath Temple','Sarnath ruins','Silk shopping','Street food walk'],
    video: 'B7QUA2zZsQ8',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5776986113897!2d83.00443047605633!3d25.284787728146224!2m3!1f0!2f0!3f0!3m2!1s0x398e33ba110bfd13%3A0x16133790c1ae2c19!2sLive%20Free%20Hostel%20Varanasi!5e0!3m2!1sen!2sin!4v1779344741618!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      'Via air':   'Lal Bahadur Shastri Airport (VNS), then taxi to LiveFree Varanasi (~30 mins).',
      'Via train': 'Varanasi Junction, then auto/cab to the hostel (~20 mins).',
      'Via bus':   'Varanasi Bus Stand, then local auto to LiveFree.',
      'Via car':   'From Lucknow: NH30. From Allahabad: NH19. GPS: LiveFree Hostel Varanasi.',
    },
  },
}

const getAmenityIcon = (amenityLabel) => {
  const found = ALL_AMENITIES.find(a => a.label.toLowerCase() === amenityLabel.toLowerCase())
  return found?.icon || ShieldCheck
}

// ─────────────────────────────────────────────────────────────
// FIX 1 — Photo Gallery Section (handles empty + overlap)
// - paddingTop = NAVBAR_H + datepicker height (56px) = 120px total
// - When empty → renders premium placeholder at same height (420px)
// ─────────────────────────────────────────────────────────────
function GallerySection({ allPhotos, onOpenLightbox }) {
  const hasPhotos = allPhotos.length > 0

  return (
    // FIX: padding-top pushes gallery below sticky datepicker bar (64 navbar + 56 datepicker)
    <div style={{ background: '#f5f5f5', paddingTop: 8, paddingBottom: 8 }}>
      <div className="container" style={{ padding: '0 28px' }}>

        {hasPhotos ? (
          <>
            {/* Real gallery grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 8, height: 420 }}>
              {/* Main large photo */}
              <div
                style={{ borderRadius: '12px 0 0 12px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => onOpenLightbox(allPhotos, 0)}
              >
                <img
                  src={cld(allPhotos[0])}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Right 4-grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 8 }}>
                {allPhotos.slice(1, 5).map((id, i) => (
                  <div
                    key={id}
                    style={{
                      borderRadius: i === 1 ? '0 12px 0 0' : i === 3 ? '0 0 12px 0' : 0,
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => onOpenLightbox(allPhotos, i + 1)}
                  >
                    <img
                      src={cld(id)}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* See all button */}
            {allPhotos.length > 5 && (
              <div style={{ textAlign: 'center', marginTop: 12 }}>
                <button
                  onClick={() => onOpenLightbox(allPhotos, 0)}
                  className="btn btn-ghost"
                  style={{ fontSize: '0.85rem' }}
                >
                  SEE ALL PHOTOS 📸
                </button>
              </div>
            )}
          </>
        ) : (
          // FIX 1 — Rishikesh placeholder: same 420px height, no collapse
          <div style={{
            height: 420,
            borderRadius: 16,
            background: 'linear-gradient(135deg, #fdf0ea 0%, #fce4d6 100%)',
            border: '2px dashed #e8b49a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'rgba(232, 93, 58, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ImageOff size={32} style={{ color: 'var(--primary)' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 8,
              }}>
                Photos Coming Soon
              </p>
              <p style={{ color: '#a07060', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Images for this property will be available shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Direction Accordion
// ─────────────────────────────────────────────────────────────
function DirectionAccordion({ label, content }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderRadius: 10, border: '1px solid #eee', marginBottom: 10, background: '#fff', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '14px 18px', background: 'none',
          border: 'none', cursor: 'pointer',
          fontWeight: open ? 700 : 500,
          fontSize: '0.92rem',
          color: open ? 'var(--primary)' : 'var(--text)',
          textAlign: 'left',
        }}
      >
        {label}
        <ChevronDown
          size={16}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'var(--primary)', flexShrink: 0 }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '0 18px 16px', fontSize: '0.88rem', color: '#666', lineHeight: 1.7 }}>
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────────────────────
function LightBox({ images, index, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.94)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        style={{ position: 'absolute', left: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ChevronLeft size={24} />
      </button>
      <img
        src={cld(images[index])}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{ maxHeight: '88vh', maxWidth: '88vw', objectFit: 'contain', borderRadius: 10 }}
      />
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        style={{ position: 'absolute', right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ChevronRight size={24} />
      </button>
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <X size={18} />
      </button>
      <div style={{ position: 'absolute', bottom: 20, color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
        {index + 1} / {images.length}
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Amenities Section
// ─────────────────────────────────────────────────────────────
function AmenitiesSection() {
  const [amenities, setAmenities] = useState(ALL_AMENITIES)
  const [expandOpen, setExpandOpen] = useState(false)

  const checkedItems = amenities.filter(a => a.checked)
  const categories = [...new Set(amenities.map(a => a.category))]

  const toggleAmenity = (id) => {
    setAmenities(prev => prev.map(a => a.id === id ? { ...a, checked: !a.checked } : a))
  }

  return (
    // FIX: border-top ensures clear visual separation from gallery above
    <div style={{ background: '#fff', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '24px 0' }}>
      <div className="container">
        <h3 style={{
          fontWeight: 800, fontSize: '1rem',
          letterSpacing: '3px', textTransform: 'uppercase',
          marginBottom: 16, color: 'var(--primary)',
        }}>
          AMENITIES
        </h3>

        {/* Pills row */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          {checkedItems.map(a => {
            const Icon = a.icon
            return (
              <div key={a.id} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500,
                border: '1px solid #eee', borderRadius: 8,
                padding: '8px 14px', background: '#fff',
              }}>
                <Icon size={15} style={{ color: '#888' }} />
                {a.label}
              </div>
            )
          })}

          {/* + expand button */}
          <button
            onClick={() => setExpandOpen(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.85rem', color: '#999', fontWeight: 500,
              border: '1px dashed #ddd', borderRadius: 8,
              padding: '8px 14px', background: 'transparent', cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#999' }}
          >
            <Plus size={15} style={{ color: 'var(--primary)' }} />
            Add amenity
          </button>
        </div>

        {/* Expand panel */}
        <AnimatePresence>
          {expandOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.2, 0.9, 0.4, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ marginTop: 16, border: '1px solid #eee', borderRadius: 12, background: '#fff', overflow: 'hidden' }}>
                {categories.map((cat, ci) => {
                  const catItems = amenities.filter(a => a.category === cat)
                  return (
                    <div key={cat} style={{ borderBottom: ci < categories.length - 1 ? '1px solid #f5f5f5' : 'none', padding: '16px 20px' }}>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', marginBottom: 10 }}>
                        {cat}
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 12px' }}>
                        {catItems.map(a => {
                          const Icon = a.icon
                          return (
                            <div
                              key={a.id}
                              onClick={() => toggleAmenity(a.id)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: 8,
                                padding: '7px 0', fontSize: '0.84rem', cursor: 'pointer',
                                color: a.checked ? 'var(--primary)' : 'var(--text)',
                                fontWeight: a.checked ? 600 : 400,
                                transition: 'color 0.15s', userSelect: 'none',
                              }}
                            >
                              <span style={{
                                width: 18, height: 18, borderRadius: '50%',
                                border: `1.5px solid ${a.checked ? 'var(--primary)' : '#ddd'}`,
                                background: a.checked ? 'var(--primary)' : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0, transition: 'all 0.15s',
                              }}>
                                {a.checked && <Check size={10} color="#fff" strokeWidth={3} />}
                              </span>
                              <Icon size={14} style={{ color: a.checked ? 'var(--primary)' : '#bbb', flexShrink: 0 }} />
                              {a.label}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
                <div style={{ padding: '12px 20px', borderTop: '1px solid #f5f5f5', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setExpandOpen(false)}
                    style={{ padding: '8px 22px', borderRadius: 8, fontSize: '0.83rem', fontWeight: 600, background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer' }}
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Characteristics Section
// ─────────────────────────────────────────────────────────────
function CharacteristicsSection() {
  const topPills = ['Wi-Fi', '24-hour reception', 'Express check-in/out', 'Air conditioning', 'No pets allowed']

  return (
    <section style={{ padding: '48px 0', background: '#fff', borderBottom: '1px solid #eee' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '1.6rem', textAlign: 'center', marginBottom: 24, letterSpacing: 1 }}>
          Characteristics
        </h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 36, paddingBottom: 28, borderBottom: '1px solid #f0f0f0' }}>
          {topPills.map(label => {
            const Icon = getAmenityIcon(label)
            return (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', border: '1px solid #ddd', borderRadius: 8, fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)', background: '#fff' }}>
                <Icon size={16} style={{ color: '#555' }} />
                {label}
              </div>
            )
          })}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px 40px' }}>
          {CHARACTERISTICS.map(cat => {
            const Icon = cat.icon
            return (
              <div key={cat.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <Icon size={20} style={{ color: '#333' }} />
                  <span style={{ fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#222' }}>
                    {cat.label}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.87rem', color: '#555' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#bbb', flexShrink: 0 }} />
                      {item}
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

// ─────────────────────────────────────────────────────────────
// Important Information Section
// ─────────────────────────────────────────────────────────────
function ImportantInfoSection() {
  const info = IMPORTANT_INFO
  return (
    <section style={{ padding: '48px 0', background: '#fafafa' }}>
      <div className="container">
        <div style={{ border: '1px solid #e8e8e8', borderRadius: 14, background: '#fff', padding: '32px 36px' }}>
          <h2 style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: 28, color: '#222' }}>
            Important Information
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            <div style={{ borderRight: '1px solid #f0f0f0', paddingRight: 32 }}>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#222' }}>Entrance: </span>
                <span style={{ fontSize: '0.92rem', color: '#555' }}>{info.checkIn}</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#222' }}>Exit: </span>
                <span style={{ fontSize: '0.92rem', color: '#555' }}>{info.checkOut}</span>
              </div>
              {info.extraBeds && (
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.92rem', color: '#222', marginBottom: 6 }}>Extra beds</p>
                  <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6 }}>{info.extraBeds}</p>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {info.rules.map((rule, i) => (
                <p key={i} style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.65, margin: 0 }}>{rule}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function DestinationPage({ city }) {
  const dest = DESTINATIONS.find(d => d.id === city)
  const meta = CITY_META[city]
  const rooms = CITY_ROOMS?.[city] || []
  const itinerary = CITY_ITINERARY?.[city] || []
  const photosByCategory = CITY_PHOTOS[city] || {}
  const allPhotos = Object.values(photosByCategory).flat()

  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(tomorrow)
  const [guests, setGuests] = useState(2)
  const [activeCategory, setActiveCategory] = useState(Object.keys(photosByCategory)[0] || '')
  const [lightboxPhotos, setLightboxPhotos] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showAllRooms, setShowAllRooms] = useState(false)
  const [cancelOpen, setCancelOpen] = useState(false)
  const [expandedRoom, setExpandedRoom] = useState(null)

  const openLightbox = (photos, i) => { setLightboxPhotos(photos); setLightboxIndex(i) }
  const closeLightbox = () => setLightboxIndex(null)

  const displayedRooms = showAllRooms ? rooms : rooms.slice(0, 3)
  const activePhotos = photosByCategory[activeCategory] || []

  if (!dest || !meta) return null

  return (
    <>
      {/* ── Date Picker Bar ──
          FIX 2 & 3: sticky top = NAVBAR_H so it sits right below navbar,
          not overlapping anything above.
          Gallery and amenities sit below this bar naturally in DOM flow.
      ── */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #eee',
        padding: '14px 0',
        position: 'sticky',
        top: NAVBAR_H,   // ← KEY FIX for Dehradun & Varanasi overlap
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}>
        <div className="container" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #ddd', borderRadius: 8, padding: '8px 14px', flex: 1, minWidth: 140 }}>
            <span style={{ fontSize: '0.75rem', color: '#999', fontWeight: 600 }}>CHECK-IN</span>
            <input
              type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
              style={{ border: 'none', outline: 'none', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', background: 'transparent', cursor: 'pointer' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #ddd', borderRadius: 8, padding: '8px 14px', flex: 1, minWidth: 140 }}>
            <span style={{ fontSize: '0.75rem', color: '#999', fontWeight: 600 }}>CHECK-OUT</span>
            <input
              type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
              style={{ border: 'none', outline: 'none', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', background: 'transparent', cursor: 'pointer' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #ddd', borderRadius: 8, padding: '8px 14px', minWidth: 120 }}>
            <span style={{ fontSize: '0.75rem', color: '#999', fontWeight: 600 }}>GUESTS</span>
            <select
              value={guests} onChange={e => setGuests(e.target.value)}
              style={{ border: 'none', outline: 'none', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', background: 'transparent', cursor: 'pointer' }}
            >
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <button className="btn btn-primary" style={{ padding: '10px 28px', fontWeight: 700, fontSize: '0.9rem' }}>
            CHECK RATES
          </button>
        </div>
      </div>

      {/* ── Photo Gallery (or placeholder for Rishikesh) ── */}
      <GallerySection allPhotos={allPhotos} onOpenLightbox={openLightbox} />

      {/* ── Amenities ── */}
      <AmenitiesSection />

      {/* ── Room Types ── */}
      <section style={{ padding: '56px 0', background: '#fff' }}>
        <div className="container">
          <h2 style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 32, color: 'var(--primary)' }}>
            ROOM TYPES
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {displayedRooms.map((room) => {
              const categoryPhotos = Object.entries(photosByCategory).find(([k]) =>
                k.toLowerCase().includes(room.id.replace(/-/g, ' ').toLowerCase()) ||
                room.name.toLowerCase().includes(k.toLowerCase())
              )
              const roomPhotos = categoryPhotos ? categoryPhotos[1] : []
              const heroPhoto = roomPhotos[0]
              const isExpanded = expandedRoom === room.id

              return (
                <div key={room.id} style={{ borderBottom: '1px solid #f0f0f0', padding: '24px 0' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: 24, alignItems: 'start' }}>
                    <div
                      style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: '#eee', cursor: heroPhoto ? 'pointer' : 'default' }}
                      onClick={() => heroPhoto && openLightbox(roomPhotos, 0)}
                    >
                      {heroPhoto
                        ? <img src={cld(heroPhoto)} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : <div style={{ width: '100%', height: '100%', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: '0.8rem' }}>No photo</div>
                      }
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, background: room.type === 'Private' ? '#e8f5e9' : '#e3f2fd', color: room.type === 'Private' ? '#2e7d32' : '#1565c0', padding: '2px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: 1 }}>
                          {room.type}
                        </span>
                      </div>
                      <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>{room.name}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 12, maxWidth: 420 }}>{room.desc}</p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {room.amenities.map(a => (
                          <span key={a} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: 99, background: '#f5f5f5', color: '#666', fontWeight: 500 }}>{a}</span>
                        ))}
                      </div>
                      {roomPhotos.length > 1 && (
                        <button onClick={() => openLightbox(roomPhotos, 0)} style={{ marginTop: 10, fontSize: '0.78rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, padding: 0 }}>
                          View {roomPhotos.length} photos →
                        </button>
                      )}
                      <button
                        onClick={() => setExpandedRoom(isExpanded ? null : room.id)}
                        style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', fontWeight: 700, color: isExpanded ? 'var(--primary)' : 'var(--text)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase', padding: 0, transition: 'color 0.2s' }}
                      >
                        ROOM DETAILS
                        <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: '0.25s', color: 'var(--primary)' }} />
                      </button>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: 140 }}>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginBottom: 2 }}>₹{room.price}</div>
                      <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: 14 }}>per night</div>
                      <a href={room.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '8px 20px', whiteSpace: 'nowrap' }}>
                        Book a Room
                      </a>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.9, 0.4, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px dashed #eee', paddingLeft: 224 }}>
                          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', marginBottom: 14 }}>What's included</p>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
                            {room.amenities.map(a => {
                              const Icon = getAmenityIcon(a)
                              return (
                                <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem', color: '#444', fontWeight: 500 }}>
                                  <Icon size={15} style={{ color: '#888' }} />
                                  {a}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
          {rooms.length > 3 && (
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <button onClick={() => setShowAllRooms(!showAllRooms)} className="btn btn-ghost" style={{ fontSize: '0.88rem' }}>
                {showAllRooms ? 'Show less' : 'SHOW MORE +'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Characteristics ── */}
      <CharacteristicsSection />

      {/* ── Important Information ── */}
      <ImportantInfoSection />

      {/* ── Category Gallery ── */}
      {Object.keys(photosByCategory).length > 0 && (
        <section style={{ padding: '56px 0', background: '#fdf6f0' }}>
          <div className="container">
            <h2 style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 24 }}>
              EXPLORE SPACES
            </h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
              {Object.keys(photosByCategory).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{ padding: '6px 16px', borderRadius: 99, fontSize: '0.82rem', fontWeight: 600, border: '1.5px solid', borderColor: activeCategory === cat ? 'var(--primary)' : '#ddd', background: activeCategory === cat ? 'var(--primary)' : '#fff', color: activeCategory === cat ? '#fff' : 'var(--text)', cursor: 'pointer', transition: '0.2s' }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
              {activePhotos.map((id, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                  onClick={() => openLightbox(activePhotos, i)}
                  style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', background: '#eee' }}
                >
                  <img
                    src={cld(id)} alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Cancellation Policy ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #eee' }}>
        <div className="container" style={{ padding: '0 28px' }}>
          <button
            onClick={() => setCancelOpen(!cancelOpen)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            <span style={{ fontWeight: 700, fontSize: '1rem' }}>
              Cancellation Policy — <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontStyle: 'italic' }}>click to know more</span>
            </span>
            <ChevronDown size={20} style={{ transform: cancelOpen ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'var(--primary)', flexShrink: 0 }} />
          </button>
          <AnimatePresence>
            {cancelOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}
              >
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75, paddingBottom: 24 }}>
                  {meta.cancellationPolicy}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Directions + Map ── */}
      <section style={{ padding: '56px 0', background: '#fdf6f0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--primary)' }}>
              DIRECTIONS
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, margin: '10px 0 28px', lineHeight: 1.2 }}>
              Reach us without the guesswork.
            </h2>
            {Object.entries(meta.directions).map(([label, content]) => (
              <DirectionAccordion key={label} label={label} content={content} />
            ))}
          </div>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: 20 }}>
              <iframe
                src={meta.mapSrc} width="100%" height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`LiveFree ${dest.name}`}
              />
            </div>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: 12, color: 'var(--text)' }}>Nearby</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {meta.highlights.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--primary)' }}>📍</span> {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      {meta.video && (
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div className="container">
            <h2 style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 32 }}>
              EXPERIENCE {dest.name.toUpperCase()}
            </h2>
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '16/9', maxWidth: 860, margin: '0 auto' }}>
              <iframe
                src={`https://www.youtube.com/embed/${meta.video}?rel=0&modestbranding=1&showinfo=0`}
                title={dest.name}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Travel Itinerary ── */}
      {itinerary.length > 0 && (
        <section style={{ padding: '56px 0', background: '#fdf6f0' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
                alt="Travel"
                style={{ width: '100%', borderRadius: 16, boxShadow: 'var(--shadow-md)' }}
              />
            </div>
            <div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--text)' }}>Travel </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--primary)', fontStyle: 'italic' }}>Itinerary</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 28 }}>
                Wake up to fresh mornings, friendly faces, and an energy that is unique to the cities we call home. Here's a sample itinerary to make the most of your stay.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {itinerary.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', boxShadow: 'var(--shadow-sm)', borderLeft: '3px solid var(--primary)' }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 12, color: 'var(--text)' }}>{day.day}</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {day.activities.map((a, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                          {a}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <a href="/contact" className="btn btn-primary">know more</a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightBox
            images={lightboxPhotos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={() => setLightboxIndex(i => (i - 1 + lightboxPhotos.length) % lightboxPhotos.length)}
            onNext={() => setLightboxIndex(i => (i + 1) % lightboxPhotos.length)}
          />
        )}
      </AnimatePresence>
    </>
  )
}