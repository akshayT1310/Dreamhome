import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { housePlans, whatsappLink } from '../data/siteData';

const filters = ['All', '2 BHK', '3 BHK', '4 BHK', 'Villa', 'Duplex', 'Luxury'];

export default function HousePlans() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredPlans = useMemo(() => {
    if (selectedFilter === 'All') return housePlans;
    return housePlans.filter((plan) => plan.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="house-plans" className="house-plans-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">HOUSE PLANS</p>
          <h2>
            Plans That Make
            <span>Every Square Foot Count.</span>
          </h2>
        </div>
      </div>

      <div className="plan-filters" aria-label="House plan filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={selectedFilter === filter ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="plans-grid">
        {filteredPlans.map((plan, index) => (
          <motion.article
            key={plan.name}
            className="plan-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="plan-image-wrap">
              <img src={plan.image} alt={plan.name} />
            </div>
            <div className="plan-meta">
              <span className="plan-category">{plan.category}</span>
              <h3>{plan.name}</h3>
              <p className="plan-area">{plan.area}</p>
              <ul>
                <li>{plan.bedrooms} Bedrooms</li>
                <li>{plan.bathrooms} Bathrooms</li>
                <li>{plan.floors} Floors</li>
              </ul>
              <div className="plan-footer">
                <span>{plan.plot}</span>
                <a href={whatsappLink(`Hello, I am interested in the ${plan.name} house plan.`)} target="_blank" rel="noreferrer">
                  View Plan
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
