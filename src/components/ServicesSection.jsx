import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Compass, DraftingCompass, House, Layers3, Ruler, Sparkles, Hammer, Home, Wrench } from 'lucide-react';
import { services } from '../data/siteData';

const iconMap = {
  floorPlan: Home,
  architecture: Building2,
  cube: Layers3,
  interior: House,
  compass: Compass,
  construction: Hammer,
};

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">WHAT WE DESIGN</p>
          <h2>
            Complete Home Planning,
            <span>From Idea To Reality.</span>
          </h2>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || DraftingCompass;

          return (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            >
              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-body">
                <div className="service-topline">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">
                    <Icon size={16} />
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-link">
                  Learn More
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
