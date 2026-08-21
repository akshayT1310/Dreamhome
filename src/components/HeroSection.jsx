import { motion } from 'framer-motion';
import { ArrowRight, Compass, Grid3X3, Sparkles } from 'lucide-react';

const floatingBadges = [
  '3D Visualization',
  'Smart Floor Planning',
  'Custom Design',
];

export default function HeroSection({ onNavigate }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="section-kicker">
            <span className="kicker-line" />
            ARCHITECTURE • PLANNING • DESIGN
          </p>

          <h1>
            Your Dream Home,
            <span>Designed Before</span>
            It Is Built.
          </h1>

          <p className="hero-description">
            From intelligent floor plans to immersive 3D visualization, we transform your ideas into spaces that feel personal, functional and timeless.
          </p>

          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => onNavigate('#projects')}>
              Explore Our Work
              <ArrowRight size={16} />
            </button>
            <button type="button" className="secondary-button" onClick={() => onNavigate('#contact')}>
              Plan Your Home
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="villa-scene" aria-label="Luxury modern villa concept illustration">
            <div className="villa-facade">
              <div className="window glass-one" />
              <div className="window glass-two" />
              <div className="window glass-three" />
              <div className="entry-door" />
            </div>
            <div className="villa-wing" />
            <div className="villa-roof" />
            <div className="landscape" />
            <div className="driveway" />
            <div className="tree tree-left" />
            <div className="tree tree-right" />
          </div>

          <div className="floating-badges">
            {floatingBadges.map((label, index) => (
              <motion.div
                className="badge"
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.15 }}
              >
                {label === '3D Visualization' ? <Grid3X3 size={14} /> : label === 'Smart Floor Planning' ? <Compass size={14} /> : <Sparkles size={14} />}
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
