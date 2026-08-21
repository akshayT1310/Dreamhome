import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../data/siteData';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-grid">
        <div>
          <p className="section-kicker light">START YOUR PROJECT</p>
          <h2>
            Let’s Design The Home
            <span>You’ve Been Imagining.</span>
          </h2>
        </div>

        <div className="cta-copy">
          <p>
            Tell us about your plot, lifestyle and vision. We’ll help turn it into a thoughtful architectural plan.
          </p>
          <div className="cta-actions">
            <a href={whatsappLink('Hello, I want to start a home plan with Creative Home Plan & Design.')} target="_blank" rel="noreferrer" className="primary-button dark-button">
              Start Your Home Plan
              <ArrowRight size={16} />
            </a>
            <a href={whatsappLink('Hello, I would like to talk to a Creative Home designer.')} target="_blank" rel="noreferrer" className="secondary-button light-button">
              Talk To A Designer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
