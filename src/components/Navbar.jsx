import { Menu, X, ArrowUpRight } from 'lucide-react';
import { logoImage, navItems } from '../data/siteData';

export default function Navbar({ menuOpen, setMenuOpen, onNavigate }) {
  const handleNavClick = (href) => {
    onNavigate(href);
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button type="button" className="brand" onClick={() => handleNavClick('#home')} aria-label="Creative Home Plan & Design home">
          <img className="brand-logo" src={logoImage} alt="Creative Home Plan & Design logo" />
          <span className="brand-copy">
            <b>Creative Home Plan & Design</b>
          </span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.href} type="button" className="nav-link" onClick={() => handleNavClick(item.href)}>
              {item.label}
            </button>
          ))}

          <button
            type="button"
            className="nav-cta"
            onClick={() => handleNavClick('#contact')}
          >
            Start Your Project
            <ArrowUpRight size={16} />
          </button>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
