import { motion } from 'framer-motion';
import { processSteps } from '../data/siteData';

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">OUR PROCESS</p>
          <h2>
            A Clear Path
            <span>From Vision To Completion.</span>
          </h2>
        </div>
      </div>

      <div className="process-timeline">
        {processSteps.map((step, index) => (
          <motion.div
            key={step}
            className="process-step"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <span className="process-number">0{index + 1}</span>
            <div className="process-line" aria-hidden="true" />
            <h3>{step}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
