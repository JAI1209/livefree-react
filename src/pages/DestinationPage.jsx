import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, X, ChevronLeft, ChevronRight, ChevronDown, Check,
  Globe, ParkingCircle, ConciergeBell, UtensilsCrossed, BedDouble, Bath,
  Wifi, Wind, PawPrint, KeyRound, ImageOff, ExternalLink,
  Calendar, Users,
} from 'lucide-react'
import { DESTINATIONS, CITY_ROOMS, CITY_ITINERARY, CITY_PROPERTY_POLICY, CITY_MUST_READS } from '../data/siteData'

const CLD = 'https://res.cloudinary.com/dtksfqdju/image/upload'
const cld = (id) => `${CLD}/${id}`

const NAVBAR_H = 100

// ============================================================
// CITY META DATA
// ============================================================
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
      'By Air': 'Jolly Grant Airport (DED), then taxi to LiveFree Rishikesh (~35 mins).',
      'By Train': 'Haridwar Railway Station, then bus or taxi to Rishikesh (~30 mins).',
      'By Road': 'From Delhi: NH334 via Haridwar. GPS: LiveFree Hostel Rishikesh.',
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
      'By Air': 'Jolly Grant Airport (DED), then taxi to LiveFree Dehradun (~45 mins).',
      'By Train': 'Dehradun Railway Station, then auto/cab to LiveFree (~10–15 mins).',
      'By Road': 'From Delhi: NH58 via Haridwar. GPS: LiveFree Hostel Dehradun.',
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
      'By Air': 'Lal Bahadur Shastri Airport (VNS), then taxi to LiveFree Varanasi (~30 mins).',
      'By Train': 'Varanasi Junction, then auto/cab to the hostel (~20 mins).',
      'By Road': 'From Lucknow: NH30. From Allahabad: NH19. GPS: LiveFree Hostel Varanasi.',
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
  'VNS': ['IMG_1971_x82ytm', 'IMG_1515_bndceg', 'IMG20221214071238_bbm6h2', 'IMG20221214071531_d5jqdr', 'IMG_1571_i8wwdc', 'IMG_1496_trwqvi', 'IMG_1487_gmbhz2', 'IMG_1585_bpsrqp', 'DP5_7980_1_aqijle', 'DP5_5879_puim7i'],
  '10-bed Dorm': ['bathroom_2_lkci6f', '2_vbrtl2', '1_qyrxzf', 'bathroom_3_ls12af', 'main_sehe7c', 'bathroom_1_sihzhb'],
  '6-bed Dorm': ['main_d279el', '2_z7hkg2', 'GOPR4927_fuimtw', '1_muwyuu', 'bathroom_t4paqi'],
  '6-bed Female Dorm': ['3_uqieao', 'bathroom_uohqot', 'main_b6t8xi', '1_etla21', '2_hisbqs'],
  '8-bed Dorm': ['IMG_7251_kggfn6', 'bathroom_2_alk4e3', 'IMG_7250_zjglss', 'main_wmda7j', 'bathroom_1_wujawj'],
},
  dehradun: {
    '4 Bed Dorm': ['image_9ec3b750_n1jctt', 'IMG_20251128_142909_00_033_jsebve', 'IMG_20251128_143221_00_039_jnvwul', 'IMG_20251128_143107_00_037_x7ko4y', 'IMG_4323_ekaxct', 'IMG_20251128_143333_00_041_vplnup', 'IMG_20251128_143029_00_036_ctjeqi', 'IMG_20251128_143257_00_040_wmdw11', 'IMG_20251128_143008_00_035_tknjtu', 'IMG_20251128_143411_00_043_ye0nsu'],
    '6 Bed Dorm': ['LFD9_30_lwqbbg', 'IMG_4180_lk6w4w', 'IMG_4182_gtyk5u', 'IMG_4178_iigosg', 'IMG_4181_ojoohj', 'LFD3_mnqkrj', 'IMG_20251128_134399_00_016_cmkmcj', 'IMG_20251128_134144_00_012_n3ztng', 'IMG_20251128_133645_00_006_qpugy9', 'DSC04358_s9f9rw', 'IMG_20251128_133538_00_005_igshdu', 'DSC04422_lxfwap', 'DSC04349_ziokrp'],
    '8 Bed Dorm': ['IMG_20251207_125040_00_267_zwlvck', 'IMG_20251207_124703_00_259_2_byt4eb', 'LFD2_aiy5a5', 'IMG_4226_brdugj', 'image_70661780_cut4gl', 'IMG_4221_cku0us', 'image_2db66309_umdbwo', 'image_36fffebc_d5qhqn', 'IMG_4227_t3gsnf', 'image_728a3724_h5io8e', 'IMG_4217_osuno1'],
    'Building': ['IMG_20251128_173843_00_091_bip88g', 'IMG_20251128_163832_00_084_qff8uu', 'IMG_20251128_135052_00_017_ad0ofm', 'IMG_20251128_160857_00_059_y4alb7', 'IMG_20251128_162552_00_067_hmvk4q', 'LFD9_1_daulbb', 'LFD9_2_lmsjty', 'IMG_20251128_165250_00_090_wfwt0h', 'IMG_20251128_161422_00_066_cwobcl', 'IMG_20251128_165000_00_086_in4qbt', 'IMG_20251128_165135_00_088_b37eyd', 'LFD9_6_ufhpy2', 'IMG_4837_b7eyf3', 'IMG_20251128_135402_00_019_m9pfae', 'IMG_20251128_135300_00_018_vutavu', 'IMG_4835_d6ohqf', 'IMG_20251128_165159_00_089_gyyagm', 'IMG_4853_p4akxi', 'IMG_4823_hg1a6z'],
    'Cafe': ['LFD12_pkazl4', 'LFD10_jtfjui', 'LFD9_3_hn6fbk', 'LFD9_5_zi4cfh', 'LFD9_23_yvbp0d', 'LFD9_18_hnaek0', 'LFD9_22_a5goe2', 'image_e46c895e_mybtbg', 'image_47616695_c4d3nv', 'image_758a0f94_ujqmvx', 'image_77a0fe46_vmuhl6', 'image_63c1e230_blpkbo'],
    'Deluxe Private': ['IMG_20251128_160103_00_051_stsrhw', 'IMG_20251128_155735_00_046_mbtptk', 'IMG_20251128_160315_00_055_cc6htr', 'IMG_20251128_161002_00_060_d8xkzc', 'IMG_20251128_161124_00_063_in48kx', 'IMG_20251128_161103_00_062_uui23q', 'IMG_20251128_155853_00_048_ds8hzd', 'IMG_20251128_160223_00_053_dobty7', 'IMG_20251128_155805_00_047_nczgoq', 'IMG_20251128_161155_00_064_vyyaze', 'IMG_20251128_160640_00_057_azmbme', 'IMG_20251128_163651_00_082_aadr8z'],
    'Family Private': ['IMG_4355_lntw4e', 'IMG_4365_vyfli1', 'IMG_4364_pcjwqc', 'IMG_4357_injjsn', 'IMG_4354_iemuwf', 'IMG_4353_xkhn7f', 'IMG_4356_mw2gqf', 'IMG_4358_sfvn2r', 'image_37806f19_knyaub', 'image_3275f2f0_aaziwx', 'image_4b71cf46_zycpnz', 'image_77a3eb90_xkie2f', 'IMG_20251128_162901_00_071_turlp3', 'IMG_20251128_163138_00_075_doetsa', 'IMG_20251128_162805_00_069_utdjkw', 'IMG_20251128_162833_00_070_vdd5vy', 'IMG_20251128_162738_00_068_f9aefo', 'IMG_20251128_163333_00_077_fnoheq', 'IMG_20251128_163034_00_073_ubrrzd', 'IMG_20251128_163547_00_081_bzbcyc'],
    'Female Dorm': ['LFD6_cut51z', 'IMG_20251128_141714_00_027_fbblwk', 'LFD9_20_payhsn', 'IMG_20251128_141758_00_028_ciszf8', 'IMG_20251128_141649_00_026_xrnsfr', 'DSC04520_rbszjj', 'DSC04527_xh6qww', 'DSC04518_j4gdxv', 'DSC04522_wndxfo', 'IMG_20251128_141447_00_021_ltsepp', 'IMG_20251128_141520_00_022_m7alqr', 'IMG_20251128_141600_00_024_dvj25s', 'IMG_20251128_141541_00_023_poaexj', 'IMG_20251128_141628_00_025_sutngr', 'IMG_4271_nt2qt7', 'IMG_4273_u77elm', 'IMG_4275_nelcxv', 'IMG_20251128_141815_00_029_cbfkog'],
  },
  rishikesh: {},
}

