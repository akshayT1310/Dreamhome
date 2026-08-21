import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const item = testimonials[activeIndex];

  const next = () => setActiveIndex((current) => (current + 1) % total);
  const prev = () => setActiveIndex((current) => (current - 1 + total) % total);

  return (
    <section className="testimonials-section">
      <div className="testimonial-heading">
        <p className="section-kicker dark">CLIENT STORIES</p>
        <h2>
          Homes That Speak
          <span>For Themselves.</span>
        </h2>
      </div>

      <motion.div
        key={item.name}
        className="testimonial-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="quote-mark">
          <Quote size={42} />
          <span>CH</span>
        </div>

        <div className="testimonial-copy">
          <p>“{item.quote}”</p>
          <div className="testimonial-meta">
            <strong>{item.name}</strong>
            <small>Verified Client</small>
          </div>
        </div>

        <div className="testimonial-controls">
          <span>
            0{activeIndex + 1} / 0{total}
          </span>
          <button type="button" onClick={prev} aria-label="Previous testimonial">
            <ArrowLeft size={16} />
          </button>
          <button type="button" onClick={next} aria-label="Next testimonial">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
