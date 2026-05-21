import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandName}>LiveFree</div>
            <p className={styles.brandTagline}>
              Your home away from home — where every stay is a story and every traveler is family. ✨
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

          {/* Contact */}
          <div className={styles.block}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:reservation@livefreehostel.com"><Mail size={14} /> reservation@livefreehostel.com</a></li>
              <li><a href="tel:+919970203810"><Phone size={14} /> +91 99702 03810</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className={styles.block}>
            <h4>Locations</h4>
            <ul>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/rishikesh') }}><MapPin size={14} /> Rishikesh</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/dehradun') }}><MapPin size={14} /> Dehradun</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/varanasi') }}><MapPin size={14} /> Varanasi</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className={styles.block}>
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Guest Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); navigate('/pet-friendly') }}>Pet Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.tagline}>
            your <span>home away from home</span>, anywhere in the world ✨
          </p>
          <p className={styles.copy}>© {new Date().getFullYear()} LiveFree Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