// ============================================================
// BOOKING BAR HEIGHT — used for gallery offset
// ============================================================
const BOOKING_BAR_H = 72

// ============================================================
// BOOKING BAR — sticky below navbar, shown on all pages
// ============================================================
function BookingBar({ city }) {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  const fmt = (d) =>
    d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  const [checkIn, setCheckIn] = useState(today.toISOString().split('T')[0])
  const [checkOut, setCheckOut] = useState(tomorrow.toISOString().split('T')[0])
  const [guests, setGuests] = useState(2)

  // Build hostelworld/booking link — replace with your actual booking URL logic
  const handleCheckRates = () => {
    const roomSection = document.getElementById('select-room')
    if (roomSection) {
      roomSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const displayCheckin = checkIn
    ? new Date(checkIn + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
    : '—'
  const displayCheckout = checkOut
    ? new Date(checkOut + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
    : '—'

  return (
    <div
      style={{
        position: 'sticky',
        top: NAVBAR_H,
        zIndex: 900,
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        height: BOOKING_BAR_H,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          height: '100%',
        }}
      >
        {/* Check-in */}
        <label
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 24px',
            height: '100%',
            borderRight: '1px solid #e8e8e8',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <Calendar size={18} style={{ color: '#aaa', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#bbb', marginBottom: 3 }}>
              Check-in date:
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.97rem', color: 'var(--text, #1a1a1a)' }}>
              {displayCheckin}
            </div>
          </div>
          <input
            type="date"
            value={checkIn}
            min={today.toISOString().split('T')[0]}
            onChange={e => setCheckIn(e.target.value)}
            style={{
              position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%',
            }}
          />
        </label>

        {/* Check-out */}
        <label
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 24px',
            height: '100%',
            borderRight: '1px solid #e8e8e8',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <Calendar size={18} style={{ color: '#aaa', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#bbb', marginBottom: 3 }}>
              Check-out date:
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.97rem', color: 'var(--text, #1a1a1a)' }}>
              {displayCheckout}
            </div>
          </div>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today.toISOString().split('T')[0]}
            onChange={e => setCheckOut(e.target.value)}
            style={{
              position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%',
            }}
          />
        </label>

        {/* Guests */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 24px',
            height: '100%',
            borderRight: '1px solid #e8e8e8',
          }}
        >
          <Users size={18} style={{ color: '#aaa', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#bbb', marginBottom: 3 }}>
              Guests
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button
                onClick={() => setGuests(g => Math.max(1, g - 1))}
                style={{
                  width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #ddd',
                  background: 'none', cursor: 'pointer', fontSize: '1rem', lineHeight: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#555', fontWeight: 700,
                }}
              >−</button>
              <span style={{ fontWeight: 700, fontSize: '0.97rem', color: 'var(--text, #1a1a1a)', minWidth: 20, textAlign: 'center' }}>
                {guests} {guests === 1 ? 'Guest' : 'Guests'}
              </span>
              <button
                onClick={() => setGuests(g => g + 1)}
                style={{
                  width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #ddd',
                  background: 'none', cursor: 'pointer', fontSize: '1rem', lineHeight: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#555', fontWeight: 700,
                }}
              >+</button>
            </div>
          </div>
        </div>

        {/* CHECK RATES button */}
        <div style={{ padding: '0 24px', flexShrink: 0 }}>
          <button
            onClick={handleCheckRates}
            style={{
              background: 'none',
              border: '2px solid var(--primary, #E85D3A)',
              color: 'var(--primary, #E85D3A)',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              padding: '12px 28px',
              borderRadius: 8,
              cursor: 'pointer',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--primary, #E85D3A)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'none'
              e.currentTarget.style.color = 'var(--primary, #E85D3A)'
            }}
          >
            CHECK RATES
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// SUB-COMPONENTS
// ============================================================

// ── Lightbox ──
function LightBox({ images, index, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.94)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClose}
    >
      <button onClick={e => { e.stopPropagation(); onPrev() }} style={{ position: 'absolute', left: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronLeft size={24} />
      </button>
      <img src={cld(images[index])} alt="" onClick={e => e.stopPropagation()} style={{ maxHeight: '88vh', maxWidth: '88vw', objectFit: 'contain', borderRadius: 10 }} />
      <button onClick={e => { e.stopPropagation(); onNext() }} style={{ position: 'absolute', right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 48, height: 48, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronRight size={24} />
      </button>
      <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <X size={18} />
      </button>
      <div style={{ position: 'absolute', bottom: 20, color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{index + 1} / {images.length}</div>
    </motion.div>
  )
}

// ── 1. Gallery ──
// FIX: paddingTop added so gallery starts BELOW the sticky booking bar (not under navbar)
function GallerySection({ allPhotos, onOpenLightbox }) {
  const hasPhotos = allPhotos.length > 0
  return (
    <div style={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      marginLeft: '-50vw',
      background: 'transparent',
      paddingTop: NAVBAR_H,
      
      // KEY FIX: no extra top padding needed here since BookingBar is now
      // between navbar and gallery in the DOM. The gallery starts right after it.
    }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 28px' }}>
        {hasPhotos ? (
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.65fr 1fr', gap: 6, height: 460 }}>
              {/* Large main photo */}
              <div
                style={{ overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => onOpenLightbox(allPhotos, 0)}
              >
                <img
                  src={cld(allPhotos[0])}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              {/* 4 small photos grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 6 }}>
                {allPhotos.slice(1, 5).map((id, i) => (
                  <div key={id} style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => onOpenLightbox(allPhotos, i + 1)}>
                    <img
                      src={cld(id)}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', display: 'block' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                ))}
              </div>
            </div>
            {allPhotos.length > 5 && (
              <button
                onClick={() => onOpenLightbox(allPhotos, 0)}
                style={{
                  position: 'absolute', bottom: 14, right: 0,
                  fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em',
                  background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(232,93,58,0.35)', borderRadius: '8px 0 0 8px',
                  padding: '10px 20px', cursor: 'pointer', color: 'var(--text)',
                  display: 'flex', alignItems: 'center', gap: 7, zIndex: 10,
                  boxShadow: '-4px 4px 16px rgba(0,0,0,0.15)',
                }}
              >
                <span>📸</span> SEE ALL PHOTOS
              </button>
            )}
          </div>
        ) : (
          <div style={{
            height: 460, background: 'linear-gradient(135deg, #fdf0ea 0%, #fce4d6 100%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16,
          }}>
            <ImageOff size={32} style={{ color: 'var(--primary)' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Photos Coming Soon</p>
              <p style={{ color: '#a07060', fontSize: '0.92rem' }}>Images for this property will be available shortly.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── 2. Hostel Name + Address + About ──
function HeroInfoSection({ dest, meta }) {
  return (
    <section style={{ padding: '44px 0 36px', background: '#fff' }}>
      <div className="container">
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, color: 'var(--text)',
          marginBottom: 10, lineHeight: 1.15,
        }}>
          Live Free Hostel, {dest.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28, color: '#888', fontSize: '0.92rem' }}>
          <MapPin size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>{meta.address}</span>
        </div>
        <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.9, maxWidth: 820 }}>
          {meta.about}
        </p>
      </div>
    </section>
  )
}

// ── 3. Good to Know ──
function GoodToKnowSection({ meta }) {
  return (
    <section style={{ padding: '0 0 44px', background: '#fff' }}>
      <div className="container">
        <div style={{
          border: '1.5px solid #e8e8e8', borderRadius: 16,
          padding: '36px 48px',
          background: 'linear-gradient(135deg, #fffaf7 0%, #fff9f6 100%)',
          position: 'relative', overflow: 'hidden',
          maxWidth: 680, margin: '0 auto',
        }}>
          <span style={{ position: 'absolute', top: 20, right: 28, fontSize: '2rem', opacity: 0.1 }}>★</span>
          <span style={{ position: 'absolute', bottom: 16, left: 24, fontSize: '1.4rem', opacity: 0.08 }}>★</span>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', textAlign: 'center', letterSpacing: 1, marginBottom: 28, color: 'var(--text)' }}>
            Good to Know
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: 0, alignItems: 'center' }}>
            <div style={{ padding: '0 24px 0 0' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-in</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkIn}</span>
            </div>
            <div style={{ width: 1, height: 48, background: '#eee', margin: '0 auto' }} />
            <div style={{ padding: '0 0 0 24px', textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-out</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkOut}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 4. Select Room ──
// id="select-room" added so booking bar's CHECK RATES scrolls here
function SelectRoomSection({ rooms, photosByCategory, onOpenLightbox }) {
  const [showAllRooms, setShowAllRooms] = useState(false)
  const [expandedRoom, setExpandedRoom] = useState(null)
  const displayedRooms = showAllRooms ? rooms : rooms.slice(0, 3)

  return (
    <section id="select-room" style={{ padding: '48px 0', background: '#fafafa', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: 28, color: '#aaa' }}>
          SELECT ROOM
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
              <div key={room.id} style={{ borderBottom: '1px solid #eee', padding: '24px 0', background: '#fff' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr auto', gap: 28, alignItems: 'start' }}>
                  <div
                    style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3', background: '#eee', cursor: heroPhoto ? 'pointer' : 'default', flexShrink: 0 }}
                    onClick={() => heroPhoto && onOpenLightbox(roomPhotos, 0)}
                  >
                    {heroPhoto
                      ? <img src={cld(heroPhoto)} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      : <div style={{ width: '100%', height: '100%', background: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ImageOff size={22} color="#bbb" /></div>
                    }
                  </div>
                  <div style={{ paddingTop: 2 }}>
                    <span style={{
                      fontSize: '0.66rem', fontWeight: 700,
                      background: room.type === 'Private' ? '#e8f5e9' : '#e3f2fd',
                      color: room.type === 'Private' ? '#2e7d32' : '#1565c0',
                      padding: '3px 11px', borderRadius: 99, textTransform: 'uppercase',
                      letterSpacing: '0.08em', display: 'inline-block', marginBottom: 10,
                    }}>
                      {room.type}
                    </span>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, color: 'var(--text)', lineHeight: 1.3 }}>{room.name}</h3>
                    <p style={{ color: '#999', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: 12, maxWidth: 400 }}>{room.desc}</p>
                    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 12 }}>
                      {room.amenities.map(a => (
                        <span key={a} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: 99, background: '#f5f5f5', color: '#666', fontWeight: 500 }}>{a}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => setExpandedRoom(isExpanded ? null : room.id)}
                      style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: isExpanded ? 'var(--primary)' : '#aaa', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s', letterSpacing: '0.04em' }}
                    >
                      Room Details <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: '0.25s', color: 'var(--primary)' }} />
                    </button>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: 150, flexShrink: 0, paddingTop: 4 }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: 2, letterSpacing: '-0.5px' }}>₹{room.price}</div>
                    <div style={{ fontSize: '0.73rem', color: '#bbb', marginBottom: 16, fontWeight: 500 }}>per night</div>
                    <a
                      href={room.bookingUrl} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-block', background: '#1a1a1a', color: '#fff',
                        fontWeight: 700, fontSize: '0.8rem', padding: '12px 24px',
                        borderRadius: 8, textDecoration: 'none', letterSpacing: '0.08em',
                        textTransform: 'uppercase', whiteSpace: 'nowrap',
                        transition: 'background 0.2s, transform 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.2, 0.9, 0.4, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px dashed #eee', paddingLeft: 208 }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', marginBottom: 14 }}>What's included</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px 16px' }}>
                          {room.amenities.map(a => (
                            <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.85rem', color: '#444', fontWeight: 500 }}>
                              <Check size={13} style={{ color: 'var(--primary)', flexShrink: 0 }} /> {a}
                            </div>
                          ))}
                        </div>
                        {roomPhotos.length > 1 && (
                          <button onClick={() => onOpenLightbox(roomPhotos, 0)} style={{ marginTop: 14, fontSize: '0.8rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, padding: 0 }}>
                            View all {roomPhotos.length} photos →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
        {rooms.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={() => setShowAllRooms(!showAllRooms)} className="btn btn-ghost" style={{ fontSize: '0.85rem', letterSpacing: '0.06em' }}>
              {showAllRooms ? 'SHOW LESS ↑' : 'SHOW MORE +'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ── 5. Features / Conveniences ──
function FeaturesSection({ meta }) {
  return (
    <section style={{ padding: '36px 0', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.78rem', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: 18, color: '#bbb' }}>
          FEATURES / CONVENIENCES
        </h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {meta.features.map(f => {
            const Icon = f.icon
            return (
              <div key={f.label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.87rem', color: 'var(--text)', fontWeight: 500,
                border: '1px solid #e8e8e8', borderRadius: 8, padding: '9px 16px', background: '#fff',
              }}>
                <Icon size={15} style={{ color: '#888', flexShrink: 0 }} />
                {f.label}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── 6. Characteristics ──
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
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ccc', flexShrink: 0, marginTop: 7 }} />
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

// ── 7. Reach Us + Map + How to Reach ──
function ReachUsSection({ meta, dest }) {
  const [openDir, setOpenDir] = useState(null)

  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '1.4rem', textAlign: 'center', marginBottom: 48, color: 'var(--text)', letterSpacing: 0.5 }}>
          Reach Us Without the Guesswork
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 16 }}>
              <MapPin size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text)' }}>Nearby Attractions on map</span>
            </div>
            <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', marginBottom: 20 }}>
              <iframe
                src={meta.mapSrc} width="100%" height="340"
                style={{ border: 0, display: 'block' }} allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={`LiveFree ${dest.name}`}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {meta.highlights.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.87rem', color: '#666' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '0.9rem', flexShrink: 0 }}>📍</span> {h}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 800, fontSize: '0.78rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#bbb', marginBottom: 20 }}>
              HOW TO REACH
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {Object.entries(meta.directions).map(([label, content]) => (
                <div key={label} style={{ borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenDir(openDir === label ? null : label)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '18px 4px', background: 'none', border: 'none', cursor: 'pointer',
                      fontWeight: 600, fontSize: '0.95rem',
                      color: openDir === label ? 'var(--primary)' : 'var(--text)', textAlign: 'left',
                      transition: 'color 0.2s',
                    }}
                  >
                    {label}
                    <ChevronDown size={16} style={{ transform: openDir === label ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'var(--primary)', flexShrink: 0 }} />
                  </button>
                  <AnimatePresence>
                    {openDir === label && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: 'hidden' }}>
                        <p style={{ padding: '0 4px 18px', fontSize: '0.88rem', color: '#777', lineHeight: 1.75 }}>{content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 8. Travel Itinerary ──
function ItinerarySection({ itinerary, dest, meta }) {
  return (
    <section style={{ padding: '64px 0', background: '#fdf6f0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80"
              alt="Travel"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginTop: 20, padding: '20px 24px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.8, margin: 0 }}>
              {meta.about.substring(0, 200)}...
            </p>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--text)' }}>Travel </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--primary)', fontStyle: 'italic' }}>Itinerary</span>
          </div>
          <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: 28 }}>
            Wake up to fresh mornings, friendly faces, and an energy that is unique to the cities we call home.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {itinerary.map((day, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
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
          <div style={{ marginTop: 28 }}>
            <a href="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>Know More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Accordion helper ──
function AccordionSection({ title, children, defaultBg = '#fff' }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ background: defaultBg, borderTop: '1px solid #eee' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
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

// ── 9. Cancellation Policy ──
function CancellationSection({ meta }) {
  return (
    <AccordionSection title="Cancellation Policy">
      <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.8 }}>{meta.cancellationPolicy}</p>
    </AccordionSection>
  )
}

// ── 10. Property Policy ──
function PropertyPolicySection({ city }) {
  const policies = CITY_PROPERTY_POLICY?.[city] || []
  if (!policies.length) return null
  return (
    <AccordionSection title="Property Policy">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {policies.map((p, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: 8 }} />
            {p}
          </li>
        ))}
      </ul>
    </AccordionSection>
  )
}

// ── 11. Must Reads ──
function MustReadsSection({ city }) {
  const reads = CITY_MUST_READS?.[city] || []
  if (!reads.length) return null
  return (
    <section style={{ padding: '56px 0 64px', background: '#fafafa', borderTop: '1px solid #eee' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: 32, color: 'var(--text)' }}>
          MUST READS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {reads.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.09 }} viewport={{ once: true }}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', borderRadius: 14, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #eee', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.11)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)' }}
            >
              <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{ position: 'absolute', top: 14, left: 14, background: 'var(--primary)', color: '#fff', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 11px', borderRadius: 99 }}>
                  {item.tag}
                </span>
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

// ============================================================
// MAIN PAGE
// ============================================================
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
      {/*
        ══════════════════════════════════════════════
        BOOKING BAR — sticky, sits just below the navbar
        Visible on every destination page automatically
        ══════════════════════════════════════════════
      */}
      <BookingBar city={city} />

      {/* 1. Gallery — starts right after booking bar, no overlap with navbar */}
      <GallerySection allPhotos={allPhotos} onOpenLightbox={openLightbox} />

      {/* 2. Hostel Name + Address + About */}
      <HeroInfoSection dest={dest} meta={meta} />

      {/* 3. Good to Know */}
      <GoodToKnowSection meta={meta} />

      {/* 4. Select Room */}
      <SelectRoomSection rooms={rooms} photosByCategory={photosByCategory} onOpenLightbox={openLightbox} />

      {/* 5. Features / Conveniences */}
      <FeaturesSection meta={meta} />

      {/* 6. Characteristics */}
      <CharacteristicsSection meta={meta} />

      {/* 7. Reach Us + Map + How to Reach */}
      <ReachUsSection meta={meta} dest={dest} />

      {/* 8. Travel Itinerary */}
      {itinerary.length > 0 && (
        <ItinerarySection itinerary={itinerary} dest={dest} meta={meta} />
      )}

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