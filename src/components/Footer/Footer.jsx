import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import styles from './Footer.module.css'
import logoImg from '../../assets/l1.png'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>

          {/* LEFT: Contact */}
          <div className={styles.block}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:reservation@livefreehostel.com"><Mail size={14} /> reservation@livefreehostel.com</a></li>
              <li><a href="tel:+919970203810"><Phone size={14} /> +91 99702 03810</a></li>
            </ul>
          </div>

          {/* LEFT: Locations */}
          <div className={styles.block}>
            <h4>Locations</h4>
            <ul>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/rishikesh') }}><MapPin size={14} /> Rishikesh</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/dehradun') }}><MapPin size={14} /> Dehradun</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/varanasi') }}><MapPin size={14} /> Varanasi</a></li>
            </ul>
          </div>

          {/* LEFT: Policies */}
          <div className={styles.block}>
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Guest Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/pet-friendly') }}>Pet Policy</a></li>
            </ul>
          </div>

          {/* LEFT: Quick Links */}
          <div className={styles.block}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/about') }}>About Us</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/groups') }}>Experience</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/awards') }}>Awards</a></li>
              <li><a href="#workation">Workations</a></li>
              <li><a href="#testimonials">Guest Stories</a></li>
            </ul>
          </div>

          {/* RIGHT: Brand — logo + tagline + social */}
          <div className={styles.brand}>
            <img src={logoImg} alt="LiveFree Hostel" className={styles.logoImg} />
            <p className={styles.brandTagline}>
              Your Home Away From Home — where every stay is a story and every traveler is family. ✨
            </p>
            <div className={styles.socialRow}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.tagline}>
            Your <span>Home Away From Home</span>, anywhere in the world ✨
          </p>
          <p className={styles.copy}>© {new Date().getFullYear()} LiveFree Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
