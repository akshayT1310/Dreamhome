import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projectCategories, projects } from '../data/siteData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">PROJECT GALLERY</p>
          <h2>
            Homes That Feel
            <span>Distinctly Their Own.</span>
          </h2>
        </div>
      </div>

      <div className="project-filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="masonry-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="masonry-overlay">
              <div className="masonry-header">
                <span>{project.location}</span>
                <ArrowUpRight size={18} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.area}</p>
              <small>{project.type}</small>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
