import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { whatsappLink } from '../data/siteData';

const tabs = ['Exterior', 'Living Room', 'Kitchen', 'Bedroom', 'Night View'];

const scenes = {
  Exterior: {
    title: 'Glass-fronted luxury residence',
    subtitle: 'Warm stone texture • layered lighting • sculpted landscaping',
    image:
      '/assets/home-exterior.jpg',
  },
  'Living Room': {
    title: 'Open concept family living',
    subtitle: 'Soft textures • natural light • premium material palette',
    image:
      '/assets/living-room.jpg',
  },
  Kitchen: {
    title: 'Crisp modern kitchen',
    subtitle: 'Functional island • warm stone • refined hardware details',
    image:
      '/assets/modern-kitchen.jpg',
  },
  Bedroom: {
    title: 'Primary suite retreat',
    subtitle: 'Quiet luxury • layered comfort • tailored proportions',
    image:
      '/assets/bedroom.jpg',
  },
  'Night View': {
    title: 'Evening ambience',
    subtitle: 'Cinematic lighting • depth • premium façade glow',
    image:
      '/assets/modern-villa.jpg',
  },
};

export default function ThreeDDesign() {
  const [selectedTab, setSelectedTab] = useState('Exterior');
  const activeScene = scenes[selectedTab];

  return (
    <section id="3d-design" className="three-d-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">3D DESIGN STUDIO</p>
          <h2>
            See Your Home
            <span>Before It Exists.</span>
          </h2>
        </div>
      </div>

      <div className="three-d-layout">
        <div className="visual-panel">
          <div className="tab-row">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={selectedTab === tab ? 'tab active' : 'tab'}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedTab}
            className="scene-viewport"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <img src={activeScene.image} alt={activeScene.title} />
            <div className="scene-overlay">
              <span>{activeScene.title}</span>
              <small>{activeScene.subtitle}</small>
            </div>
          </motion.div>
        </div>

        <div className="three-d-copy">
          <p>
            Visualize materials, lighting, proportions and spaces before construction begins.
          </p>
          <a href={whatsappLink('Hello, I would like to create a 3D design for my home.')} target="_blank" rel="noreferrer" className="primary-button wide">
            Create My 3D Home
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
