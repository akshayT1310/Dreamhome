import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, MessageCircle } from 'lucide-react';
import { company, logoImage, navItems, whatsappLink } from '../data/siteData';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <div>
          <p className="section-kicker light">CREATIVE HOME PLAN & DESIGN</p>
          <h2>
            Architecture, planning and 3D design
            <span>for homes created around the way you live.</span>
          </h2>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={logoImage} alt="Creative Home Plan & Design logo" />
          <h3>{company.name}</h3>
          <p>Architecture, planning and 3D design for homes created around the way you live.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <div className="link-stack">
            {navItems.map((item) => (
              <button key={item.href} type="button" onClick={() => onNavigate(item.href)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <div className="link-stack muted-links">
            <span>Floor Plans</span>
            <span>Architecture</span>
            <span>3D Design</span>
            <span>Interior Design</span>
            <span>Vastu Planning</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <div className="link-stack muted-links">
            <span><Instagram size={12} /> Instagram</span>
            <span><Facebook size={12} /> Facebook</span>
            <span><Youtube size={12} /> YouTube</span>
            <span><MessageCircle size={12} /> WhatsApp</span>
          </div>
        </div>
      </div>

      <div className="footer-contact-bar">
        <div className="contact-row">
          <a href={`mailto:${company.email}`}><Mail size={14} /> {company.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer"><Phone size={14} /> {company.displayPhone}</a>
          <span><MapPin size={14} /> {company.location}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Creative Home Plan & Design.</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
}
