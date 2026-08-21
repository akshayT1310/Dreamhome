import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/siteData';

function AnimatedStat({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = stat.value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      setValue((current) => {
        if (current >= stat.value) {
          clearInterval(timer);
          return stat.value;
        }
        return Math.min(current + increment, stat.value);
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="stat-item">
      <strong>
        {Math.round(value)}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
