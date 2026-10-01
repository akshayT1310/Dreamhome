import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
  MessageCircle,
} from 'lucide-react';

import {
  company,
  logoImage,
  navItems,
  whatsappLink,
} from '../data/siteData';

const instagramLink =
  'https://www.instagram.com/creative_home_20?stkn=N29jNDg1bnRnb2th';
const facebookLink =
  'https://www.facebook.com/share/1F4ed7qm7L/';


export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">

      {/* =====================================================
          FOOTER INTRO
      ====================================================== */}
      <div className="footer-intro">
        <div>
          <p className="section-kicker light">
            ARCHITECTURE • PLANNING • DESIGN
          </p>

          <h2>
            Thoughtful architecture,
            <span>
              designed around the way you live.
            </span>
          </h2>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="footer-grid">

        {/* BRAND */}
        <div className="footer-brand">
          <img
            className="footer-logo"
            src={logoImage}
            alt="Creative Home Plan & Design logo"
          />


          <p className="footer-designation">
            Civil Engineer • Architect • Interior & Structural Consultant
          </p>

          <p>
            Architecture, planning, structural consultation,
            interior design and 3D visualization for thoughtfully
            designed spaces.
          </p>
        </div>

        {/* EXPLORE */}
        <div className="footer-links">
          <h4>Explore</h4>

          <div className="link-stack">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => onNavigate(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>

          <div className="link-stack muted-links">
            <span>Floor Plans</span>
            <span>Architecture</span>
            <span>3D Design & Visualization</span>
            <span>Interior Design</span>
            <span>Structural Consultation</span>
            <span>Vastu Planning</span>
          </div>
        </div>

        {/* CONNECT */}
        <div className="footer-links">
          <h4>Connect</h4>

          <div className="link-stack social-links">

            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={14} />
              Instagram
            </a>

            <a
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={14} />
              Facebook
            </a>

            

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* =====================================================
          OFFICE LOCATIONS
      ====================================================== */}
      <div className="footer-locations">

        <div className="footer-location-card">
          <span className="location-number">
            01
          </span>

          <div>
            <span className="location-label">
              OFFICE — INDORE
            </span>

            <h4>
              Clifton Corporate
            </h4>

            <p>
              708, Clifton Corporate,
              <br />
              AB Road, Indore,
              <br />
              Madhya Pradesh
            </p>
          </div>
        </div>

        <div className="footer-location-card">
          <span className="location-number">
            02
          </span>

          <div>
            <span className="location-label">
              OFFICE — WAIDHAN
            </span>

            <h4>
              Waidhan Office
            </h4>

            <p>
              Waidhan, Singrauli,
              <br />
              Madhya Pradesh
            </p>
          </div>
        </div>

      </div>

      {/* =====================================================
          CONTACT BAR
      ====================================================== */}
      <div className="footer-contact-bar">

        <div className="contact-row">

          <a href={`mailto:${company.email}`}>
            <Mail size={14} />
            {company.email}
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={14} />
            {company.displayPhone}
          </a>

          <span>
            <MapPin size={14} />
            Indore • Waidhan
          </span>

        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ====================================================== */}
      <div className="footer-bottom">

        <span>
          © 2026 {company.name}.
        </span>

        <span>
          Civil Engineering • Architecture • Interior Design
        </span>

        <span>
          All Rights Reserved.
        </span>

      </div>

    </footer>
  );
}