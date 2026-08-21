import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-image-wrap">
        <img
          src="/assets/home-exterior.jpg"
          alt="Luxury architectural exterior"
        />
      </div>

      <motion.div
        className="about-copy"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="section-kicker dark">ABOUT THE STUDIO</p>
        <h2>
          Designing Homes With
          <span>Purpose, Not Just Style.</span>
        </h2>

        <p>
          We create homes that feel effortless to live in, thoughtful to use and distinctive in character. By combining personalized design, practical planning and modern architectural thinking, we shape spaces that are both beautiful and deeply functional.
        </p>

        <ul className="about-list">
          <li>Personalized design based on your lifestyle and priorities.</li>
          <li>Practical planning that makes each room purposeful and efficient.</li>
          <li>Modern architecture expressed through clarity, light and balance.</li>
          <li>3D visualization to help you experience the home before it exists.</li>
          <li>A client-first process that keeps every decision aligned with the vision.</li>
        </ul>
      </motion.div>
    </section>
  );
}
