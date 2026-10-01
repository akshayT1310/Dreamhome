import { motion } from 'framer-motion';

import {
  ArrowUpRight,
  Building2,
  Ruler,
  Sofa,
  HardHat,
  Calculator,
  BadgeIndianRupee,
  Trees,
  Compass,
  Box,
  Image as ImageIcon,
  FileText,
  Layers3,
} from 'lucide-react';

const services = [
  {
    no: '01',
    title: 'Architectural Design',
    description: 'Planning & concept development',
    icon: Building2,
  },
  {
    no: '02',
    title: 'Civil & Structural',
    description: 'Engineering & technical solutions',
    icon: Ruler,
  },
  {
    no: '03',
    title: 'Interior Design',
    description: 'Space planning & detailing',
    icon: Sofa,
  },
  {
    no: '04',
    title: 'Construction',
    description: 'Project development & execution',
    icon: HardHat,
  },
  {
    no: '05',
    title: 'Estimation & BOQ',
    description: 'Costing & quantity planning',
    icon: Calculator,
  },
  {
    no: '06',
    title: 'Property Valuation',
    description: 'Technical assessment',
    icon: BadgeIndianRupee,
  },
  {
    no: '07',
    title: 'Landscape Design',
    description: 'Outdoor planning & development',
    icon: Trees,
  },
  {
    no: '08',
    title: 'Vastu Planning',
    description: 'Planning & consultation',
    icon: Compass,
  },
  {
    no: '09',
    title: '3D Modelling',
    description: 'Architectural visualization',
    icon: Box,
  },
  {
    no: '10',
    title: '3D Rendering',
    description: 'High-quality presentation',
    icon: ImageIcon,
  },
  {
    no: '11',
    title: 'Working Drawings',
    description: 'Construction documentation',
    icon: FileText,
  },
  {
    no: '12',
    title: 'Material Selection',
    description: 'Specifications & guidance',
    icon: Layers3,
  },
];

const projectTypes = [
  'Residential',
  'Commercial',
  'Renovation',
  'New Construction',
  'Development',
];

export default function BrandIntro() {
  return (
    <section className="compact-solutions" id="services">
      <div className="compact-solutions__container">

        {/* HEADER */}
        <motion.div
          className="compact-solutions__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: 'easeOut',
          }}
        >
          <div className="compact-solutions__label">
            <span className="compact-solutions__label-line" />
            OUR EXPERTISE
          </div>

          <div className="compact-solutions__heading">
            <h2>
              From Concept
              <br />
              <em>to Completion.</em>
            </h2>

            <div className="compact-solutions__intro">
              <p className="compact-solutions__intro-title">
                Complete Design & Construction
                Solutions Under One Roof.
              </p>

              <p>
                Architecture, engineering, interiors and
                construction expertise brought together
                through one integrated approach.
              </p>
            </div>
          </div>
        </motion.div>


        {/* SERVICES */}
        <div className="compact-solutions__grid">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="compact-service"
                key={service.no}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut',
                  delay: (index % 3) * 0.06,
                }}
              >
                <div className="compact-service__icon">
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="compact-service__content">
                  <div className="compact-service__meta">
                    <span>{service.no}</span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <span className="compact-service__arrow">
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.7}
                  />
                </span>
              </motion.article>
            );
          })}

        </div>


        {/* PROJECT TYPES */}
        <motion.div
          className="compact-solutions__footer"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <span className="compact-solutions__footer-label">
            PROJECT TYPES
          </span>

          <div className="compact-solutions__types">
            {projectTypes.map((type, index) => (
              <span
                className="compact-project-type"
                key={type}
              >
                {type}

                {index !== projectTypes.length - 1 && (
                  <i>•</i>
                )}
              </span>
            ))}
          </div>
        </motion.div>


        {/* BOTTOM */}
        <motion.div
          className="compact-solutions__statement"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span>
            CREATIVE HOME PLAN & DESIGN
          </span>

          <p>
            Designed with purpose.
            <em> Built for living.</em>
          </p>
        </motion.div>

      </div>
    </section>
  );
}