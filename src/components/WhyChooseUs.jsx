import { motion } from 'framer-motion';
import { reasons } from '../data/siteData';

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">WHY CHOOSE US</p>
          <h2>
            Designed With Intention.
            <span>Built Around You.</span>
          </h2>
        </div>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            className="reason-item"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <span className="reason-index">0{index + 1}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
