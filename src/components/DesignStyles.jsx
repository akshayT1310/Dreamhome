import { motion } from 'framer-motion';
import { useState } from 'react';
import { designStyles } from '../data/siteData';

export default function DesignStyles() {
  const [selectedStyle, setSelectedStyle] = useState(designStyles[0]);

  return (
    <section className="design-styles-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">DESIGN STYLE</p>
          <h2>
            Discover A Home
            <span>That Matches Your Vision.</span>
          </h2>
        </div>
      </div>

      <div className="style-selector">
        <div className="style-tabs" role="tablist" aria-label="Design styles">
          {designStyles.map((style) => (
            <button
              key={style.title}
              type="button"
              className={selectedStyle.title === style.title ? 'style-tab active' : 'style-tab'}
              onClick={() => setSelectedStyle(style)}
            >
              {style.title}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedStyle.title}
          className="style-feature"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="style-image">
            <img src={selectedStyle.image} alt={selectedStyle.title} />
          </div>
          <div className="style-copy">
            <span className="style-label">Featured style</span>
            <h3>{selectedStyle.title}</h3>
            <p>{selectedStyle.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
