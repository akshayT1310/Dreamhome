import { motion } from 'framer-motion';

export default function BrandIntro() {
  return (
    <section className="editorial-section brand-intro">
      <motion.div
        className="editorial-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="section-kicker dark">A Thoughtful Approach</p>
        <h2>
          A Home Shouldn't Just
          <span>Look Beautiful.</span>
          It Should Feel Like Yours.
        </h2>
      </motion.div>

      <motion.p
        className="editorial-copy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        We plan homes around your routine, your priorities and the way you want to live. Every room is shaped with intention: practical, expressive and deeply personal.
      </motion.p>
    </section>
  );
}
